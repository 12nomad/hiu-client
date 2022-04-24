import styled from "styled-components";
import background from "../../assets/background.png";

const StyledLandingScreen = styled.header`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: "space-between";
  background: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #f8f8f8;
  overflow: "hidden";

  .landing-left {
    text-align: left;
    padding: 2.5rem;

    .landing-logo {
      font-size: 1.6rem;
      text-align: center;
      font-family: "ZCOOL KuaiLe";
      padding-right: 2.5rem;
    }

    .landing-hero {
      margin-top: 7.5rem;
      padding: 2rem;

      h2 {
        font-size: 3rem;
      }

      p {
        margin-top: 0.5rem;
        width: 75%;
        line-height: 1.6;
        font-size: 1.2rem;
      }
    }

    .landing-button {
      border: 2px solid #2274a5;
      padding: 0.8rem 1.2rem;
      color: #2274a5;
      background: #011936;
      border-radius: 5px;
      font-size: 1.1rem;
      margin-top: 1.5rem;
    }
  }

  .landing-right {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding-right: 2rem;
    }
  }
`;

export default StyledLandingScreen;
