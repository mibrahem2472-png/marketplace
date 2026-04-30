import SearchBox from "../ui/SearchBox";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#f1f6ff] px-8 py-14">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-950 md:text-5xl">
          ابحث عن ما تحتاجه <span className="text-blue-600">بسهولة</span>
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          تصفح آلاف الإعلانات في منطقتك وتواصل مباشرة مع البائع
        </p>

        <SearchBox />
      </div>
    </section>
  );
}
