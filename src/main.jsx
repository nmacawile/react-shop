import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Category from "./components/Category.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import Product from "./components/Product.jsx";
import Checkout from "./components/Checkout.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/category/:category", element: <Category /> },
        { path: "/product/:productId/", element: <Product /> },
      ],
    },
    { path: "/checkout", element: <Checkout /> },
  ],
  { basename: "/react-shop" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider basename="react-shop" router={router} />
    </Provider>
  </React.StrictMode>
);
