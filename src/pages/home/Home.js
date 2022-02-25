// Styles
import "./Home.scss";

// Components
import Hero from "../../components/Hero";
import TrustSection from "../../components/TrustSection";
import ReviewSection from "../../components/ReviewSection";

export default function Home() {
  return (
    <>
      <Hero />

      <TrustSection />

      <ReviewSection />
    </>
  );
}
