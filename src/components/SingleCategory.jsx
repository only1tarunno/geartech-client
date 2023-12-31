import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provides/AuthProvider";
import { useContext } from "react";

const SingleCategory = ({ brand }) => {
  const { theme } = useContext(AuthContext);
  return (
    <Link className="inline-block" to={`/brand/${brand.name}`}>
      <div
        className={`card h-full ${
          theme == "light" ? "bg-base-100" : "bg-white"
        }`}
      >
        <figure className="px-5 lg:px-8 pt-5 lg:pt-8 flex-grow">
          <img
            src={brand.image}
            alt=""
            className="w-56 h-56 object-scale-down rounded-xl"
          />
        </figure>
        <div className="card-body justify-end flex-1 items-center text-center">
          <h2 className="card-title text-[#0a0b09] text-2xl font-bold capitalize">
            {brand.name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;

SingleCategory.propTypes = {
  brand: PropTypes.object.isRequired,
};
