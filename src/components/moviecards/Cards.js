import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cards.css";
import noImage from "../../assets/no-image-available.png";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Card = ({ image, title, year, isFavorite }) => {
  return (
    <div className="card">
      <div className="icon">
        {isFavorite ? (
          <i>
            <FontAwesomeIcon icon={faStarSolid} color="#09ff00" size="xl"/>
          </i>
        ) : (
          <i>
            <FontAwesomeIcon icon={faStarRegular} color="yellow" size="xl"/>
          </i>
        )}
      </div>
      {image === "N/A" ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className="info">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default Card;