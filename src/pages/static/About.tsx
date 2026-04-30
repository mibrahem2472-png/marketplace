export default function About() {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-extrabold">من نحن</h1>

      <p className="mt-6 leading-8 text-slate-600">
        منصة MarketPlace هي منصة إعلانات مبوبة تتيح للمستخدمين بيع وشراء
        المنتجات بسهولة. هدفنا هو توفير تجربة بسيطة وسريعة وآمنة للجميع.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-6 text-center">
          <p className="text-3xl">🚀</p>
          <h3 className="mt-3 font-bold">سهولة الاستخدام</h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6 text-center">
          <p className="text-3xl">🔒</p>
          <h3 className="mt-3 font-bold">أمان كامل</h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6 text-center">
          <p className="text-3xl">⚡</p>
          <h3 className="mt-3 font-bold">سرعة في الوصول</h3>
        </div>
      </div>
    </section>
  );
}
