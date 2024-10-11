import React from "react";
import MovieTile from "./MovieTile";

const MovieList = ({ category, movies }) => {
	// Log only if movies exist
	if (movies) {
		// console.log(movies);
	} else {
		console.log("Movies data is still loading");
	}
	return (
		movies && (
			<div className="px-20 py-0">
				<h1 className="text-3xl text-white font-bold py-4">
					{category}
				</h1>
				<div className="flex overflow-x-scroll">
					<div className="flex">
						{movies.map((movieCard) => (
							<div
								className="px-3"
								key={movieCard.id}
							>
								<MovieTile poster={movieCard.poster_path} />
							</div>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default MovieList;
