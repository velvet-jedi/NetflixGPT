import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice"
import GPTSlice from "./GPTSlice"

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        GPT: GPTSlice,
    }
})

export default appStore;