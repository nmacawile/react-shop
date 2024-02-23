import Quantity from "./Quantity.jsx";
import ProductRating from "./ProductRating.jsx";
import CornerBadge from "./CornerBadge.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value.items);
  const [loadingImage, setLoadingImage] = useState(true);

  const { price, id, name, image, rating } = product;

  const itemInCart = cart.find((item) => item.product.id === id);

  const isProductInCart = () => {
    return !!itemInCart;
  };

  const addToCart = () => {
    dispatch(addItem(product));
  };

  const removeFromCart = () => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoadingImage(false);
    img.src = image;

    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <div
      className={
        "relative overflow-hidden w-full bg-white border rounded-lg shadow " +
        (isProductInCart() ? "border-sky-600" : "border-gray-300")
      }
    >
      {isProductInCart() ? <CornerBadge /> : ""}

      <div className="p-8 w-full flex">
        <Link
          data-testid="product-link"
          to={`/product/${id}`}
          className={`block relative w-full h-full pb-[100%] rounded-md`}
        >
          {loadingImage ? (
            <div className="rounded-md bg-gray-300 h-full w-full absolute animate-pulse flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          ) : (
            <img
              className="object-contain absolute w-full h-full p-0"
              src={image}
              alt="product image"
            />
          )}
        </Link>
      </div>

      <div className="px-5 pb-5 text-left">
        <span
          aria-label="current price"
          className="text-3xl font-bold text-gray-900"
        >
          $
          {price.toLocaleString("en-us", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        <Link to={`/product/${id}`}>
          <h5 className="line-clamp-2 h-14 text-lg font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </Link>
        <ProductRating rating={rating} />
        {isProductInCart() ? (
          <>
            <div className="flex items-center justify-between">
              <Quantity productId={id} />
              <button
                aria-label="remove from cart"
                className="select-none text-green-500 hover:text-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 items-center inline-flex transition-all"
                onClick={() => removeFromCart()}
              >
                Added
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 12 4.7 4.5 9.3-9"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-end">
            <button
              className="select-none text-white bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all"
              onClick={() => addToCart()}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
