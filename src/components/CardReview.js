import { useState } from "react";

//Styles
import "./CardReview.scss";

// Data
import { reviews } from "../data/data";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function CardReview() {
  // It will get the 1st item in the reviews array and display it.
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  // Getting a specific item from the reviews array and display it as the component.
  const review = reviews[current];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      {review && (
        <div key={review.id} className="review-card flow-content">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="2xl"
            className="quote-icon"
          />

          <blockquote className="quote">{review.quote}</blockquote>
          <div className="reviewer-profile">
            <img
              className="reviewer-image"
              src={review.image}
              alt="A persons portrait"
            />
            <div className="reviewer-details">
              <h3>{review.name}</h3>
              <p>{review.location}</p>
            </div>
          </div>
          <div className="arrows">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="xl"
              className="arrow"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              size="xl"
              className="arrow"
              onClick={nextSlide}
            />
          </div>
        </div>
      )}
    </>
  );
}
