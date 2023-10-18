import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { AuthContext } from "../Provides/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { _id, photo, name, brand, productType, price, rating, description } =
    product;

  const cartProduct = {
    photo,
    name,
    brand,
    productType,
    price,
    rating,
    description,
    email,
  };

  const handleAddToCart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Product Added into Cart",
          text: "Please Check My cart page",
          icon: "success",
        });
      });
  };
  return (
    <div className="container mx-auto px-5 lg:px-0 flex items-center justify-between flex-wrap py-10 md:py-20 space-y-5 md:space-y-16">
      <div className="w-full lg:w-1/2">
        <img src={photo} className="w-1/2 mx-auto" alt="" />
      </div>
      <div className="w-full lg:w-1/2 space-y-2 text-center lg:text-start">
        <h2 className="text-[#0a0b09] text-3xl lg:text-5xl font-bold">
          {name}
        </h2>
        <p className="font-bold text-lg text-[#5e5e5e]">
          Brand: <span className="capitalize font-medium">{brand}</span>
        </p>
        <p className="font-bold text-lg text-[#5e5e5e]">
          Type: <span className="capitalize font-medium">{productType}</span>
        </p>
        <p className="font-bold text-lg text-[#5e5e5e] flex items-center justify-center lg:justify-start">
          Price:{" "}
          <span>
            <FaDollarSign></FaDollarSign>
          </span>
          <span className="font-medium">{price}</span>
        </p>
        <div>
          <div className="rating rating-md">
            <input
              type="radio"
              name={`rating-${_id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={rating == 1}
            />
            <input
              type="radio"
              name={`rating-${_id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={rating == 2}
            />
            <input
              type="radio"
              name={`rating-${_id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={rating == 3}
            />
            <input
              type="radio"
              name={`rating-${_id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={rating == 4}
            />
            <input
              type="radio"
              name={`rating-${_id}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={rating == 5}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleAddToCart}
            className="btn body-btn bg-[#54595f] hover:bg-[#3b3e42] border-[#54595f] hover:text-white text-white text-base md:text-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-full">
        <h2 className="pb-3 text-center text-[#0a0b09] text-xl lg:text-3xl font-bold">
          Description
        </h2>
        <p className="w-full md:w-3/4 mx-auto text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
