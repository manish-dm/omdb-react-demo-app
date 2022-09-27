import React from "react";
import { useSelector } from "react-redux";
import Card from "../moviecards/Cards";
import "../movies/Movie.css";

const Shows = () => {
  const showsList = useSelector((state) => state.movie.showsList);

  return (
    <div className="moviesPageCss">
      {showsList?.map((data) =>
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

export default Shows;
