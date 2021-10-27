import styled from "styled-components";
import { Container } from "@mui/material";

export const Wrapper = styled.footer`
  width: 100%;
  min-height: 30rem;
  background-color: var(--black-text);
  padding-block: 6rem;
`;

export const Containment = styled(Container)``;

export const SocialMedia = styled.ul``;

export const TopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);

  img {
    width: 15%;
  }

  #address {
    width: 40rem;
    margin-right: auto;
    text-align: left;
    line-height: 1.6;

    h5 {
      font-size: 1.8rem;
    }
    h6 {
      margin-top: 2rem;
      font-size: 1.6rem;
    }
  }

  iframe {
    width: 45rem;
    height: 25rem;
    border: none;
    margin-bottom: 3rem;
  }
`;

export const BottomDiv = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  li {
    width: fit-content;
    padding-inline: 2rem;

    :hover {
      font-weight: 600;
    }

    :not(:last-of-type) {
      border-right: 1px solid var(--white);
    }
  }
`;
