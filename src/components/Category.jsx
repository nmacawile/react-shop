import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { categories } from "../data/categories";
import { ProductCard } from "./ProductCard.jsx";
import { fakeData } from "../data/fakeData.js";
import ProductCardPlaceholder from "./ProductCardPlaceholder.jsx";

export function Category() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const title =
    categories.find((c) => c.slug === category)?.name ||
    "Category not available";
  return (
    <>
      <section className="category">
        <h1 className="text-2xl mb-8 text-left font-semibold text-gray-900">
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((a) => (
                <ProductCardPlaceholder key={`card-placeholder-${a}`} />
              ))
            : fakeData.map((product, i) => (
                <ProductCard key={`product-${i}`} product={product} />
              ))}
        </div>
      </section>
    </>
  );
}

export default Category;
