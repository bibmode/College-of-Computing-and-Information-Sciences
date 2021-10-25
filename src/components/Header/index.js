import { Background, Title, Wrapper } from "./Header.styles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";

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
        <NavBar />

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
