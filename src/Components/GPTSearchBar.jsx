import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
	API_OPTIONS,
	TMDB_SEARCH_URL,
	GEMINI_API_KEY,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/GPTSlice";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const GPTSearchBar = () => {
	const dispatch = useDispatch();
	const searchTextRef = useRef(null);

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

		try {
			const query = `Given the preference "${userPreference}", suggest 5 movies. Provide only the movie titles separated by commas, without any additional text.`;
			const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
			const gptResults = await model.generateContent(query);
			const response = gptResults?.response;
			if (!response) {
				throw new Error("No response from GPT.");
			}

			const titles = response
				.text()
				.split(",")
				.map((title) => title.trim());

			console.log(titles);

			const tmdbDataArray = await Promise.all(
				titles.map((title) => tmdbSearch(title))
			);
			const validResults = tmdbDataArray.filter(result => result !== null);

			dispatch(
				addGptMovieResult({
					movieNames: titles.filter(
						(_, index) => validResults[index] !== null
					),
					movieResults: validResults,
				})
			);
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
		</div>
	);
};

export default GPTSearchBar;
