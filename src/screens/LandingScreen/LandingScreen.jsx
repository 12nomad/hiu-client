import StyledLandingScreen from "./LandingScreen.styles";
import image from "../../assets/image.jpg";
import { Button } from "@mui/material";

const StyledLanding = () => {
  return (
    <StyledLandingScreen>
      <div className="landing-left">
        <h3 className="landing-logo">Alefaso_Any!</h3>

        <div className="landing-hero">
          <h2>LOREM IPSUM</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            inventore maiores! Vero.
          </p>
          <button type="button" className="landing-button">
            Get Started
          </button>
        </div>
      </div>
      <div className="landing-right">
        <img src={image} alt="azerty" />
      </div>
    </StyledLandingScreen>
  );
};

export default StyledLanding;
