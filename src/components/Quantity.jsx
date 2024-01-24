import "./Quantity.css";

export function Quantity({ quantity, setQuantity, removeFromCart }) {
  const changeQuantity = (e) => {
    const value = +e.target.value;
    setQuantity(value);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity === 1) removeFromCart();
    setQuantity(quantity - 1);
  };

  return (
    <div className="w-32 h-full grid grid-cols-3 items-center">
      <button
        data-testid="quantity-decrease-button"
        onClick={() => decrease()}
        className="h-full px-3 py-2.5 hover:bg-gray-200 rounded-l-md border border-e-0 border-gray-300 focus:outline-none focus:ring focus:ring-sky-200"
      >
        {/* Minus Icon SVG */}
        <svg
          className="w-4 h-4 text-gray-500"
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
        data-testid="quantity-field"
        aria-label="item quantity"
        name="quantity-field"
        min="1"
        onChange={changeQuantity}
        onFocus={(e) => {
          e.target.select();
        }}
        max="999"
        value={quantity}
        className="quantity h-full p-0 font-bold text-center text-lg text-gray-800 border border-gray-300 rounded-none focus:outline-none focus:ring focus:ring-sky-200 flex-1"
      />
      <button
        data-testid="quantity-increase-button"
        onClick={() => increase()}
        className="h-full px-3 py-2.5 hover:bg-gray-200 rounded-r-md border border-s-0 border-gray-300 focus:outline-none focus:ring focus:ring-sky-200"
      >
        {/* Plus Icon SVG */}
        <svg
          className="w-4 h-4 text-gray-500"
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
  );
}

export default Quantity;
