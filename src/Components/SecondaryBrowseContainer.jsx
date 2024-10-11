import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryBrowseContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		<div className="bg-gray-900">
			<div className="-mt-72  z-20 relative">
				<MovieList
					category={"Now Playing"}
					movies={movies.nowPlayingMovies}
				></MovieList>

				<MovieList
					category={"Popular"}
					movies={movies.popularMovies}
				></MovieList>
			</div>
		</div>

		// trending
		// comedy
		// horror
		// action
		// drama
	);
};

export default SecondaryBrowseContainer;
