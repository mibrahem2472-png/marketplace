import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/home/ProductCard";
import { useProducts } from "../context/ProductsContext";

export default function Listings() {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("q") || "";

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const text = `${p.title} ${p.location} ${p.price}`.toLowerCase();

      const price = Number(p.price.replace(/\D/g, ""));

      return (
        text.includes(search.toLowerCase()) &&
        (!minPrice || price >= Number(minPrice)) &&
        (!maxPrice || price <= Number(maxPrice))
      );
    });
  }, [products, search, minPrice, maxPrice]);

  return (
    <section className="space-y-8">
      <div>
        <h1 className="section-title">كل الإعلانات</h1>
        <p className="text-slate-500 mt-2">نتائج البحث: {filtered.length}</p>
      </div>

      {/* Filters */}
      <div className="page-card p-5 grid gap-4 md:grid-cols-3">
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="السعر من"
          className="input-style"
        />

        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="السعر إلى"
          className="input-style"
        />

        <button
          onClick={() => {
            setMinPrice("");
            setMaxPrice("");
          }}
          className="primary-btn"
        >
          إعادة ضبط
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
