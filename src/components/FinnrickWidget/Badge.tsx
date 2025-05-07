import type { Product } from "../../hooks";

export const Badge = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-row w-40">
      <div
        className={`items-center h-16 px-8 rounded-full ${product.ratingColor} relative w-full`}
      >
        <div
          className={`flex items-center justify-center rounded-full size-16 text-white text-4xl font-bold ${product.ratingColor} border-[1px] border-white z-10 absolute left-0`}
        >
          {product.rating}
        </div>
        <div className="text-white text-base font-semibold pl-11 content-center h-full">
          {product.ratingLabel}
        </div>
      </div>
    </div>
  );
};
