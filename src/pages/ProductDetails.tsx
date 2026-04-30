import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useAuth } from "../context/AuthContext";

export default function ProductDetails() {
  const { products } = useProducts();
  const { isLoggedIn } = useAuth();
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-3xl font-bold">الإعلان غير موجود</h1>

        <Link
          to="/listings"
          className="mt-6 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white"
        >
          الرجوع للإعلانات
        </Link>
      </section>
    );
  }

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="overflow-hidden rounded-3xl bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-[520px] w-full object-cover"
        />
      </div>

      <div>
        <Link to="/listings" className="text-sm font-bold text-blue-600">
          ← رجوع للإعلانات
        </Link>

        <p className="mt-8 text-3xl font-extrabold text-blue-600">
          {product.price}
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-slate-900">
          {product.title}
        </h1>

        <div className="mt-5 flex flex-wrap gap-4 text-slate-500">
          <span>📍 {product.location}</span>
          <span>⏱ {product.time}</span>
          <span>🏷 {product.category}</span>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">وصف الإعلان</h2>
          <p className="mt-3 leading-8 text-slate-600">
            المنتج بحالة ممتازة ومتاح للمعاينة. يمكنك التواصل مباشرة مع البائع
            لمعرفة التفاصيل.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6">
          <h2 className="text-xl font-bold">معلومات البائع</h2>

          <div className="mt-5 flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/120?img=12"
              alt="seller"
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <p className="font-bold">بائع موثّق</p>
              <p className="text-sm text-slate-500">عضو في MarketPlace</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          {isLoggedIn ? (
            <Link
              to={`/contact-seller/${product.id}`}
              className="flex-1 rounded-2xl bg-blue-600 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              تواصل مع البائع
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex-1 rounded-2xl bg-blue-600 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              سجل دخولك للتواصل
            </Link>
          )}

          <button className="rounded-2xl border border-slate-200 px-6 text-2xl transition hover:bg-slate-50">
            ♡
          </button>
        </div>
      </div>
    </section>
  );
}
