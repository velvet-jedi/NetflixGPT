import React from "react";

const GPTSearchBar = () => {
	return (
		<div className="pt-[10%] relative flex justify-center center">

			<form
				action=""
				className=" w-1/3  bg-black flex"
			>
				<input
					type="text"
					placeholder="What to watch?"
					className="p-2 m-2 w-full rounded-lg"
				/>
				<button className="my-2 mr-2 px-2 bg-red-600 text-white rounded-lg">
					Search
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
