import { Details, NewsBar, Tag, Wrapper } from "./NewsLatest.styles";
import { Container } from "@mui/material";
import blogs from "../../data/blogs.json";

const NewsLatest = () => {
  return (
    <Container maxWidth="xl" align="center">
      <Wrapper>
        <h2>CCIS News</h2>
        <h3>The latest stories from CCIS</h3>
      </Wrapper>
      <NewsBar img={blogs[0].image}>
        <Tag>
          <h3>Latest News</h3>
        </Tag>
        <Details>
          <h3>{blogs[0].title}</h3>
          <h4>{blogs[0].date}</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Details>
      </NewsBar>
    </Container>
  );
};

export default NewsLatest;
