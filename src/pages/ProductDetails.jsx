import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, photo, name, brand, productType, price, rating, description } =
    product;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default ProductDetails;
