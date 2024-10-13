import React from "react";
import { GPTMovieSuggestions } from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { HOME_BG } from "../utils/constants";

const GPTSearch = () => {
	return (
		<>
			<div className="absolute -z-10">
				<img
					className="h-screen object-cover"
					src={HOME_BG}
					alt="bg-image"
				/>
			</div>
			<div className="">
				<GPTSearchBar></GPTSearchBar>
				<GPTMovieSuggestions></GPTMovieSuggestions>
			</div>
		</>
	);
};

export default GPTSearch;
