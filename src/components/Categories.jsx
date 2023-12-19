import clothesIcon from "../assets/svg/clothes-14-svgrepo-com.svg";
import shoesIcon from "../assets/svg/shoes-14-svgrepo-com.svg";
import furnitureIcon from "../assets/svg/furniture-14-svgrepo-com.svg";
import miscellaneousIcon from "../assets/svg/gift-14-svgrepo-com.svg";
import electronicsIcon from "../assets/svg/photo-14-svgrepo-com.svg";
import { Link } from "react-router-dom";

export function Categories() {
  const categories = [
    { name: "Clothes", image: clothesIcon, link: "/clothes" },
    { name: "Electronics", image: electronicsIcon, link: "/electronics" },
    { name: "Furniture", image: furnitureIcon, link: "/furniture" },
    { name: "Shoes", image: shoesIcon, link: "/shoes" },
    { name: "Miscellaneous", image: miscellaneousIcon, link: "/misc" },
  ];
  const textStyle = {
    WebkitTextStrokeWidth: "1px", // For WebKit browsers
    WebkitTextStrokeColor: "rgb(75 85 99)", // For WebKit browsers
    textShadow: "1px 1px 0 rgba(75 85 99 .8)", // For other browsers
  };

  return (
    <section
      data-testid="categories-component"
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-4"
    >
      {categories.map(({ name, image, link }, index) => (
        <article
          key={`category-${index}`}
          className="relative group overflow-hidden"
        >
          <Link
            to={link}
            className="h-32 rounded-md drop-shadow-md flex items-center justify-center bg-no-repeat bg-contain bg-center bg-slate-300 p-4 block"
          >
            <img
              src={image}
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
