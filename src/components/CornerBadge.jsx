export function CornerBadge() {
  return (
    <>
      <div className="corner-badge w-32 h-32 absolute right-0 top-0 border-[4rem] border-transparent border-b-sky-600 translate-x-1/2 -translate-y-1/2 rotate-45" />
      <div className="absolute top-1 right-1 m-1 text-gray-900 text-sm p-2.5 text-center inline-flex items-center">
        <svg
          className="w-5 h-5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>

        <span className="sr-only">item is in cart</span>
      </div>
    </>
  );
}

export default CornerBadge;
