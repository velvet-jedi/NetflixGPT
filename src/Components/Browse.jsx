import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopular from "../hooks/usePopular";

const Browse = () => {
	useNowPlaying();
	usePopular();

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
