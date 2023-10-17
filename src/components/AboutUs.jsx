import about from "../assets/about.jpg";
const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-center container mx-auto px-5 lg:px-0 my-14">
      <div className="flex-1">
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          src={about}
          className="w-full lg:w-3/4 lg:mx-auto"
          alt=""
        />
      </div>
      <div className=" text-center lg:text-start space-y-3 flex-1">
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#5e5e5e] font-bold text-xl lg:text-3xl"
        >
          About US
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pb-3  text-[#0a0b09] text-3xl lg:text-5xl font-bold"
        >
          GearTech: Shaping the Future
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-base  lg:text-lg"
        >
          At Geartech, we are passionate about the ever-evolving world of
          technology and electronics. Our mission is to explore, inform, and
          inspire individuals to embrace the transformative power of innovation.
          From cutting-edge gadgets and breakthroughs in artificial intelligence
          to the latest trends in consumer electronics, our dedicated team of
          experts and enthusiasts brings you in-depth analysis, reviews, and
          insights.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-base  lg:text-lg"
        >
          Discover the future of technology through our informative articles,
          product reviews, and thought-provoking discussions. We are committed
          to helping you stay up-to-date with the rapidly changing landscape of
          technology and electronics, empowering you to make informed decisions
          about the gadgets and devices that enhance your life.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
