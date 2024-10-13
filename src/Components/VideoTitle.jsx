import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="via-black/10 z-20 bg-gradient-to-r from-black aspect-video pt-[18%] px-6 md:px-20 absolute text-white">
			<h1 className="text-2xl md:text-6xl font-bold ">{title}</h1>
			<p className="hidden md:inline-block py-6 text-lg w-1/4">
				{overview}
			</p>
			<div className="flex mt-4 space-x-4 my-4 md:m-0">
				<button className="bg-white md:py-4 text-black flex hover:bg-slate-600 py-1 md:px-12 px-3 bg-opacity-80 transition-all rounded-lg text-xl">
					<img
						src="https://www.v0.app/api/image/radix-icons-play-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoicmFkaXgtaWNvbnMiLCJpY29uU2x1ZyI6InBsYXkifX0"
						alt=""
						className="w-8"
					/>{" "}
					Play
				</button>
				<button className="bg-gray-500 items-center flex px-12 mx-2 text-xl text-white bg-opacity-50 p-4 rounded-lg hidden md:inline-block">
					More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
