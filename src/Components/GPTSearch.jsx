import React from "react";
import { GPTMovieSuggestions } from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { HOME_BG } from "../utils/constants";

const GPTSearch = () => {
	return (
		<div>
			<div className="absolute">
				<img
					className="w-full h-full object-cover"
					src={HOME_BG}
					alt="bg-image"
				/>
			</div>
			<GPTSearchBar></GPTSearchBar>
			<GPTMovieSuggestions></GPTMovieSuggestions>
		</div>
	);
};

export default GPTSearch;
