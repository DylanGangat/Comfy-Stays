// Styles
import "./ReviewSection.scss";

// Images
import ReviewImage from "../assets/review.png";

// Components
import ReviewCard from "./ReviewCard";

// Data
// import { reviews } from "../data/data";

export default function ReviewSection() {
  return (
    <section className="reviews bg-accent">
      <div className="container grid">
        <div>
          <h2>People say about us</h2>
          <div className="spacer">
            {/* {reviews.map(review => (
              <ReviewCard key={review.id} review={review} reviews={reviews}/>
            ))} */}
            <ReviewCard />
          </div>
        </div>
        <figure>
          <img
            src={ReviewImage}
            alt="An illustaration of a person reviewing a product"
          />
        </figure>
      </div>
    </section>
  );
}
