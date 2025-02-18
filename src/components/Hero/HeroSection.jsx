import "./HeroSection.css";
import imageSrc from "../../assets/images/hero.png"; // Make sure to store your image inside src/assets/
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Unique Styles!</h1>
        <p>
          Browse our collection of handmade clothing and find the perfect
          outfit. Plus, create your own custom designs tailored to your needs.
          Shop now and express your individuality!
        </p>
        <button className="hero-btn" onClick={() => navigate("/man")}>Browse More</button>
      </div>
      <div className="hero-image">
        <img src={imageSrc} alt="Shopping Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
