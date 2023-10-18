import { Link } from "react-router-dom";
import img1 from "../assets/pr-cat1.jpg";
import img2 from "../assets/pr-cat2.jpg";
import img3 from "../assets/pr-cat3.jpg";
import img4 from "../assets/pr-cat4.jpg";

const ProductsCatBanner = () => {
  return (
    <div className="carousel w-full h-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero rounded-none overflow-hidden"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-8  text-4xl lg:text-5xl font-bold">
                Discover the Latest Tech Gadgets
              </h1>
              <p className="mb-8 text-white">
                Stay ahead in the world of technology with our handpicked
                selection of cutting-edge gadgets and accessories. Explore the
                future today!
              </p>
              <div>
                <Link to="/login">
                  <button className="btn body-btn bg-[#54595f] border-[#54595f] hover:text-white text-white text-base md:text-xl hover:bg-[#282b2e]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero rounded-none overflow-hidden"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-8 text-4xl lg:text-5xl font-bold">
                Upgrade Your Home Office Setup
              </h1>
              <p className="mb-8 text-white">
                Transform your workspace with our premium tech solutions. Boost
                productivity and comfort while working from home.
              </p>
              <div>
                <Link to="/login">
                  <button className="btn body-btn bg-[#54595f] border-[#54595f] hover:text-white text-white text-base md:text-xl hover:bg-[#282b2e]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero rounded-none overflow-hidden"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-8 text-4xl lg:text-5xl font-bold">
                Unleash Your Creativity with our Software
              </h1>
              <p className="mb-8 text-white">
                Unlock your creative potential with our powerful software tools.
                From design to development, we have got you covered.
              </p>
              <div>
                <Link to="/login">
                  <button className="btn body-btn bg-[#54595f] border-[#54595f] hover:text-white text-white text-base md:text-xl hover:bg-[#282b2e]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="hero rounded-none overflow-hidden"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-8 text-4xl lg:text-5xl font-bold">
                Don&apos;t Miss Out on the Tech Deals
              </h1>
              <p className="mb-8 text-white">
                Limited-time offers on top tech products. Grab the best
                discounts and elevate your tech game today.
              </p>
              <div>
                <Link to="/login">
                  <button className="btn body-btn bg-[#54595f] border-[#54595f] hover:text-white text-white text-base md:text-xl hover:bg-[#282b2e]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCatBanner;
