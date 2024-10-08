import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const toggleForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div className="relative min-h-screen">
			<Header></Header>
			<div className="absolute top-0 left-0 w-full h-full z-[-1]">
				<img
					className="w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
					alt="bg-image"
				/>
			</div>

			<div className="flex justify-center items-start pt-60 min-h-screen">
				<form className="background-tint mt-4 w-2/5 rounded-3xl  p-8 flex flex-col">
					<h1 className="text-white flex  font-bold text-4xl mb-6 pt-4">
						{isSignInForm ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignInForm && (
						<input
							type="text"
							className="px-4 background-tint  border-gray-500 border py-4 m-2 rounded"
							placeholder="Full name"
						/>
					)}
					<input
						type="text"
						className="px-4 background-tint border-gray-500 border py-4 m-2  rounded"
						placeholder="Email or mobile number"
					/>
					<input
						type="password"
						placeholder="Password"
						className="background-tint px-4 py-4 m-2   border-gray-500 border rounded"
					/>
					<button
						className="rounded bg-red-700 p-2 mx-2 py-4 mt-6 text-white"
						type="submit"
					>
						{isSignInForm ? "Sign In" : "Sign Up"}
					</button>
					<div className="text-white">
						<p
							className="cursor-pointer m-6"
							onClick={toggleForm}
						>
							{!isSignInForm
								? "Already a user? Sign in now"
								: "New to Netflix? Sign up now"}
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
