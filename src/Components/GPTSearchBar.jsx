import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
	API_OPTIONS,
	TMDB_SEARCH_URL,
	GEMINI_API_KEY,
} from "../utils/constants";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const GPTSearchBar = () => {
	const searchTextRef = useRef(null);
	const [movieTitles, setMovieTitles] = useState([]);
	const [tmdbResults, setTmdbResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const tmdbSearch = async (movieTitle) => {
		try {
			const data = await fetch(
				`${TMDB_SEARCH_URL}${encodeURIComponent(
					movieTitle
				)}&include_adult=false&language=en-US&page=1`,
				API_OPTIONS
			);
			const json = await data.json();
			return json.results && json.results.length > 0
				? json.results[0]
				: null;
		} catch (error) {
			console.error("Error fetching TMDB data:", error);
			return null;
		}
	};

	const handleGptSearchClick = async () => {
		const userPreference = searchTextRef.current.value.trim();
		if (!userPreference) {
			setErrorMessage("Please enter your movie preferences.");
			return;
		}

		setIsLoading(true);
		setErrorMessage(null);
		setMovieTitles([]);
		setTmdbResults([]);

		try {
			// Get movie recommendations from Gemini
			const query = `Given the preference "${userPreference}", suggest 5 movies. Provide only the movie titles separated by commas, without any additional text.`;
			const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
			const result = await model.generateContent(query);
			const response = await result.response;
			const titles = response
				.text()
				.split(",")
				.map((title) => title.trim());
			setMovieTitles(titles);

			// Fetch TMDB data for each movie title
			const tmdbPromises = titles.map((title) => tmdbSearch(title));
			const tmdbResults = await Promise.all(tmdbPromises);
			setTmdbResults(tmdbResults.filter(Boolean));
			console.log(movieTitles);
			console.log(tmdbResults);
		} catch (error) {
			console.error("Error in search process:", error);
			setErrorMessage("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="pt-[10%] relative flex flex-col items-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-full max-w-md bg-black flex rounded-xl shadow-xl"
			>
				<input
					id="searchbar"
					ref={searchTextRef}
					type="text"
					placeholder="What kind of movies do you like?"
					className="p-2 m-2 w-full rounded-lg"
				/>
				<button
					className="my-2 mr-2 px-4 bg-red-600 text-white rounded-lg"
					onClick={handleGptSearchClick}
					disabled={isLoading}
				>
					{isLoading ? "Searching..." : "Search"}
				</button>
			</form>

			{errorMessage && (
				<div className="mt-4 text-red-500">{errorMessage}</div>
			)}

			{isLoading && <div className="mt-4">Loading...</div>}

			{/* {movieTitles.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Recommended Movies:</h3>
                    <ul className="mt-2">
                        {movieTitles.map((title, index) => (
                            <li key={index}>{title}</li>
                        ))}
                    </ul>
                </div>
            )} */}

			{/* {tmdbResults.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">TMDB Results:</h3>
                    <ul className="mt-2">
                        {tmdbResults.map((result, index) => (
                            <li key={index}>{result.title} (Released: {result.release_date})</li>
                        ))}
                    </ul>
                </div>
            )} */}
		</div>
	);
};

export default GPTSearchBar;
