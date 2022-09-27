import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/reducers/movieReducer"

const store = configureStore({
    reducer: {
        movie: movieReducer,
    }
});

export default store;