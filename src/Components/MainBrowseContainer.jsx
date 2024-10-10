import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovieTrailer from "../hooks/useMovieTrailer"; // Import your custom hook

const MainBrowseContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	const mainMovie = movies?.[0];
	useMovieTrailer(mainMovie?.id);

    if (!mainMovie) return null;

	const { original_title, overview, id } = mainMovie;

	
	return (
		<div className="">
			<VideoTitle 
				title={original_title}
				overview={overview}
			></VideoTitle>
			<VideoBackground />
		</div>
	);
};

export default MainBrowseContainer;
