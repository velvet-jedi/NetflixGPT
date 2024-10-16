import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
	const dispatch = useDispatch();
	// const [key, setKey] = useState(null); // State to hold the YouTube video key
	const trailerVideo = useSelector((store) => store.movies.trailerVideo);
	useEffect(() => {
		const getTrailer = async () => {
			if (!movieID) return;

			const url = `https://api.themoviedb.org/3/movie/976573/videos?language=en-US`;
			try {
				const data = await fetch(url, API_OPTIONS);
				const json = await data.json();
				let trailer = json.results.filter(
					(video) => video.type === "Trailer"
				);
				trailer = trailer.length ? trailer[0] : json.results[0];
				dispatch(addTrailerVideo(trailer));
			} catch (error) {
				console.error("Error fetching trailer:", error);
			}
		};
		if (trailerVideo) return null;
		getTrailer();
	}, [movieID, dispatch]);
};

export default useMovieTrailer;
