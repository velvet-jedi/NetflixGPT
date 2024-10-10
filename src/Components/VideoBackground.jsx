import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
	const dispatch = useDispatch();

	const trailerVideo = useSelector((store) => store.movies.trailerVideo);

	// const [key, setKey] = useState(null); // State to hold the YouTube video key
	const getTrailer = async () => {
		const url =
			"https://api.themoviedb.org/3/movie/976573/videos?language=en-US";

		const data = await fetch(url, API_OPTIONS);

		const json = await data.json();

		let trailer = json.results.filter((video) => video.type == "Trailer");
		trailer = trailer.length ? trailer[0] : json.results[0];

		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getTrailer();
	}, []);

	return (
		<div>
			{
				<iframe
					className=""
					width="1749"
					height="648"
					src={`https://www.youtube.com/embed/${trailerVideo?.key}`} // Correct interpolation
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			}
		</div>
	);
};

export default VideoBackground;
