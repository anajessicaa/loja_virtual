import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./RatingStars.css"; // Suponha que você coloque o CSS aqui

function RatingStars({ rating }) {
  const filledStars = Math.floor(rating);

  const starFilledWidth = (index) => {
    if (index < filledStars) return "100%";
    if (index === filledStars) return `${Math.round((rating - filledStars) * 100)}%`;
    return "0%";
  };

  return (
    <div className="rating" aria-label={`Nota: ${rating} de 5`}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className="star" key={index}>
            <div
              className="starFull"
              style={{ width: starFilledWidth(index) }}
            >
              <BsStarFill />
            </div>
            <div className="starEmpty">
              <BsStar />
            </div>
          </div>
        ))}
    </div>
  );
}

export default RatingStars;
