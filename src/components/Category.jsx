import { useParams } from "react-router-dom";
import { categories } from "../data/categories";

export function Category() {
  const { category } = useParams();
  const title =
    categories.find((c) => c.slug === category)?.name ||
    "Category not available";
  return <h1 className="text-2xl">{title}</h1>;
}

export default Category;
