import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch() {
    const query = search.trim();

    if (query) {
      navigate(`/listings?q=${encodeURIComponent(query)}`);
    } else {
      navigate("/listings");
    }
  }

  return (
    <div className="mx-auto mt-8 flex max-w-[720px] overflow-hidden rounded-2xl bg-white p-2 shadow-xl shadow-blue-950/10">
      <button className="flex min-w-40 items-center justify-between border-l border-slate-200 px-5 text-sm text-slate-700">
        <span>كل الأقسام</span>
        <span>⌄</span>
      </button>

      <div className="flex flex-1 items-center px-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          type="text"
          placeholder="ابحث عن (موبايل، سيارة، عقار...)"
          className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />

        <span className="text-xl text-slate-400">⌕</span>
      </div>

      <button
        onClick={handleSearch}
        className="rounded-xl bg-blue-600 px-10 font-semibold text-white transition hover:bg-blue-700"
      >
        بحث
      </button>
    </div>
  );
}
