import React from "react";

const VideoTitle = ({ title, overview }) => {


	return (
		<div className=" bg-gradient-to-r from-black aspect-video pt-[20%] px-24 absolute text-white">
			<h1 className="font-bold text-6xl">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview}</p>
			<div className="">
				<button className="bg-slate-400 p-4 px-12 mx-4 text-xl text-white bg-opacity-50 rounded">
					▶️ Play
				</button>
				<button className="bg-slate-400 p-4 px-12 mx-4 text-xl text-white bg-opacity-50 rounded">
					More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
