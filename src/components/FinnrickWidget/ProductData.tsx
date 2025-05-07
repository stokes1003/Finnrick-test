import type { Product } from "../../hooks";

export const ProductData = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col justify-center w-52 gap-2">
      <div className="font-semibold text-xl leading-6">{product.vendor}</div>
      <div className="font-semibold text-xl leading-6">{product.product}</div>
      <div className="text-sm leading-5">
        Tested {product.samplesTested} Samples
      </div>
      <div className="text-sm leading-5">Last test {product.lastTestDate}</div>
    </div>
  );
};
