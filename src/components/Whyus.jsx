import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import why from "../assets/why.jpg";

const Whyus = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className=" md:py-20 py-16 ">
      <div className="container mx-auto px-5 lg:px-0">
        <h2
          className={`pb-3 ${
            theme == "light" ? "text-[#0a0b09]" : "text-white"
          } text-3xl text-center my-3 lg:text-5xl font-bold`}
        >
          Why Choose Us?
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 items-center justify-between mt-8 lg:mt-14">
          <div className="flex-1 space-y-5 text-center lg:text-start">
            <div>
              <h3
                className={`text-2xl ${
                  theme == "light" ? "text-[#5e5e5e]" : "text-white"
                } font-bold`}
              >
                Expertise
              </h3>
              <p className="text-base lg:text-lg mt-1">
                We have a team of tech enthusiasts and experts who are
                passionate about sharing their knowledge and insights
              </p>
            </div>
            <div>
              <h3
                className={`text-2xl ${
                  theme == "light" ? "text-[#5e5e5e]" : "text-white"
                } font-bold`}
              >
                Cutting-Edge Content
              </h3>
              <p className="text-base lg:text-lg mt-1">
                We consistently provide information on the latest technology
                trends, ensuring you stay ahead in the digital world.
              </p>
            </div>
            <div>
              <h3
                className={`text-2xl ${
                  theme == "light" ? "text-[#5e5e5e]" : "text-white"
                } font-bold`}
              >
                Unbiased Reviews
              </h3>
              <p className="text-base lg:text-lg mt-1">
                Our reviews and recommendations are impartial, helping you make
                informed purchasing decisions.
              </p>
            </div>
            <div>
              <h3
                className={`text-2xl ${
                  theme == "light" ? "text-[#5e5e5e]" : "text-white"
                } font-bold`}
              >
                In-Depth Analysis
              </h3>
              <p className="text-base lg:text-lg mt-1">
                We offer detailed analysis and explanations of complex
                technological concepts for a better understanding.
              </p>
            </div>
            <div>
              <h3
                className={`text-2xl ${
                  theme == "light" ? "text-[#5e5e5e]" : "text-white"
                } font-bold`}
              >
                User-Friendly Interface
              </h3>
              <p className="text-base lg:text-lg mt-1">
                We prioritize user experience, making it easy to find and access
                the information you need.
              </p>
            </div>
            <div>
              <h3
                className={`text-2xl ${
                  theme == "light" ? "text-[#5e5e5e]" : "text-white"
                } font-bold`}
              >
                Community Engagement
              </h3>
              <p className="text-base lg:text-lg mt-1">
                Join a thriving community of tech enthusiasts to discuss, share,
                and learn together
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src={why} className="w-full" alt="Why-choose-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
