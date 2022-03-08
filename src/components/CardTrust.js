// Styles
import "./CardTrust.scss";

export default function CardTrust({ card }) {
  return (
    <div className="flow-content card">
      <img src={card.img} alt={`Illustration of a ${card.title} badge`} />
      <h3 className="subtitle">{card.title}</h3>
      <p>{card.details}</p>
    </div>
  );
}
