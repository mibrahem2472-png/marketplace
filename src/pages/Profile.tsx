import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useAuth } from "../context/AuthContext";
import ProductCard from "../components/home/ProductCard";

export default function Profile() {
  const { userProducts, deleteProduct } = useProducts();
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <section className="page-card mx-auto max-w-xl p-8 text-center">
        <h1 className="text-2xl font-bold">يجب تسجيل الدخول أولًا</h1>
        <p className="mt-2 text-slate-500">سجل دخولك لعرض حسابك</p>

        <div className="mt-6 flex justify-center gap-3">
          <Link to="/login" className="primary-btn">
            تسجيل الدخول
          </Link>

          <Link
            to="/register"
            className="rounded-xl border border-slate-200 px-5 py-3 font-bold"
          >
            إنشاء حساب
          </Link>
        </div>
      </section>
    );
  }

  const myProducts = userProducts.filter(
    (product) => product.userEmail === user?.email,
  );

  return (
    <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="page-card h-fit p-6 text-center">
        <img
          src="https://i.pravatar.cc/150"
          alt="user"
          className="mx-auto h-24 w-24 rounded-full object-cover"
        />

        <h2 className="mt-4 text-xl font-bold">{user?.name}</h2>

        <p className="mt-1 text-slate-500">{user?.email}</p>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4">
          <p className="text-2xl font-black text-blue-600">
            {myProducts.length}
          </p>
          <p className="text-sm text-slate-500">إعلاناتي</p>
        </div>

        <Link to="/add-listing" className="primary-btn mt-6 block">
          أضف إعلان
        </Link>
      </aside>

      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="section-title">إعلاناتي</h1>
            <p className="mt-2 text-slate-500">الإعلانات التي قمت بإضافتها</p>
          </div>
        </div>

        {myProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {myProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />

                <button
                  type="button"
                  onClick={() => deleteProduct(product.id)}
                  className="absolute right-4 top-4 rounded-xl bg-red-500 px-3 py-2 text-sm font-bold text-white shadow-md hover:bg-red-600"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="page-card py-20 text-center">
            <p className="text-5xl">📦</p>
            <h2 className="mt-4 text-2xl font-bold">لا توجد إعلانات بعد</h2>
            <p className="mt-2 text-slate-500">ابدأ بإضافة أول إعلان لك الآن</p>

            <Link to="/add-listing" className="primary-btn mt-6 inline-block">
              أضف إعلان
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
