import { Background, Menu, NavBar, Title, Wrapper } from "./Header.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useEffect, useState } from "react";

const Header = () => {
  const [play, setPlay] = useState(true);

  useEffect(() => {
    play
      ? document.querySelector("#background-video").play()
      : document.querySelector("#background-video").pause();
  }, [play]);

  return (
    <Background>
      <video id="background-video" playsInline autoPlay loop muted>
        <source src="images/video.mp4" type="video/mp4" />
      </video>
      <Wrapper>
        {/* navigation bar */}
        <NavBar>
          <img
            src="images/download__1_-removebg-preview 1 (1).png"
            alt="ccis logo"
          />
          <h1>College of Information & Computing Sciences</h1>
          <Menu>
            <button>
              About Us <KeyboardArrowDownIcon fontSize="large" />
            </button>
            <button>
              Research and Innovation <KeyboardArrowDownIcon fontSize="large" />{" "}
            </button>
            <button>
              Programs Offered <KeyboardArrowDownIcon fontSize="large" />{" "}
            </button>
            <button>
              Others <KeyboardArrowDownIcon fontSize="large" />{" "}
            </button>
          </Menu>
        </NavBar>

        {/* title and tagline */}
        <Title>
          <h2>CCIS</h2>
          <h3>Your Best Option to Success</h3>
          <button onClick={() => setPlay(!play)}>
            {play ? (
              <PauseCircleOutlineIcon className="videoBtn" />
            ) : (
              <PlayCircleOutlineIcon className="videoBtn" />
            )}
          </button>
        </Title>
      </Wrapper>
    </Background>
  );
};

export default Header;
