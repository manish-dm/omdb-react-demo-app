import React from "react";
import Card from "../../moviecards/Cards";
import "./CarouselList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from "../../../utils/CarouselSettings";

const CarouselList = ({ carouselType, movieData }) => {
  return (
    <div className="carouselPage">
      <h2 style={{ padding: "0 0.7rem" }}>{carouselType}</h2>
      <Slider {...settings}>
        {movieData?.map((data) =>
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
      </Slider>
    </div>
  );
};

export default CarouselList;
