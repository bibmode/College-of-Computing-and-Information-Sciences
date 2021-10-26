import styled from "styled-components";
import { Grid } from "@mui/material";

export const Containment = styled(Grid)`
  margin-left: 50%;
  transform: translateX(-50%);
  padding-block: 2rem;

  h1 {
    width: fit-content;
    font-size: 2.4rem;
    margin: 0;
    width: 27rem;
    margin-left: 2rem;
    color: var(--black-text);
    margin-right: auto;
  }
`;

export const Menu = styled.div`
  display: flex;
  button {
    margin-left: 2.5rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--black-text);
    background: transparent;
    display: flex;
    align-items: center;
  }
`;
