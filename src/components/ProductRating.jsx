import yellowStar from "../assets/svg/flowbite-yellow-star.svg";
import grayStar from "../assets/svg/flowbite-gray-star.svg";
export function ProductRating({ rating }) {
  const percentage = `${rating * 20}%`;

  return (
    <div className="flex items-center mt-2.5 mb-5">
      <div className="stars relative">
        <div className="flex items-center ">
          <img src={grayStar} className="w-4 h-4" />
          <img src={grayStar} className="w-4 h-4" />
          <img src={grayStar} className="w-4 h-4" />
          <img src={grayStar} className="w-4 h-4" />
          <img src={grayStar} className="w-4 h-4" />
        </div>
        <div
          className="absolute top-0 left-0 overflow-hidden flex items-center"
          style={{ width: percentage }}
        >
          <img src={yellowStar} className="w-4 h-4 shrink-0" />
          <img src={yellowStar} className="w-4 h-4 shrink-0" />
          <img src={yellowStar} className="w-4 h-4 shrink-0" />
          <img src={yellowStar} className="w-4 h-4 shrink-0" />
          <img src={yellowStar} className="w-4 h-4 shrink-0" />
        </div>
      </div>
      <span
        aria-label={`rating is ${rating.toFixed(1)}`}
        className="bg-sky-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3"
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default ProductRating;
