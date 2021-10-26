import styled from "styled-components";
import { Container, Grid } from "@mui/material";

export const Background = styled.div`
  background-image: linear-gradient(
    to right,
    var(--light-grey) 50%,
    var(--white) 50%
  );
  width: 100%;

  @media only screen and (max-width: 37.5em) {
    background-image: var(--white);
  }
`;

export const Containment = styled(Container)``;

export const Wrapper = styled(Grid)`
  width: 100%;
`;

export const Activities = styled(Grid)`
  padding-block: 8rem 6rem;
  padding-inline: 0 12rem;
  text-align: left;
  font-size: 1.8rem;

  h3 {
    padding: 0 10rem 3rem 5rem;
    font-size: 3.6rem;
    z-index: 10;
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      top: -2rem;
      left: 0;
      height: 4rem;
      width: 18rem;
      background-color: var(--yellow);
      z-index: -1;
    }
  }

  p {
    margin-bottom: 3.5rem;
  }

  a {
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const Showcase = styled(Grid)``;
