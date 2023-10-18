import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Mycart from "../pages/Mycart";
import ProductsCat from "../pages/ProductsCat";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/myCart",
        element: <Mycart />,
      },
      {
        path: "/products/:brand",
        element: <ProductsCat></ProductsCat>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
