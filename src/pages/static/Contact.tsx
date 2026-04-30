export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-extrabold">تواصل معنا</h1>

      <p className="mt-4 text-slate-500">
        يمكنك التواصل معنا في أي وقت وسنقوم بالرد عليك في أقرب وقت ممكن.
      </p>

      <form className="mt-8 grid gap-4">
        <input placeholder="الاسم" className="rounded-xl border p-3" />

        <input
          placeholder="البريد الإلكتروني"
          className="rounded-xl border p-3"
        />

        <textarea
          placeholder="رسالتك"
          className="rounded-xl border p-3 min-h-[120px]"
        />

        <button className="rounded-xl bg-blue-600 text-white py-3 font-bold">
          إرسال
        </button>
      </form>
    </section>
  );
}
