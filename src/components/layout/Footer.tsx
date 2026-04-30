import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-[1470px] px-8 grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold">MarketPlace</h2>
          <p className="mt-2 text-slate-500">
            منصة إعلانات مبوبة للبيع والشراء بسهولة
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link to="/about">من نحن</Link>
          <Link to="/contact">تواصل معنا</Link>
          <Link to="/privacy">سياسة الخصوصية</Link>
          <Link to="/terms">الشروط والأحكام</Link>
        </div>

        <div>
          <p className="text-slate-500">© 2026 جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
