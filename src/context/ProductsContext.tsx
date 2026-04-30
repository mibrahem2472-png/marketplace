import { createContext, useContext, useEffect, useState } from "react";
import { products as defaultProducts } from "../data/products";
import type { Product } from "../types";

type NewProduct = Omit<Product, "id" | "time">;

type ProductsContextType = {
  products: Product[];
  userProducts: Product[];
  addProduct: (product: NewProduct) => void;
  deleteProduct: (id: number) => void;
};

const ProductsContext = createContext<ProductsContextType | null>(null);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [userProducts, setUserProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("userProducts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("userProducts", JSON.stringify(userProducts));
  }, [userProducts]);

  const products = [...userProducts, ...defaultProducts];

  function addProduct(product: NewProduct) {
    const newProduct: Product = {
      ...product,
      id: Date.now(),
      time: "الآن",
    };

    setUserProducts((prev) => [newProduct, ...prev]);
  }

  function deleteProduct(id: number) {
    setUserProducts((prev) => prev.filter((product) => product.id !== id));
  }

  return (
    <ProductsContext.Provider
      value={{ products, userProducts, addProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used inside ProductsProvider");
  }

  return context;
}
