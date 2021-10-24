import { MenuList } from "@mui/material";
import { Background, Menu, NavBar, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Background>
      <video id="background-video" playsInline autoPlay loop muted>
        <source src="images/video.mp4" type="video/mp4" />
      </video>
      <Wrapper>
        <NavBar>
          <img
            src="images/download__1_-removebg-preview 1 (1).png"
            alt="ccis logo"
          />
          <h1>College of Information & Computing Sciences</h1>
          <Menu>
            <button>About Us </button>
            <button>Research and Innovation </button>
            <button>Programs Offered </button>
            <button>Others </button>
          </Menu>
        </NavBar>
      </Wrapper>
    </Background>
  );
};

export default Header;
