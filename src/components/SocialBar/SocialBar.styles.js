import styled from "styled-components";
import { Container } from "@mui/material";

export const Containment = styled.div`
  background-color: var(--orange);
  z-index: 100;
`;

export const Wrapper = styled(Container)`
  ul {
    display: flex;
    list-style: none;
    padding-block: 1.5rem;

    li {
      :not(:last-child) {
        margin-right: 1rem;
        padding-right: 1rem;
      }

      :first-of-type {
        margin-left: auto;
      }
    }
  }

  .socialIcon {
    font-size: 2.8rem;
    color: var(--black-text);
    transition: all 0.2s;

    :hover {
      color: var(--white);
    }
  }
`;
