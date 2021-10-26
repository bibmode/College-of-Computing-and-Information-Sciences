import Header from "../components/Header";
import NewsLatest from "../components/NewsLatest";
import NewsMasonry from "../components/NewsMasonry";
import Programs from "../components/Programs";
import SocialBar from "../components/SocialBar";

const Home = () => {
  return (
    <>
      <SocialBar />
      <Header />
      <Programs />
      <NewsLatest />
      <NewsMasonry />
    </>
  );
};

export default Home;
