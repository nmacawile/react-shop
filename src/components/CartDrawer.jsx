import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard.jsx";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const cartItems = useSelector((state) => state.cart.value.items);
  const total = useSelector((state) => state.cart.value.total);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => {
        setAnimating(true);
      }, 10);
    } else {
      setAnimating(false);
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [isOpen]);

  const drawerClickHandler = (e) => {
    // Allows clicks inside the drawer without closing it
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      data-testid="cart-drawer-backdrop"
      className={
        "z-40 top-0 fixed bg-gray-800/70 w-full h-screen transition-opacity" +
        (animating ? " opacity-100" : " opacity-0") +
        (visible ? " visible" : " hidden")
      }
    >
      <aside
        onClick={drawerClickHandler}
        id="cart-drawer"
        data-testid="cart-drawer"
        className={
          "fixed top-0 right-0 z-40 h-screen flex flex-col overflow-hidden transition-transform bg-white w-full sm:w-96" +
          (animating ? " translate-x-0" : " translate-x-full")
        }
        tabIndex="-1"
        aria-labelledby="cart-drawer-label"
      >
        <header className="p-4 select-none border-b border-gray-300">
          <h3
            id="cart-drawer-label"
            className="inline-flex items-center text-lg font-semibold text-gray-600"
          >
            <svg
              className="w-5 h-5 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Shopping Cart
          </h3>
          <button
            type="button"
            data-testid="cart-close-button"
            onClick={() => setIsOpen(false)}
            aria-controls="cart-drawer"
            className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </header>

        <section className="px-2 py-4 flex-1 overflow-y-auto">
          {cartItems.length >= 1 ? (
            <ul className="flex flex-col gap-4 ">
              {cartItems.map((item, index) => (
                <CartCard key={`cart-${index}`} item={item} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-md p-4">
              Your cart is currently empty. <br />
              Start shopping and fill it with amazing finds!
            </p>
          )}
        </section>
        <footer className="p-4 border-t border-gray-300">
          <div id="cart-total" className=" text-center mb-4">
            <span className="font-semibold mr-2 text-md text-gray-700">
              Total ({cartItems.length} items):
            </span>
            <span className="font-bold text-sky-600 text-xl">
              $
              {total.toLocaleString("en-us", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 select-none">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-sky-200 hover:border-sky-300 rounded-lg focus:outline-none hover:bg-sky-100 hover:text-sky-900 focus:z-10 focus:ring-4 focus:ring-sky-300"
            >
              Keep Shopping
            </button>
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 focus:outline-none">
              Check Out
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default CartDrawer;
