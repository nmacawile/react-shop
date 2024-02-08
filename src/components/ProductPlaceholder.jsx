function ProductPlaceholder() {
  return (
    <div
      data-testid="product-placeholder"
      className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start"
    >
      <div className="w-full max-w-md flex-1">
        <div className="pb-[100%] relative h-full w-full bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      <div className="w-full text-left flex-1 rounded-md animate-pulse">
        <div className="h-6 mb-4 font-bold bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-6 mb-4 w-4/5 font-bold bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-40 mb-4 font-bold bg-gray-300 rounded-md animate-pulse"></div>
        <hr className="mb-8" />

        <div className="flex flex-col gap-8">
          <div className="h-6 w-40 font-bold bg-gray-300 rounded-md animate-pulse"></div>
          <div className="flex flex-col gap-4 mb-20 md:mb-0">
            <div className="h-4 w-full font-bold bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-4 w-4/5 font-bold bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-4 w-3/5 font-bold bg-gray-300 rounded-md animate-pulse"></div>
          </div>

          {/* <div className="fixed md:relative p-4 md:p-0 bottom-0 left-0 w-full bg-white">
            <div className="flex flex-row justify-between md:justify-start items-center gap-4 ">
              {isItemInCart() ? (
                <>
                  <Quantity productId={product.id} />
                  <button
                    aria-label="remove from cart"
                    className="select-none text-green-500 hover:text-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 items-center inline-flex"
                    onClick={() => removeFromCart()}
                  >
                    In Cart
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
                </>
              ) : (
                <button
                  onClick={() => addToCart()}
                  className="select-none px-5 p-2.5 w-full md:w-64 rounded-md text-md text-white font-semibold bg-sky-600 hover:bg-sky-500 transition-all outline-none focus:ring-4 ring-sky-300"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductPlaceholder;
