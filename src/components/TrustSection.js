// Styles
import "./TrustSection.scss";

// Cards data
import { cards } from "../data/data";

// Components
import TrustCard from "./TrustCard";

export default function TrustSection() {
  return (
    <section className="trust bg-dark center">
      <div className="container">
        <h2>Why trust us?</h2>
        <div className="grid spacer">
          {cards.map(card => (
            <TrustCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
