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

      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full p-0"
          src={image}
          alt="product image"
        />
      </a>
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
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <ProductRating rating={rating} />
        {isProductInCart() ? (
          <>
            <div className="flex items-center justify-between">
              <Quantity productId={id} />
              <button
                className="select-none text-red-500 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => removeFromCart()}
              >
                Remove
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
