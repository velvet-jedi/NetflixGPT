import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieTile = ({ poster }) => {
	return (
		<div className="w-48 pr-4 ">
			<img
				className="rounded-xl"
				src={IMAGE_CDN + poster}
				alt=""
			/>
		</div>
	);
};

export default MovieTile;
