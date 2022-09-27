import React from "react";
import { useSelector } from "react-redux";
import Card from "../moviecards/Cards";
import "./Movie.css";

const Movies = () => {
  const moviesList = useSelector((state) => state.movie.moviesList);

  return (
    <div className="moviesPageCss">
      {moviesList?.map((data) =>
        data?.Search.map((movie) => {
          return (
            <Card
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
              isFavorite={false}
            />
          );
        })
      )}
    </div>
  );
};

export default Movies;
