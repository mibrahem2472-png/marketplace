import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useAuth } from "../context/AuthContext";
import { categories } from "../data/categories";

export default function AddListing() {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const { user, isLoggedIn } = useAuth();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isLoggedIn) {
    return (
      <section className="page-card mx-auto max-w-xl p-8 text-center">
        <h1 className="text-2xl font-bold">يجب تسجيل الدخول أولًا</h1>
        <p className="mt-2 text-slate-500">
          سجل دخولك أو أنشئ حساب لتتمكن من إضافة إعلان
        </p>

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

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !price || !location || !category || !image || !description) {
      setError("من فضلك املأ كل البيانات وارفع صورة للإعلان");
      return;
    }

    addProduct({
      title,
      price,
      location,
      category,
      image,
      userEmail: user?.email,
    });

    setError("");
    setSuccess(true);

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  }

  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="section-title">أضف إعلان جديد</h1>
        <p className="mt-2 text-slate-500">
          املأ البيانات التالية لنشر إعلانك على المنصة
        </p>
      </div>

      <form onSubmit={handleSubmit} className="page-card p-6">
        <div className="grid gap-5">
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-600">
              تم نشر الإعلان بنجاح 🎉 سيتم تحويلك إلى حسابك...
            </div>
          )}

          <div>
            <label className="mb-2 block font-semibold">عنوان الإعلان</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-style w-full"
              placeholder="مثال: ايفون 14 برو ماكس"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">القسم</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-style w-full"
            >
              <option value="">اختر القسم</option>
              {categories
                .filter((item) => item.name !== "المزيد")
                .map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">السعر</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input-style w-full"
              placeholder="مثال: 2450 ريال"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">الموقع</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-style w-full"
              placeholder="مثال: القاهرة - مدينة نصر"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">وصف الإعلان</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-style min-h-40 w-full"
              placeholder="اكتب تفاصيل الإعلان..."
            />
          </div>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-slate-500 hover:border-blue-400 hover:bg-blue-50">
            <span className="text-4xl">📷</span>
            <span className="mt-3 font-semibold">ارفع صورة الإعلان</span>
            <span className="mt-1 text-sm">PNG أو JPG</span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {image && (
            <img
              src={image}
              alt="preview"
              className="h-64 w-full rounded-3xl object-cover"
            />
          )}

          <button
            disabled={success}
            className="primary-btn disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {success ? "جاري النشر..." : "نشر الإعلان"}
          </button>
        </div>
      </form>
    </section>
  );
}
