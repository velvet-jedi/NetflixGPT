import React from "react";
import MovieTile from "./MovieTile";

const MovieList = ({ category, movies }) => {
	// Log only if movies exist
	if (!movies || !Array.isArray(movies) || movies.length === 0) {
		return (
			<div className="text-center text-white mt-4">
				No movies available for {category}
			</div>
		);
	}

	return (
		<div className="px-10 ">
			<h1 className="text-lg md:text-3xl text-white font-bold py-4">{category}</h1>
			<div className="flex overflow-x-scroll">
				<div className="flex">
					{movies.map((movie) => (
						<div
							className="px-3"
							key={movie.id}
						>
							<MovieTile poster={movie.poster_path} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
