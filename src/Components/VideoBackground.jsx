import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
	const trailerVideo = useSelector((store) => store.movies.trailerVideo);

	if (!trailerVideo) {
		return <div>Loading...</div>;
	}

	return (
		<div className="relative w-full h-0 pb-[56.25%]">
			{" "}
			{
				<iframe
					className="absolute top-0 left-0 w-full h-full"
					src={
						`https://www.youtube.com/embed/${trailerVideo.key}` +
						`?&autoplay=1&mute=1&vq=hd1080&loop=1&playlist=${trailerVideo.key}&controls=0&modestbranding=1&showinfo=0`
					} // Correct interpolation
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			}
		</div>
	);
};

export default VideoBackground;
