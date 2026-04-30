import { Link } from "react-router-dom";
import ProductCard from "../components/home/ProductCard";
import { useFavorites } from "../context/FavoritesContext";
import { useProducts } from "../context/ProductsContext";

export default function Favorites() {
  const { products } = useProducts();
  const { favoriteIds } = useFavorites();

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">المفضلة</h1>
        <p className="mt-2 text-slate-500">
          الإعلانات التي قمت بحفظها ({favoriteProducts.length})
        </p>
      </div>

      {favoriteProducts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-slate-50 py-20 text-center">
          <p className="text-5xl">♡</p>
          <h2 className="mt-4 text-2xl font-bold">لا توجد عناصر مفضلة</h2>
          <p className="mt-2 text-slate-500">
            احفظ الإعلانات التي تعجبك لتظهر هنا
          </p>

          <Link
            to="/listings"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
          >
            تصفح الإعلانات
          </Link>
        </div>
      )}
    </section>
  );
}
