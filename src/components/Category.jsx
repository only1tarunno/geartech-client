import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const Category = () => {
  const [brands, setbrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setbrands(data));
  }, []);

  return (
    <div className="bg-[#eff4ff] py-10 md:py-20">
      <div className="container mx-auto px-5 lg:px-0">
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#5e5e5e] font-bold text-xl lg:text-3xl text-center"
        >
          GearTech Collections
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
        >
          Features Brands
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-base text-center lg:text-lg max-w-[700px] mx-auto"
        >
          Embrace a healthier, more connected lifestyle with wearable
          technology. Dive into the realm of fitness trackers, smartwatches, and
          health monitoring devices. .
        </p>
        <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <SingleCategory key={brand.id} brand={brand}></SingleCategory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
