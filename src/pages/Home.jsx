import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Testimonial from "../components/Testimonial";
import Whyus from "../components/Whyus";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Category></Category>
      <Whyus></Whyus>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
