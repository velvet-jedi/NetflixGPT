import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="via-black/10 z-20 bg-gradient-to-r from-black aspect-video pt-[18%] px-20 absolute text-white">
			<h1 className="font-bold text-6xl">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview}</p>
			<div className="flex mt-4 space-x-4">
				<button className="bg-white text-black flex hover:bg-slate-600 p-4 px-12 bg-opacity-80 transition-all rounded-lg text-xl">
					<img
						src="https://www.v0.app/api/image/radix-icons-play-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoicmFkaXgtaWNvbnMiLCJpY29uU2x1ZyI6InBsYXkifX0"
						alt=""
						className="w-8"
					/>{" "}
					Play
				</button>
				<button className="bg-gray-500 items-center flex px-12 mx-2 text-xl text-white bg-opacity-50 p-4 rounded-lg">
					More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;


