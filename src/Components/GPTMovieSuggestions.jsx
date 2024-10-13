import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const GPTMovieSuggestions = () => {
	const { movieNames, movieResults } = useSelector((store) => store.GPT);

	if (!movieNames || movieNames.length === 0 || !movieResults) return null;

	return (
		<div className="p-2 m-2 bg-black text-white bg-opacity-80">
			<div className="font-bold text-xl relative z-20 px-1 py-8 mx-auto max-w-7xl flex flex-wrap">
				{movieNames.map((movieName, index) => {
					if (movieResults[index]) {
						return (
							<MovieList
								key={movieName}
								category={movieName}
								movies={[movieResults[index]]}
							/>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
};
