import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";

const Browse = () => {
	useNowPlaying();

	return (
		<div>
			<Header></Header>
			<MainBrowseContainer></MainBrowseContainer>
			<SecondaryBrowseContainer></SecondaryBrowseContainer>
			{/* {
					maincontainer
						mainvideo
					second container
						movielist api
							cards flex
			} */}
		</div>
	);
};

export default Browse;
