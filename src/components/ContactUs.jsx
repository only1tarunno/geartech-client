import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvider";

const ContactUs = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className=" md:py-20  py-16 ">
      <div className="container mx-auto px-5 lg:px-0">
        <h2
          className={`pb-3 ${
            theme == "light" ? "text-[#0a0b09]" : "text-white"
          } text-3xl text-center my-3 lg:text-5xl font-bold`}
        >
          Contact Us
        </h2>
        <form className="w-full mx-auto md:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="w-full my-4 p-3 focus:outline-none border"
          />
          <div className="flex flex-col lg:flex-row justify-between gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 my-4 p-3 focus:outline-none border"
            />
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 my-4 p-3 focus:outline-none border"
            />
          </div>

          <textarea
            className="w-full my-4 p-3 focus:outline-none border"
            placeholder="Message"
            rows="4"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="btn  bg-[#54595f] hover:bg-[#323538] border-[#54595f] hover:text-white text-white text-base md:text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
