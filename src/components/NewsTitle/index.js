import { Wrapper } from "./NewsTitle.styles";
import { Container } from "@mui/material";

const NewsTitle = () => {
  return (
    <Container maxWidth="xl" align="center">
      <Wrapper>
        <h2>CCIS News</h2>
        <h3>The latest stories from CCIS</h3>
      </Wrapper>
    </Container>
  );
};

export default NewsTitle;
