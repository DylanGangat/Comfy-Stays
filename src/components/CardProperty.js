// Styles
import "./CardProperty.scss";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CardProperty({
  // destructured the hotel prop and then destructured the hotels info that I needed.
  hotel: {
    max_1440_photo_url,
    hotel_name,
    review_score,
    currency_code,
    min_total_price,
  },
}) {
  return (
    <div className="property-card">
      <div className="image-container">
        <img className="image" src={max_1440_photo_url} alt={hotel_name} />
      </div>
      <div className="details flow-content">
        <div className="header">
          <h3 className="subtitle">{hotel_name}</h3>
          <div className="rating">
            <span className="number">{review_score}</span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </div>
        </div>
        <p className="price">{`${min_total_price} ${currency_code}`}</p>
      </div>
    </div>
  );
}
