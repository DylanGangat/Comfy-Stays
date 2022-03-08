// Styles
import "./SectionReview.scss";

// Images
import ReviewImage from "../assets/review.png";

// Components
import CardReview from "./CardReview";

export default function ReviewSection() {
  return (
    <section className="reviews bg-accent">
      <div className="container grid">
        <div>
          <h2>People say about us</h2>
          <div className="spacer">
            {/* Gets the review card component */}
            <CardReview />
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
