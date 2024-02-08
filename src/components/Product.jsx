import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productService from "../services/productService";
import ProductRating from "./ProductRating";
import Quantity from "./Quantity";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../features/cart/cartSlice";
import ProductPlaceholder from "./ProductPlaceholder";

export function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value.items);

  const isItemInCart = () =>
    cart.some((item) => item.product.id === product.id);

  const removeFromCart = () => {
    dispatch(removeItem(product.id));
  };

  const addToCart = () => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        setProduct(await productService.getProduct(productId));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [productId]);

  useEffect(() => {
    setLoadingImage(true);
    if (product) {
      const img = new Image();
      img.onload = () => setLoadingImage(false);
      img.src = product.image;
    }
  }, [product]);

  const template = () => (
    <article className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
      <div className="w-full max-w-md flex-1">
        <div className="pb-[100%] relative h-full w-full">
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
              src={product.image}
              className="absolute object-contain w-full h-full"
            />
          )}
        </div>
      </div>

      <div className="w-full text-left flex-1">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <ProductRating rating={product.rating} />
        <hr className="mb-8" />

        <div className="flex flex-col gap-8">
          <p className="text-3xl font-bold">
            $
            {product.price.toLocaleString("en-us", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
          <div className="mb-20 md:mb-0">
            <h3 className="text-lg font-bold mb-2 text-gray-500">
              Description:
            </h3>
            <p className="text-lg font-semibold text-gray-800">
              {product.description}
            </p>
          </div>

          <div className="fixed md:relative p-4 md:p-0 bottom-0 left-0 w-full bg-white">
            <div className="flex flex-row justify-between md:justify-start items-center gap-4 ">
              {isItemInCart() ? (
                <>
                  <Quantity productId={product.id} />
                  <button
                    aria-label="remove from cart"
                    className="select-none text-green-500 hover:text-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 items-center inline-flex transition-all"
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
          </div>
        </div>
      </div>
    </article>
  );

  const productNotFound = () => (
    <h2 className="text-2xl text-left font-semibold text-gray-900">
      Unfortunately, the requested product does not exist.
    </h2>
  );

  const conditionalRender = () => {
    if (loading) return <ProductPlaceholder />;
    else if (product) return template();
    else return productNotFound();
  };

  return conditionalRender();
}

export default Product;
