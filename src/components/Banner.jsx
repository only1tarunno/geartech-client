import { Link } from "react-router-dom";
import bannerIg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#eff4ff]">
      <div className="container mx-auto px-5 lg:px-0 min-h-[768px] flex flex-col md:flex-row items-center gap-5 pt-10 md:pt-0">
        <div className="text-[#0a0b09] w-full md:w-1/2 text-center">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Exploring the Future
          </h1>
          <p className="lg:text-xl text-lg font-medium my-5 md:8 w-full lg:w-4/5 mx-auto">
            Dive into the exciting world of technology and electronics with us.
            Discover the latest innovations, cutting-edge gadgets, and the
            trends shaping our digital future.
          </p>
          <div className="flex justify-center gap-5">
            <button className="btn body-btn bg-[#54595f] border-[#54595f] hover:text-white text-white text-base md:text-xl">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn body-btn bg-transparent text-[#0a0b09] hover:text-white border-[#54595f] text-base md:text-xl">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={bannerIg} className="ml-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
