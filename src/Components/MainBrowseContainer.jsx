import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainBrowseContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (movies === null) return;
	const mainMovie = movies[0];
	const { original_title, overview } = mainMovie;
	return (
		<div>
			<VideoTitle
				title={original_title}
				overview={overview}
			></VideoTitle>
			<VideoBackground movie={mainMovie} />
		</div>
	);
};

export default MainBrowseContainer;
