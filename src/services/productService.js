import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const productService = {
  getCategory: (category) =>
    axiosInstance.get(`/products/category/${category}`).then((res) =>
      res.data.map((product) => {
        const { title, rating, ...otherProps } = product;
        return {
          name: product.title,
          rating: product.rating.rate,
          ...otherProps,
        };
      })
    ),
};

export default productService;
