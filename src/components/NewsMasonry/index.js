import { Cards, Containment, Item } from "./NewsMasonry.styles";
import blogs from "../../data/blogs.json";
import NewsCard from "../NewsCard";

const NewsMasonry = () => {
  console.log(blogs);
  return (
    <Containment maxWidth="lg">
      <Cards columns={{ xs: 1, sm: 2 }} spacing={4}>
        {blogs
          .filter((blog, index) => index !== 0)
          .map((blog, index) => (
            <Item key={index}>
              <NewsCard
                image={blog.image}
                title={blog.title}
                date={blog.date}
                index={blog.index}
              />
            </Item>
          ))}
        <Item>
          <button id="moreBtn">Read more news and updates</button>
        </Item>
      </Cards>
    </Containment>
  );
};

export default NewsMasonry;
