import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Mycart from "../pages/Mycart";
import ProductsCat from "../pages/ProductsCat";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PvtRoute from "./PvtRoute";

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
        path: "/brand/:brand",
        element: <ProductsCat></ProductsCat>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product/:id",
        element: (
          <PvtRoute>
            <ProductDetails></ProductDetails>
          </PvtRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PvtRoute>
            <UpdateProduct></UpdateProduct>
          </PvtRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },

      {
        path: "/myCart",
        element: (
          <PvtRoute>
            <Mycart />
          </PvtRoute>
        ),
      },
    ],
  },
]);

export default router;
