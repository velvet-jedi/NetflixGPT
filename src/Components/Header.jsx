import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	function handleSignOut() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.

				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	}

	return (
		<div className="absolute flex justify-between w-full z-20 px-8 p-6 bg-gradient-to-b from-black">
			<img
				className="w-44"
				src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
				alt="logo"
			/>
			{user && (
				<div className="flex gap-2">
					<img
						src={user?.photoURL}
						alt="user"
						className="h-12 w-12 shadow-xl rounded-2xl"
					/>
					<button
						onClick={handleSignOut}
						className="font-bold text-white cursor-pointer"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
