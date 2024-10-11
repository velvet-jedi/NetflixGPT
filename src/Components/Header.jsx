import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				// ...
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				// ...
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, [dispatch]);

	function handleSignOut() {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	}

	const handleSearchClick = () => {
		dispatch(toggleGPTSearchView());
	};

	return (
		<div className="absolute flex justify-between w-full z-30 px-8 p-6 bg-gradient-to-b from-black">
			<img
				className="w-44"
				src={LOGO}
				alt="logo"
			/>
			{user && (
				<div className="flex gap-4 items-center">
					<button
						className="py-2 px-4 bg-purple-800 my-2 text-white rounded-lg"
						onClick={handleSearchClick}
					>
						Search
					</button>
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
