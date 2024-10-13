import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieTile = ({ poster }) => {
	if (!poster) return null;
	return (
		<div className="md:w-48 ">
			<img
				className="rounded-xl"
				src={IMAGE_CDN + poster}
				alt=""
			/>
		</div>
	);
};

export default MovieTile;
