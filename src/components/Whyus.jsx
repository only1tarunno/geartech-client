import why from "../assets/why.jpg";

const Whyus = () => {
  return (
    <div className=" md:py-20 py-16 ">
      <div className="container mx-auto px-5 lg:px-0">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
        >
          Why Choose Us?
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 items-center justify-between mt-8 lg:mt-14">
          <div className="flex-1 space-y-5 text-center lg:text-start">
            <div>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                className=" text-2xl text-[#5e5e5e] font-bold"
              >
                Expertise
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-base lg:text-lg mt-1"
              >
                We have a team of tech enthusiasts and experts who are
                passionate about sharing their knowledge and insights
              </p>
            </div>
            <div>
              <h3
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" text-2xl text-[#5e5e5e] font-bold"
              >
                Cutting-Edge Content
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2500"
                className="text-base lg:text-lg mt-1"
              >
                We consistently provide information on the latest technology
                trends, ensuring you stay ahead in the digital world.
              </p>
            </div>
            <div>
              <h3
                data-aos="fade-up"
                data-aos-duration="3000"
                className=" text-2xl text-[#5e5e5e] font-bold"
              >
                Unbiased Reviews
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="3500"
                className="text-base lg:text-lg mt-1"
              >
                Our reviews and recommendations are impartial, helping you make
                informed purchasing decisions.
              </p>
            </div>
            <div>
              <h3
                data-aos="fade-up"
                data-aos-duration="4000"
                className=" text-2xl text-[#5e5e5e] font-bold"
              >
                In-Depth Analysis
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="4500"
                className="text-base lg:text-lg mt-1"
              >
                We offer detailed analysis and explanations of complex
                technological concepts for a better understanding.
              </p>
            </div>
            <div>
              <h3
                data-aos="fade-up"
                data-aos-duration="5000"
                className=" text-2xl text-[#5e5e5e] font-bold"
              >
                User-Friendly Interface
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="5500"
                className="text-base lg:text-lg mt-1"
              >
                We prioritize user experience, making it easy to find and access
                the information you need.
              </p>
            </div>
            <div>
              <h3
                data-aos="fade-up"
                data-aos-duration="6000"
                className=" text-2xl text-[#5e5e5e] font-bold"
              >
                Community Engagement
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="6500"
                className="text-base lg:text-lg mt-1"
              >
                Join a thriving community of tech enthusiasts to discuss, share,
                and learn together
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              data-aos="fade-up"
              data-aos-duration="4000"
              src={why}
              className="w-full"
              alt="Why-choose-pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
