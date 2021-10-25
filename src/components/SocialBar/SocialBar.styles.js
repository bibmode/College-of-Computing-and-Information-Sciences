import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 50vh;
  transform: translateY(-50%);
  background-color: var(--black-text);
  z-index: 100;

  ul {
    list-style: none;
    padding: 1.5rem 1rem;

    li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .socialIcon {
    font-size: 3.6rem;
    color: var(--orange);
    transition: all 0.2s;

    :hover {
      color: var(--white);
    }
  }
`;
