import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(100%, 80rem);
  border-top: 2px solid var(--grey);
  padding-block: 8rem;

  h2 {
    font-size: 6.4rem;
    font-weight: 800;
  }

  h3 {
    font-size: 3.6rem;
    font-weight: 400;
  }
`;

export const NewsBar = styled.div`
  width: 100%;
  height: 60rem;
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.73)),
    url(${(props) => props.img});
  background-size: cover;
  margin-bottom: 8rem;
  position: relative;

  color: var(--white);
`;

export const Tag = styled.div`
  background-color: var(--green);
  width: fit-content;
  padding: 2rem 2.5rem;
  padding-left: 6rem;
  position: absolute;
  top: -3rem;
  right: 2rem;

  h3 {
    font-size: 3.6rem;
    text-transform: uppercase;
    border-right: 0.6rem solid var(--white);
    padding-right: 2rem;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr fit-content;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title readmore"
    "date readmore";

  position: absolute;
  bottom: 0;
  padding: 3rem 3.5rem;

  h3,
  h4 {
    justify-self: left;
  }

  h3 {
    grid-area: title;
    font-size: 4.8rem;
  }

  h4 {
    grid-area: date;
    font-size: 2.4rem;
    font-weight: 500;
  }

  a {
    grid-area: readmore;
    justify-self: right;
    align-self: end;
    font-size: 2.4rem;
    text-decoration: underline;
    transition: all 0.2s;

    :hover {
      transform: scale(1.1);
    }
  }
`;
