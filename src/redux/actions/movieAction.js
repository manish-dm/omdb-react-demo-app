import api from "../../utils/api";

export const fetchMovies = (query) => async (dispatch) => {
    try {
        const response = await api.get(
          `?apiKey=${process.env.REACT_APP_MY_API_KEY}&s=${query}&type=movie`
        );
        if (response.status === 200 && response.data.Response === "True") {
          return dispatch({ type: "FETCHMOVIES", payload: response.data });
        } else {
          return {};
        }
      } catch (error) {
        console.log("encountered error while fetching movies list: ", error?.message);
      }
};

export const fetchShows = (query) => async (dispatch) => {
    try {
        const response = await api.get(
          `?apiKey=${process.env.REACT_APP_MY_API_KEY}&s=${query}&type=series`
        );
        if (response.status === 200 && response.data.Response === "True") {
          return dispatch({ type: "FETCHSHOWS", payload: response.data });
        } else {
          return {};
        }
      } catch (error) {
        console.log("encountered error while fetching shows list: ", error?.message);
      }
};