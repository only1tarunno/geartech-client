import { Link, useLoaderData, useParams } from "react-router-dom";
import Product from "../components/Product";
import nopr from "../assets/nopr.png";
import ProductsCatBanner from "../components/ProductsCatBanner";

const ProductsCat = () => {
  const products = useLoaderData();
  const { brand } = useParams("");

  return (
    <div>
      <div id="car" className="overflow-hidden h-[400px] lg:h-[600px]">
        <ProductsCatBanner brand={brand}></ProductsCatBanner>
      </div>
      <div className="bg-[#eff4ff] py-10 md:py-20">
        <div>
          <h2 className=" font-bold capitalize text-3xl lg:text-5xl text-center">
            {brand} Products
          </h2>
        </div>

        <div className="mt-10 container mx-auto px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          ) : (
            <div className="col-span-4">
              <img src={nopr} className="mx-auto w-56 mb-8" alt="" />
              <h2 className="text-center font-bold text-2xl md:text-4xl">
                There is no product. Please add some product in{" "}
                <span className="capitalize">{brand}</span> Brand
              </h2>
              <Link
                to="/addProduct"
                className="underline text-center inline-block w-full mt-5 font-semibold text-lg md:text-3xl"
              >
                Add Product to <span className="capitalize">{brand}</span> Brand
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCat;
