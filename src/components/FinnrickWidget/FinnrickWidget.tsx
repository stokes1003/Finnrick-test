import { useProduct, useWindowSize } from "../../hooks";
import { Header } from "./Header";
import { Badge } from "./Badge";
import { ProductData } from "./ProductData";
export const FinnrickWidget = ({ productId }: { productId: string }) => {
  const { width } = useWindowSize();
  const isMobile = width < 640;
  const product = useProduct(productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div
      className={`${
        isMobile ? "w-[370px]" : "w-[416px]"
      } rounded-xl border border-gray-300 bg-[#EFEFEF] p-6 shadow-sm font-sans`}
    >
      <Header />

      <div className="flex flex-row gap-4">
        <Badge product={product} />

        <ProductData product={product} />
      </div>
      <div className="flex w-full z-10">
        <img
          src="/finnrick-logo-black.svg"
          alt="Finnrick"
          className="h-6"
          loading="lazy"
        />
      </div>
    </div>
  );
};
