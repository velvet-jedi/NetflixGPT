import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopular = () => {
    const dispatch = useDispatch();


    const nowPlayingMovies = useSelector(store => store.movies.popularMovies)

    const getPopular = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
        if (nowPlayingMovies) return null;
        getPopular();
    }, []);
};




export default usePopular;