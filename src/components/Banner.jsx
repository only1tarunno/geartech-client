import { Link } from "react-router-dom";
import bannerIg from "../assets/banner.png";
import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvider";

const Banner = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={theme == "light" ? "bg-[#eff4ff]" : " bg-slate-800"}>
      <div className="container mx-auto px-5 lg:px-0 min-h-[768px] flex flex-col md:flex-row items-center gap-5 pt-10 md:pt-0">
        <div
          className={`w-full md:w-1/2 text-center ${
            theme == "light" ? "text-[#0a0b09]" : "text-white"
          }`}
        >
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
            <button
              className={`btn body-btn bg-transparent  hover:text-white border-[#54595f] text-base md:text-xl ${
                theme == "light" ? "text-[#0a0b09]" : "text-white"
              }`}
            >
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
