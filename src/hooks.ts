import { useState, useEffect } from "react";

export type Product = {
  vendor: string;
  product: string;
  rating: string;
  ratingLabel: string;
  ratingColor: string;
  lastTestDate: string;
  samplesTested: number;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const mockProducts: Record<string, Product> = {
  "123": {
    vendor: "Shanghai Innovy Chemical New Materials",
    product: "Tesamorelin, CJC-1295, Ipamorelin",
    rating: "A",
    ratingLabel: "GREAT",
    ratingColor: "bg-[#0E8A4A]",
    lastTestDate: "19 Feb 2025",
    samplesTested: 6,
  },
  "456": {
    vendor: "Polaris Peptides",
    product: "Semaglutide",
    rating: "A",
    ratingLabel: "GREAT",
    ratingColor: "bg-green-600",
    lastTestDate: "10 Jan 2025",
    samplesTested: 4,
  },
};

export function useProduct(productId: string) {
  //   Fetch product from API
  //   const [product, setProduct] = useState<Product | null>(null);

  //   useEffect(() => {
  //     const fetchProduct = async () => {
  //       const response = await fetch(
  //         `www.finnrick.com/api/products/${productId}`
  //       );
  //       const data = await response.json();
  //       setProduct(data);
  //     };

  //     fetchProduct();
  //   }, [productId]);

  //   return product;

  return mockProducts[productId];
}

export function useLogo() {
  //   const [logo, setLogo] = useState<string | null>(null);
  //   useEffect(() => {
  //     const fetchLogo = async () => {
  //       const response = await fetch(`www.finnrick.com/api/logo`);
  //       const data = await response.json();
  //       setLogo(data);
  //     };
  //     fetchLogo();
  //   }, []);
  //   return logo;
}
