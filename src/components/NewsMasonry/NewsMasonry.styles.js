import styled from "styled-components";
import { Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";

export const Containment = styled(Container)`
  width: 100%;
  height: fit-content;
  padding-bottom: 5rem;
`;

export const Cards = styled(Masonry)``;

export const Item = styled(MasonryItem)`
  #moreBtn {
    width: fit-content;
    padding: 2rem 2.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    background-color: var(--orange);
    color: var(--white);
  }
`;
