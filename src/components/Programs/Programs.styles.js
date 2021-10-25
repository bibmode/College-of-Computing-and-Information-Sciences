import styled from "styled-components";
import { Container } from "@mui/material";

export const Containment = styled(Container)`
  width: 100vw;
  height: fit-content;
  position: relative;

  .right {
    right: 0;
  }

  .left {
    left: 0;
  }
`;

export const Title = styled.div`
  width: fit-content;
  padding: 1rem 1.5rem;
  padding-right: 1rem;
  background-color: var(--orange-red);
  color: var(--white);
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  h3 {
    font-weight: 600;
    margin-right: 1rem;
  }

  .icon {
    font-size: 2.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const Card = styled.div`
  text-align: left;
  background-color: transparent;
  width: 45rem;
  height: 24rem;
  border: solid 2px var(--grey);
  border-left-style: none;
  padding-left: 4.5rem;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  margin-right: 3.5rem;

  &:before {
    content: " ";
    position: absolute;
    width: 2rem;
    height: 101%;
    top: -1px;
    left: 0;
    background-color: ${(props) => props.accent};
  }

  h4 {
    font-size: 3.4rem;
    margin-top: 5.5rem;
  }

  a {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: -2px;
    max-width: 18rem;

    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;
    font-size: 2rem;

    background-color: var(--white);
    border: solid 2px var(--grey);
    color: var(--text-black);
    text-decoration: none;

    :hover {
      & > * {
        color: ${(props) => props.accent};
      }
    }

    h5 {
      margin-right: 1rem;
      font-weight: 500;
    }
  }
`;

export const Move = styled.button`
  background-color: var(--black-text);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  bottom: 35%;
  filter: opacity(0.3);

  :hover {
    filter: opacity(1);
  }

  .moveIcon {
    color: var(--white);
    font-size: 5rem;
  }
`;
