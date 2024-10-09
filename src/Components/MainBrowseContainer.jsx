import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainBrowseContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (movies === null) return;
	const mainMovie = movies[0];
	return (
		<div>
			<VideoTitle></VideoTitle>
			<VideoBackground movie={mainMovie} />
		</div>
	);
};

export default MainBrowseContainer;
