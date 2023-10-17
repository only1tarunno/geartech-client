import star from "../assets/star.png";
const Testimonial = () => {
  return (
    <div className="bg-[#eff4ff] py-10 md:py-20">
      <div className="container mx-auto px-5 lg:px-0">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
        >
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded border border-[#ccc] p-8 text-center"
          >
            <p className="text-lg font-semibold">
              &quot;I&apos;ve been an avid follower of &apos;GearTech&apos; for
              years, and it never disappoints. The in-depth analysis and
              unbiased reviews have guided me through countless tech purchases.
              This platform is my go-to source for staying updated on all things
              tech!&quot;
            </p>
            <img src={star} className="mx-auto mb-4 mt-7" alt="" />
            <h3 className="text-[#0a0b09] font-bold text-xl">Sarah and John</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded border border-[#ccc] p-8 text-center"
          >
            <p className="text-lg font-semibold">
              &quot;As a newbie to the tech world, I was intimidated by all the
              jargon. &apos;GearTech&apos; made everything so much easier to
              grasp with their educational resources. It&apos;s like having a
              patient, knowledgeable friend who&apos;s always ready to
              help.&quot;
            </p>
            <img src={star} className="mx-auto mb-4 mt-7" alt="" />
            <h3 className="text-[#0a0b09] font-bold text-xl">
              Michael and Emily
            </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded border border-[#ccc] p-8 text-center"
          >
            <p className="text-lg font-semibold">
              &quot;Being part of the &apos;GearTech&apos; community has been an
              absolute delight. I&apos;ve learned so much from the discussions
              and made new friends who share my passion for gadgets and
              innovation. It&apos;s not just a platform; it&apos;s a family of
              tech lovers.&quot;
            </p>
            <img src={star} className="mx-auto mb-4 mt-7" alt="" />
            <h3 className="text-[#0a0b09] font-bold text-xl">Anne V</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
