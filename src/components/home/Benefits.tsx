import { benefits } from "../../data/benefits";

export default function Benefits() {
  return (
    <section className="mt-10 rounded-3xl bg-[#f4f7ff] px-8 py-7">
      <div className="grid gap-6 md:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex items-center justify-center gap-4 text-center md:text-start"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/20">
              {benefit.icon}
            </div>

            <div>
              <h3 className="font-bold text-slate-900">{benefit.title}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
