// Styles
import "./TrustCard.scss";

export default function TrustCard({ card }) {
  return (
    <div className="flow-content card">
      <img src={card.img} alt="Illustration of a review chart" />
      <h3 className="subtitle">{card.title}</h3>
      <p>{card.details}</p>
    </div>
  );
}
