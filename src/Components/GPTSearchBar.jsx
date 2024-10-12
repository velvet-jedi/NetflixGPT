import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constants"; // Ensure the path is correct

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const GPTSearchBar = () => {
	const searchTextRef = useRef(null); // Reference for user input
	const [movieTitles, setMovieTitles] = useState(""); // To store movie recommendations
	const [errorMessage, setErrorMessage] = useState(null); // To store error messages

	// Initialize GoogleGenerativeAI instance once

	const handleGptSearchClick = async () => {
		// searchTextRef.current.focus()
		const userPreference = searchTextRef.current.value.trim();
		if (!userPreference) {
			setErrorMessage("Please enter your movie preferences.");
			return;
		}

		const query = `Given the preference "${userPreference}", suggest 5 movies. Provide only the movie titles separated by commas, without any additional text.`;

		try {
			const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
			const result = await model.generateContent(query);

			const response = await result.response;
			const text = response.text();

			setMovieTitles(text);
			setErrorMessage(null);
		} catch (error) {
			console.error("Error fetching movie recommendations:", error);
			setErrorMessage("Something went wrong. Please try again.");
		}
	};
	return (
		<div className="pt-[10%] relative flex flex-col items-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-1/3 bg-black flex rounded-xl shadow-xl"
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
				>
					Search
				</button>
			</form>

			{/* Display movie recommendations or error message */}
			{movieTitles && (
				<div className="mt-4 text-white">
					<h3>Recommended Movies:</h3>
					<p>{movieTitles}</p>
				</div>
			)}
			{errorMessage && (
				<div className="mt-4 text-red-500">{errorMessage}</div>
			)}
		</div>
	);
};

export default GPTSearchBar;
