import styled from "styled-components";
import { Container } from "@mui/material";

export const Containment = styled(Container)`
  height: max-content;
  margin-block: 16rem 8rem;
  position: relative;
  z-index: 2;

  h3 {
    font-size: 3.6rem;
    font-weight: 600;
  }

  img {
    position: absolute;
    top: -10rem;
    right: -22rem;
    z-index: -1;
  }
`;

export const Center = styled.div`
  display: flex;
  text-align: left;
  padding-block: 8rem;

  :not(:last-of-type) {
    border-bottom: 2px solid var(--light-grey);
  }

  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5vw;
  }

  h4 {
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    width: 20vw;
  }

  button,
  p {
    font-size: 1.8rem;
    line-height: 1.8;
  }

  #item-0 {
    color: var(--orange);
    border: 0.4rem solid var(--orange);
    :hover {
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: var(--orange);
        filter: opacity(0.1);
      }
    }
  }
  #item-1 {
    color: var(--green);
    border: 0.4rem solid var(--green);
    :hover {
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: var(--green);
        filter: opacity(0.1);
      }
    }
  }
  #item-2 {
    color: var(--orange-red);
    border: 0.4rem solid var(--orange-red);
    :hover {
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: var(--orange-red);
        filter: opacity(0.1);
      }
    }
  }

  button {
    padding: 1rem 1.5rem;
    font-weight: 700;
    background-color: transparent;

    width: fit-content;
    position: relative;
    z-index: 2;
  }
`;
