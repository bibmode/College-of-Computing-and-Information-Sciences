import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  video {
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: relative;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 1)
  );
`;

export const NavBar = styled.nav`
  padding: 2rem 3.5rem;
  display: flex;
  align-items: center;
  h1 {
    width: fit-content;
    font-size: 2.4rem;
    margin: 0;
    width: 27rem;
    margin-left: 2rem;
    color: var(--white);
    margin-right: auto;
  }
`;

export const Menu = styled.div`
  display: flex;
  button {
    margin-left: 2.5rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--white);
    background: transparent;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: calc(100vh - 30rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h2 {
    font-size: 14.4rem;
    letter-spacing: 5rem;
    margin-right: -5rem;
    text-align: center;
    color: var(--black-text);
  }

  h3 {
    font-size: 3.6rem;
    color: var(--black-text);
    /* letter-spacing: 5rem; */
  }

  button {
    position: absolute;
    bottom: 0;
    background-color: transparent;
  }

  .videoBtn {
    font-size: 5rem;
    color: var(--dark-grey);
    transition: all 0.2s;

    :hover {
      color: var(--black-text);
    }
  }
`;
