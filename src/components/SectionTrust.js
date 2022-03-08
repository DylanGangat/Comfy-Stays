// Styles
import "./SectionTrust.scss";

// Cards data
import { cards } from "../data/data";

// Components
import CardTrust from "./CardTrust";

export default function SectionTrust() {
  return (
    <section className="trust bg-dark center">
      <div className="container">
        <h2>Why trust us?</h2>
        <div className="grid spacer">
          {cards.map(card => (
            <CardTrust key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
