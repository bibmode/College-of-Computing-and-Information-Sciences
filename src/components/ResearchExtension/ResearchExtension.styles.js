import styled from "styled-components";
import { Container } from "@mui/material";

export const Background = styled.div`
  background-color: var(--light-grey);
  width: 100%;
  height: fit-content;
`;

export const Containment = styled(Container)`
  min-height: 50rem;
  padding-block: 8rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50rem;
`;

export const Left = styled.div`
  img {
    width: 26vw;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 26vw);
  padding-right: 4rem;
  text-align: left;

  p,
  a {
    margin-block: 2rem;
  }

  a {
    align-self: center;
    text-decoration: underline;
  }

  #top-title {
    position: relative;
    width: fit-content;
    z-index: 1;
    align-self: center;

    ::before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: -0.8rem;
      width: 105%;
      height: 1rem;
      z-index: -1;
      background-color: var(--orange-red);
      filter: opacity(0.4);
    }
  }

  #sub-title {
    padding-block: 2rem;
  }
`;

export const Agendas = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  li {
    background-color: var(--grey);
    width: max-content;
    white-space: nowrap;
    margin: 0.5rem 1rem 0.5rem 0;
    padding: 0.8rem 1rem;
  }
`;

export const Lists = styled.div`
  display: flex;
  align-items: center;
  li {
    list-style: none;
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  ul {
    width: 50%;
  }

  .list-icon {
    color: var(--orange-red);
  }

  #left-list {
    li {
      font-size: 1.8rem;
    }
  }

  #right-list {
    li {
      display: flex;
      align-items: center;
    }
    h4 {
      font-weight: 600;
      font-size: 1.4rem;
    }
  }
`;
