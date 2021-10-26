import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  /* grid-template-columns: 10rem repeat(11, minmax(5rem, 1fr));
  grid-template-rows: repeat(4, 10rem); */
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 3vw);
  z-index: 500;

  #Image1 {
    grid-column: 1 / span 2;
    grid-row: 1 / -1;
    text-align: right;
  }

  #Image2 {
    grid-column: 3 / span 3;
    grid-row: 1 / 4;
    text-align: right;
  }

  #Image3 {
    grid-column: 3 / span 3;
    grid-row: 4 / -1;
    text-align: right;
  }

  #Image4 {
    grid-column: 6 / 10;
    grid-row: 1 / 5;
    text-align: right;
  }

  #Image5 {
    grid-column: 6 / 10;
    grid-row: 5 / -1;
    text-align: right;
  }

  #Image6 {
    grid-column: 10 / -1;
    grid-row: 1 / 5;
    text-align: right;
  }

  #Image7 {
    grid-column: 10 / -1;
    grid-row: 5/-1;
    text-align: right;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
