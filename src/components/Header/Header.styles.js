import { Container, MenuList } from "@mui/material";
import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  video {
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: relative;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 1)
  );
`;

export const NavBar = styled.nav`
  padding: 2rem 3.5rem;
  display: flex;
  align-items: center;
  h1 {
    width: fit-content;
    font-size: 2.4rem;
    margin: 0;
    width: 27rem;
    margin-left: 2rem;
    color: #fff;
    margin-right: auto;
  }
`;

export const Menu = styled.div`
  button {
    margin-left: 2rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    background: transparent;
  }
`;
