import { Card, Containment, Move, Title, Wrapper } from "./Programs.styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import HorizontalScroll from "react-scroll-horizontal";

const Programs = () => {
  const programs = [
    {
      name: "B.S. Computer Science",
      link: "https://ccis.carsu.edu.ph/Index/program?epr=BSinComputerScience",
      color: "var(--orange)",
    },
    {
      name: "B.S. Information Systems",
      link: "https://ccis.carsu.edu.ph/Index/program?epr=BSInformationSystems",
      color: "var(--yellow)",
    },
    {
      name: "B.S. Information Technology",
      link: "https://ccis.carsu.edu.ph/Index/program?epr=BSInformationTechnology",
      color: "var(--green)",
    },
    {
      name: "M.S. Information Technology",
      link: "https://ccis.carsu.edu.ph/Index/program?epr=MasterofIT",
      color: "var(--blue)",
    },
  ];

  const moveRight = () => {
    document.querySelector("#programWrapper").scrollBy(450, 0);
  };
  const moveLeft = () => {
    document.querySelector("#programWrapper").scrollBy(-450, 0);
  };

  // const child = { width: `300em`, height: `100%` };
  // const parent = { width: `300em`, height: `30vh` };

  return (
    <Containment>
      <Title>
        <h3>Explore Our Programs</h3>
        <ArrowDownwardIcon className="icon" />
      </Title>
      <Wrapper id="programWrapper">
        {programs.map((program, index) => (
          <Card accent={program.color} key={index}>
            <h4>{program.name}</h4>
            <a target="_blank" href={program.link} rel="noopener noreferrer">
              <h5>More Details</h5>
              <ArrowRightAltIcon className="arrow" />
            </a>
          </Card>
        ))}
      </Wrapper>
      <Move className="left" onClick={() => moveLeft()}>
        <KeyboardArrowLeftIcon className="moveIcon" />
      </Move>
      <Move className="right" onClick={() => moveRight()}>
        <KeyboardArrowRightIcon className="moveIcon" />
      </Move>
    </Containment>
  );
};

export default Programs;
