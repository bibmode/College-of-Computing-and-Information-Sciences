import styled from "styled-components";

export const Background = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4),
    20%,
    rgba(255, 255, 255, 1)
  );
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
