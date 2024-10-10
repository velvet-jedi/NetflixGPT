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
					category={"Trending"}
					movies={movies.nowPlayingMovies}
				></MovieList>
				<MovieList
					category={"Popular"}
					movies={movies.popularMovies}
				></MovieList>
				<MovieList
					category={"Upcoming"}
					movies={movies.nowPlayingMovies}
				></MovieList>
				<MovieList
					category={"Horror"}
					movies={movies.nowPlayingMovies}
				></MovieList>
			</div>
		</div>
		// popular
		// nowplayinh
		// trending
		// comedy
		// horror
		// action
		// drama
		// documentary
		//
	);
};

export default SecondaryBrowseContainer;
