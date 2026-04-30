import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import SectionTitle from "../ui/SectionTitle";

export default function Categories() {
  return (
    <section className="mt-10">
      <SectionTitle title="الأقسام الرئيسية" link="عرض جميع الأقسام" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${encodeURIComponent(category.name)}`}
            className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <span className="text-3xl">{category.icon}</span>
            <span className="text-sm font-medium text-slate-700">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
