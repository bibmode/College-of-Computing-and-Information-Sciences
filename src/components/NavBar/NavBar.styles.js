import styled from "styled-components";

export const Container = styled.nav`
  padding: 2rem 3.5rem;
  display: flex;
  align-items: center;
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
