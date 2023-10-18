import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Testimonial from "../components/Testimonial";
import Whyus from "../components/Whyus";
import ContactUs from "../components/ContactUs";

const Home = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <div className={theme == "light" ? "bt-white" : "bg-[#eff4ff]"}>
        <AboutUs></AboutUs>
      </div>
      <Category></Category>
      <Whyus></Whyus>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
