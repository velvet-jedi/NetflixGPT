import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
	const trailerVideo = useSelector((store) => store.movies.trailerVideo);

	if (!trailerVideo) {
		return <div>Loading...</div>;
	}

	return (
		<div className="">
			{
				<iframe
					className="aspect-video"
					width="1749"
					height="648"
					src={`https://www.youtube.com/embed/${trailerVideo.key}`} // Correct interpolation
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			}
		</div>
	);
};

export default VideoBackground;
