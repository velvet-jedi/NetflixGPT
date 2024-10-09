import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";

const Browse = () => {
	useNowPlaying();

	return (
		<div>
			<Header></Header>
			Browse
		</div>
	);
};

export default Browse;
