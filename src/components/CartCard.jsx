import { fakeData } from "../data/fakeData";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";

export function CartCard({ item }) {
  const quantity = item.quantity;
  const product = fakeData.find((p) => p.id === item.id);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeItem(item.id));
  };

  const changeQuantity = (e) => {
    const value = +e.target.value;
    dispatch(updateQuantity({ id: item.id, quantity: value }));
  };

  const increase = () => {
    dispatch(updateQuantity({ id: item.id, quantity: quantity + 1 }));
  };

  const decrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: quantity - 1 }));
  };

  return (
    <>
      <li className="flex flex-cols">
        <img src={product.image} className=" h-12 me-1" />
        <div className=" w-full overflow-hidden">
          <div className="font-semibold w-full flex overflow-hidden justify-between items-center ">
            <h3 className="ml-1 text-sm text-gray-700 whitespace-nowrap text-ellipsis overflow-hidden">
              {product.name}
            </h3>
            <div className="text-sky-600 text-sm mr-3">
              ${(item.quantity * product.price).toLocaleString("en-us")}
            </div>
          </div>
          <div className="p-1">
            <div className="flex justify-between w-full">
              <div className="font-semibold text-sm">
                <div className="flex flex-cols-3 w-20 h-6">
                  <button
                    data-testid="cart-item-decrease-button"
                    onClick={() => decrease()}
                    className="border border-e-0 border-gray-300 hover:bg-gray-200 rounded-l-sm w-16 flex items-center justify-center focus:ring-2 outline-none ring-sky-300"
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
                    id={`quantity-field-${item.id}`}
                    name={`quantity-field-${item.id}`}
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
                    className="border border-s-0 border-gray-300 hover:bg-gray-200 rounded-r-sm w-16 flex items-center justify-center focus:ring-2 outline-none ring-sky-300"
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
                className="select-none text-xs font-semibold hover:bg-red-200 text-gray-400 hover:text-gray-800 rounded-md px-2 py-1 flex items-center justify-center focus:ring-2 outline-none ring-red-300"
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
