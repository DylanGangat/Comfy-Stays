// Styles
import "./Hero.scss";

// Images
import HeroImage from "../assets/hero-image.svg";
import Companies from "../assets/companies.svg";

// Components
import RentalSearchForm from "./RentalSearchForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-form">
          <RentalSearchForm />
          <div className="sponsor">
            <span>Sponsored by:</span>
            <img src={Companies} alt="company logos" />
          </div>
        </div>
        <figure className="hero-image">
          <img src={HeroImage} alt="People working together" />
        </figure>
      </div>
    </section>
  );
}
