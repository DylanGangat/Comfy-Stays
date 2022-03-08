// Styles
import "./Home.scss";

// Components
import Hero from "../../components/Hero";
import SectionTrust from "../../components/SectionTrust";
import SectionReview from "../../components/SectionReview";
import SectionProperty from "../../components/SectionProperty";

export default function Home() {
  // Main section where you should pass props from and remember you should NOT PROP DRILL!
  return (
    <>
      <Hero />

      <SectionTrust />

      <SectionReview />

      <SectionProperty />
    </>
  );
}
