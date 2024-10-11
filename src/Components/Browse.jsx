import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopular from "../hooks/usePopular";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
	const showSearch = useSelector((store) => store.GPT.showGPTSearch);
	useNowPlaying();
	usePopular();

	return (
		<div>
			<Header></Header>

			{showSearch ? (
				<GPTSearch></GPTSearch>
			) : (
				<div className="">
					<MainBrowseContainer></MainBrowseContainer>
					<SecondaryBrowseContainer></SecondaryBrowseContainer>
				</div>
			)}

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
