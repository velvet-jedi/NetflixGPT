import React from "react";
import Login from "./Login";
import Browse from "./Browse";
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
