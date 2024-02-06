import Quantity from "./Quantity.jsx";
import ProductRating from "./ProductRating.jsx";
import CornerBadge from "./CornerBadge.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value.items);

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

  return (
    <div
      className={
        "relative overflow-hidden w-full bg-white border rounded-lg shadow " +
        (isProductInCart() ? "border-sky-600" : "border-gray-300")
      }
    >
      {isProductInCart() ? <CornerBadge /> : ""}

      <div className="p-8 w-full flex">
        <a
          href="#"
          className={`block relative w-full h-full pb-[100%] rounded-md`}
        >
          <img
            className="object-contain absolute rounded-t-lg w-full h-full p-0"
            src={image}
            alt="product image"
          />
        </a>
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
        <a href="#">
          <h5 className="line-clamp-2 h-14 text-lg font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <ProductRating rating={rating} />
        {isProductInCart() ? (
          <>
            <div className="flex items-center justify-between">
              <Quantity productId={id} />
              <button
                aria-label="remove from cart"
                className="select-none text-green-500 hover:text-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 items-center inline-flex"
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
              className="select-none text-white bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
