import { Details, Wrapper } from "./NewsCard.styles";

const NewsCard = ({ image, title, date, index }) => {
  return (
    <Wrapper>
      <img src={image} alt={`news-${index}`} />
      <Details>
        <h5>{date}</h5>
        <h4>{title}</h4>
      </Details>
    </Wrapper>
  );
};

export default NewsCard;
