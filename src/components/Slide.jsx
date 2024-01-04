import { Link } from "react-router-dom";

export function Slide({ heading, text, image, link }) {
  return (
    <div className="h-full w-full bg-slate-300 flex flex-col-reverse sm:flex-row">
      <div className="p-4 md:p-8 h-1/2 sm:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-2xl md:text-4xl font-bold text-sky-600">
          {heading}
        </h2>
        <p className="md:text-xl text-left">{text}</p>
        <Link
          to={`categories/${link}`}
          data-testid={`${link}-link`}
          className="self-center mx-auto w-full md:w-64 h-16 mt-4 flex items-center justify-center text-xl text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-2 mx-0"
        >
          SHOP NOW!
        </Link>
      </div>
      <div
        className="h-1/2 sm:h-full w-full sm:w-1/2 bg-slate-300 p-8 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
}

export default Slide;
