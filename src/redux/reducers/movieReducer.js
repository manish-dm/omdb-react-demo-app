const INITIAL_STATE = {
    moviesList: [],
    showsList: [],
  };
  
  const movieReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case "FETCHMOVIES":
        return {
          ...state,
            moviesList: [payload]
        };

        case "FETCHSHOWS":
        return {
          ...state,
            showsList: [payload]
        };

      /********** return the initial state ************/
      default:
        return state;
    }
  };
  
  export default movieReducer;