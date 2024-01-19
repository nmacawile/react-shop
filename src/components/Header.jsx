import logo from "../assets/svg/logo.svg";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header data-testid="header-component" className="bg-sky-600 text-white w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl gap-4 flex flex-nowrap items-center justify-between mx-auto py-4 px-4 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center space-x-2 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Shop Logo" />
          <h1 className="hidden sm:block self-center text-2xl font-['Merriweather Sans'] font-semibold whitespace-nowrap">
            Shop
          </h1>
        </Link>
        <SearchForm />
        <button
          type="button"
          className="relative text-white hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
            />
          </svg>
          <span className="sr-only">Shopping Cart Icon</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-600 bg-white rounded-full -top-2 -end-2">20</div>
        </button>
      </div>
    </header>
  );
}

export default Header;
