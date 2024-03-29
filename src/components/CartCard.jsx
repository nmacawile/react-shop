import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export function CartCard({ item, setCartIsOpen }) {
  const { quantity, product } = item;

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeItem(product.id));
  };

  const changeQuantity = (e) => {
    const value = +e.target.value;
    dispatch(updateQuantity({ id: product.id, quantity: value }));
  };

  const increase = () => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }));
  };

  const decrease = () => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
  };

  return (
    <>
      <li className="flex flex-cols h-full">
        <div className="w-14 h-full p-1 flex me-1 flex-0">
          <Link
            to={`/product/${product.id}`}
            onClick={() => setCartIsOpen(false)}
            data-testid={`cart-product-link-${product.id}`}
            className={`block relative w-full h-full pb-[100%]`}
          >
            <img
              className="object-contain absolute w-full h-full p-0"
              src={product.image}
              alt="product image"
            />
          </Link>
        </div>

        <div className=" w-full overflow-hidden">
          <div className="font-semibold w-full flex overflow-hidden justify-between items-center ">
            <h3 className="ml-1 text-sm text-gray-700 whitespace-nowrap text-ellipsis overflow-hidden">
              {product.name}
            </h3>
            <div className="text-sky-600 text-sm mr-3">
              $
              {(item.quantity * product.price).toLocaleString("en-us", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="p-1">
            <div className="flex justify-between w-full">
              <div className="font-semibold text-sm">
                <div className="flex flex-cols-3 w-20 h-6">
                  <button
                    data-testid="cart-item-decrease-button"
                    onClick={() => decrease()}
                    className="border border-e-0 border-gray-300 hover:bg-gray-200 rounded-l-sm w-16 flex items-center justify-center focus:ring-2 outline-none ring-sky-300 transition-all"
                  >
                    <svg
                      className="w-2 h-2 text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>

                    <span className="sr-only">decrease item quantity</span>
                  </button>
                  <input
                    type="number"
                    id={`quantity-field-${product.id}`}
                    name={`quantity-field-${product.id}`}
                    onChange={changeQuantity}
                    onFocus={(e) => {
                      e.target.select();
                    }}
                    className="border-gray-300 w-full h-full text-center text-sm quantity p-0 focus:border-none focus:ring-2 focus:ring-sky-300 outline-none"
                    value={quantity}
                  />
                  <button
                    onClick={() => increase()}
                    data-testid="cart-item-increase-button"
                    className="border border-s-0 border-gray-300 hover:bg-gray-200 rounded-r-sm w-16 flex items-center justify-center focus:ring-2 outline-none ring-sky-300 transition-all"
                  >
                    <svg
                      className="w-2 h-2 text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>

                    <span className="sr-only">increase item quantity</span>
                  </button>
                </div>
              </div>
              <button
                data-testid="cart-item-remove-button"
                onClick={() => remove()}
                className="select-none text-xs font-semibold hover:bg-red-200 text-gray-400 hover:text-gray-800 rounded-md px-2 py-1 flex items-center justify-center focus:ring-2 outline-none ring-red-300 transition-all"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartCard;
