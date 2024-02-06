export function ProductCardPlaceholder() {
  return (
    <div className="rounded-lg border border-gray-300 overflow-hidden">
      <div className="p-8 w-full p-0 flex">
        <div className="w-full h-full pb-[100%] rounded-md bg-gray-300 animate-pulse" />
      </div>

      <div className="flex flex-col px-6 pb-4 gap-3 items-start justify-center">
        <div className="h-7 w-[10rem] rounded-md bg-gray-300 animate-pulse"></div>
        <div className="h-5 w-[20rem] max-w-full rounded-md bg-gray-300 animate-pulse"></div>
        <div className="h-5 w-[15rem] max-w-full rounded-md bg-gray-300 animate-pulse"></div>
        <div className="h-4 w-[7rem] rounded-md bg-gray-300 animate-pulse"></div>
        <div className="self-end h-10 w-[6rem] mt-3 rounded-md bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
}

export default ProductCardPlaceholder;
