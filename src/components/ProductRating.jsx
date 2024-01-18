export function ProductRating({ rating }) {
  const drawStar = (key, filled = true) => {
    const fillColor = filled ? "yellow-300" : "gray-400";
    return (
      <svg
        key={key}
        className={`w-4 h-4 text-${fillColor}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  };

  const drawPartiallyFilledStar = (key, fillPercentile) => {
    return (
      <svg
        key={key}
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset={fillPercentile} stopColor="currentColor" />
            <stop stopColor="rgb(156 163 175)" /> {/* gray-400 */}
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    );
  };

  const filledStarsCount = Math.trunc(rating);
  const fillPercentile = Math.ceil(rating) - rating;
  const emptyStarsCount = 5 - filledStarsCount - Math.ceil(fillPercentile);

  let starsArray = Array(filledStarsCount).fill(1);
  if (Math.ceil(fillPercentile)) starsArray = [...starsArray, fillPercentile];
  starsArray = [...starsArray, ...Array(emptyStarsCount).fill(0)];

  const renderStar = (key, val) => {
    switch (val) {
      case 0:
        return drawStar(key, false);
      case 1:
        return drawStar(key);
      default:
        return drawPartiallyFilledStar(key, val);
    }
  };

  return (
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
      {starsArray.map((star, index) => {
        return renderStar(index, star);
      })}
      <span className="bg-sky-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default ProductRating;
