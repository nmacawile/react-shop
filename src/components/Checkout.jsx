import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeItem } from "../features/cart/cartSlice";

export function Checkout() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart.value);
  const [deleteMode, setDeleteMode] = useState(false);
  const [shippingFee, setShippingFee] = useState(0.0);

  const formatPrice = (price) =>
    price.toLocaleString("en-us", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });

  const toggleDeleteMode = () => setDeleteMode(!deleteMode);

  const removeFromCart = (itemId) => dispatch(removeItem(itemId));

  useEffect(() => {
    if (items.length) setShippingFee(10.0);
    else setShippingFee(0);
  }, [items]);

  return (
    <>
      <div className="">
        <header className="sticky h-16 p-4 text-white bg-sky-600 w-full z-30 top-0 start-0 drop-shadow-md">
          <div className="m-auto max-w-4xl px-4 flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">Checkout</h1>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                name="toggle-delete-mode"
                type="checkbox"
                value={deleteMode}
                className="sr-only peer"
                checked={deleteMode}
                onChange={() => toggleDeleteMode()}
              />
              <div
                className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 ring-sky-300 ${
                  deleteMode ? "peer-checked:bg-sky-200" : ""
                } rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-sky-300 after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:bg-sky-600 after:bg-gray-400 after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
              ></div>
              <span className="select-none ms-3 text-sm font-medium text-white">
                Remove Items
              </span>
            </label>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Items in the cart */}
          <div className="bg-white rounded-md mb-6 border border-gray-200 shadow-sm">
            <div className="px-4 py-2 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Your Items</h2>
            </div>
            {items.length === 0 && (
              <div className="px-4 py-2 border-b border-gray-200 text-gray-600">
                Your cart is empty.
              </div>
            )}
            {/* Individual item */}
            {items.map((item, index) => {
              return (
                <div
                  key={`checkout-item-${index}`}
                  className="flex flex-col items-center justify-between px-4 py-2 border-b border-gray-200"
                >
                  <div className="w-full flex items-start">
                    <div className="w-14 h-full">
                      <div className="block relative w-full h-full pb-[100%]">
                        <img
                          className="object-contain absolute w-full h-full p-0"
                          src={item.product.image}
                          alt="Item Image"
                        />
                      </div>
                    </div>

                    <div className="w-full ml-4 overflow-hidden flex flex-col justify-between">
                      <h3 className="font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                        {item.product.name}
                      </h3>
                      <div className="w-full text-gray-600 flex items-center">
                        <p className="whitespace-nowrap">
                          ${formatPrice(item.product.price)} x {item.quantity}
                        </p>

                        <div className="w-full flex justify-end">
                          <p className="mr-4">
                            ${formatPrice(item.product.price * item.quantity)}
                          </p>
                          {deleteMode && (
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-400 focus:outline-none"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-md mb-16 md:mb-6 border border-gray-200 shadow-md">
            <div className="px-4 py-2 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>
            <div className="px-4 py-2 flex flex-col gap-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${formatPrice(total)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>${formatPrice(shippingFee)}</p>
              </div>
              {/* Additional summary details here */}
              <div className="border-t border-gray-200 my-4 pt-4">
                <div className="flex justify-between items-center">
                  <p>Total</p>
                  <p className="font-semibold text-xl">
                    ${formatPrice(total + shippingFee)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout button */}
          <div className="fixed md:relative bottom-0 left-0 w-full flex p-4 md:p-0 gap-4 justify-items-stretch md:justify-end bg-white">
            <Link
              to="/"
              className="select-none w-full md:w-40 px-5 py-2.5 font-medium text-center text-gray-900 bg-white border border-sky-200 hover:border-sky-300 rounded-lg focus:outline-none hover:bg-sky-100 hover:text-sky-900 focus:z-10 focus:ring-4 focus:ring-sky-300 transition-all"
            >
              Back
            </Link>
            <button
              disabled={true}
              className="select-none cursor-not-allowed w-full md:w-40 flex items-center justify-center px-5 py-2.5 font-medium text-white bg-gray-400 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 focus:outline-none transition-all"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
