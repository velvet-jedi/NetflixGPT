import React from "react";
import appRouter from "../Routes/routes";
import { RouterProvider } from "react-router-dom";


const Body = () => {


	return (
		<div>
			<RouterProvider router={appRouter}></RouterProvider>
		</div>
	);
};

export default Body;
