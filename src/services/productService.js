import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const convertProduct = (product) => {
  const { title, rating, ...otherProps } = product;
  return {
    name: product.title,
    rating: product.rating.rate,
    ...otherProps,
  };
};

export const productService = {
  getCategory: (category) =>
    axiosInstance
      .get(`/products/category/${category}`)
      .then(({ data }) => data.map(convertProduct)),

  getProduct: (id) =>
    axiosInstance
      .get(`/products/${id}`)
      .then(({ data }) => convertProduct(data)),
};

export default productService;
