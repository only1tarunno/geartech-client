import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";

const Product = ({ product }) => {
  const { _id, photo, name, brand, productType, price, rating, description } =
    product;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card  bg-base-100 "
    >
      <figure className="px-5 lg:px-8 pt-5 lg:pt-8">
        <img src={photo} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body  items-center text-center">
        <h2 className="card-title text-[#0a0b09] text-2xl font-bold">{name}</h2>

        <div className="flex justify-between items-center w-full">
          <p className="font-bold text-lg text-[#5e5e5e]">
            Brand: <span className="capitalize font-medium">{brand}</span>
          </p>
          <p className="font-bold text-lg text-[#5e5e5e]">
            Type: <span className="capitalize font-medium">{productType}</span>
          </p>
        </div>

        <p className="text-base lg:text-lg text-control text-[#5e5e5ef1]">
          {description}
        </p>
        <div className="flex justify-between items-center w-full">
          <p className="font-bold text-lg text-[#5e5e5e] flex items-center">
            <span>
              <FaDollarSign></FaDollarSign>
            </span>{" "}
            Price: <span className="font-medium ml-1">{price}</span>
          </p>
          <p>
            <div className="rating rating-md">
              <input
                type="radio"
                name={`rating-${_id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={rating == 1}
              />
              <input
                type="radio"
                name={`rating-${_id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={rating == 2}
              />
              <input
                type="radio"
                name={`rating-${_id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={rating == 3}
              />
              <input
                type="radio"
                name={`rating-${_id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={rating == 4}
              />
              <input
                type="radio"
                name={`rating-${_id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={rating == 5}
              />
            </div>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-5">
          <Link to={`/product/${_id}`}>
            <button className="btn body-btn bg-[#54595f] hover:bg-[#3b3e42] border-[#54595f] hover:text-white text-white text-base md:text-xl">
              Details
            </button>
          </Link>
          <Link to={`/product/${_id}`}>
            <button className="btn body-btn bg-transparent text-[#0a0b09] hover:text-white border-[#54595f] text-base md:text-xl">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropTypes.object.isRequired,
};
