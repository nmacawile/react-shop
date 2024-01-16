import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export function Categories() {

  return (
    <section
      data-testid="categories-component"
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-4"
    >
      {categories.map(({ name, icon, slug }, index) => (
        <article
          key={`category-${index}`}
          className="relative group overflow-hidden"
        >
          <Link
            to={`categories/${slug}`}
            className="h-32 rounded-md drop-shadow-md flex items-center justify-center bg-no-repeat bg-contain bg-center bg-slate-300 p-4 block"
          >
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-full h-full group-hover:scale-125 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold text-gray-700 group-hover:text-sky-600 transition-colors duration-300 absolute bottom-4 left-4">
              {name}
            </h2>
          </Link>
        </article>
      ))}
    </section>
  );
}

export default Categories;
