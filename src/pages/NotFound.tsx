import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-7xl font-black text-blue-600">404</h1>
      <p className="mt-4 text-2xl font-bold">الصفحة غير موجودة</p>
      <p className="mt-2 text-slate-500">
        الرابط الذي تحاول الوصول إليه غير صحيح
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white"
      >
        الرجوع للرئيسية
      </Link>
    </section>
  );
}
