import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { useFavorites } from "../../context/FavoritesContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(product.id);
            }}
            className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-md ${
              favorite ? "text-red-500" : "text-slate-600"
            }`}
          >
            {favorite ? "♥" : "♡"}
          </button>
        </div>

        <div className="p-4">
          <p className="text-lg font-bold text-blue-600">{product.price}</p>

          <h3 className="mt-2 truncate font-semibold text-slate-900">
            {product.title}
          </h3>

          <div className="mt-4 text-xs text-slate-500">
            <span>📍 {product.location}</span>
          </div>

          <p className="mt-5 text-xs text-slate-400">{product.time}</p>
        </div>
      </article>
    </Link>
  );
}
