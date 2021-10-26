import styled from "styled-components";
import { Container } from "@mui/material";

export const Wrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const Details = styled.div`
  padding: 3.5rem 2.5rem;
  border: 2px solid var(--grey);
  margin-top: -1rem;
  text-align: left;

  h5 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  h4 {
    font-size: 3.6rem;
  }
`;
