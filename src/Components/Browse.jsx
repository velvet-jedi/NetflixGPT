import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
	const getNowPlaying = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?&page=1",
			API_OPTIONS
		);
		const json = data.json();
		console.log(json);
	};

	useEffect(() => {
		getNowPlaying();
	}, []);

	return (
		<div>
			<Header></Header>
			Browse
		</div>
	);
};

export default Browse;
