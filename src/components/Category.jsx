import { useParams } from "react-router-dom";
import { categories } from "../data/categories";
import { ProductCard } from "./ProductCard.jsx";

export function Category() {
  const { category } = useParams();
  const title =
    categories.find((c) => c.slug === category)?.name ||
    "Category not available";
  return (
    <section className="category">
      <h1 className="text-2xl mb-8 text-left font-semibold text-gray-900">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((p) => (
          <ProductCard key={`product-${p}`} productId={p}/>
        ))}
      </div>
    </section>
  );
}

export default Category;
