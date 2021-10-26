import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";
import NewsLatest from "../components/NewsLatest";
import NewsMasonry from "../components/NewsMasonry";
import Programs from "../components/Programs";
import Promotions from "../components/Promotions";
import ResearchCenters from "../components/ResearchCenters";
import SocialBar from "../components/SocialBar";

const Home = () => {
  return (
    <>
      {/* <SocialBar /> */}
      <Header />
      <Programs />
      <NewsLatest />
      <NewsMasonry />
      <Promotions />
      <ImageGrid />
      <ResearchCenters />
    </>
  );
};

export default Home;
