import StyledLandingScreen from "./LandingScreen.styles";
import image from "../../assets/image.jpg";
import { Link } from "react-router-dom";

const StyledLanding = () => {
  return (
    <StyledLandingScreen>
      <div className="landing-left">
        <h3 className="landing-logo">Alefaso_Ary!</h3>

        <div className="landing-hero">
          <h2>Tairo mba omeo!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolore aliquam laborum?
          </p>
          <Link to="/dashboard">
            <button type="button" className="landing-button">
              Eny ary...
            </button>
          </Link>
        </div>
      </div>
      <div className="landing-right">
        <img src={image} alt="azerty" />
      </div>
    </StyledLandingScreen>
  );
};

export default StyledLanding;
