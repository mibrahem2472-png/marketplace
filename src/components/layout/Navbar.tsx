import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useProducts } from "../../context/ProductsContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import type { Product } from "../../types";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { products } = useProducts();
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();

  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const suggestions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return products
      .filter((p: Product) => {
        const text =
          `${p.title} ${p.location} ${p.price} ${p.category}`.toLowerCase();
        return text.includes(query);
      })
      .slice(0, 5);
  }, [search, products]);

  function handleSearch() {
    if (search.trim()) {
      navigate(`/listings?q=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/listings");
    }

    setIsFocused(false);
    setMenuOpen(false);
  }

  function openProduct(id: number) {
    navigate(`/product/${id}`);
    setSearch("");
    setIsFocused(false);
    setMenuOpen(false);
  }

  function handleLogout() {
    logout();
    setMenuOpen(false);
    navigate("/");
  }

  const navLink = (path: string) =>
    `relative text-sm font-semibold transition ${
      location.pathname === path
        ? "text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    } after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1470px] items-center justify-between gap-4 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            M
          </div>

          <span className="text-xl font-bold text-slate-900 md:text-2xl">
            MarketPlace
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/" className={navLink("/")}>
            الرئيسية
          </Link>
          <Link to="/listings" className={navLink("/listings")}>
            الإعلانات
          </Link>
          <Link to="/about" className={navLink("/about")}>
            من نحن
          </Link>
          <Link to="/contact" className={navLink("/contact")}>
            تواصل معنا
          </Link>
        </nav>

        <div className="hidden max-w-xl flex-1 lg:flex">
          <div className="relative flex w-full items-center rounded-xl border border-slate-200 bg-white px-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="ابحث عن أي شيء..."
              className="h-12 flex-1 bg-transparent text-sm outline-none"
            />

            <button
              type="button"
              onClick={handleSearch}
              className="text-sm font-bold text-blue-600"
            >
              بحث
            </button>

            {isFocused && search.trim() && (
              <div className="absolute left-0 right-0 top-14 z-50 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                {suggestions.length > 0 ? (
                  suggestions.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onMouseDown={() => openProduct(p.id)}
                      className="flex w-full items-center gap-3 p-3 text-start text-sm hover:bg-slate-100"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-10 w-10 rounded-xl object-cover"
                      />

                      <div>
                        <p className="font-bold text-slate-900">{p.title}</p>
                        <p className="text-xs text-slate-500">
                          {p.price} - {p.location}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-center text-sm text-slate-500">
                    لا توجد نتائج
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold hover:bg-slate-100"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link
            to="/favorites"
            className="text-xl transition hover:text-red-500"
          >
            ♡
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="text-sm font-semibold text-blue-600"
              >
                {user?.name}
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold hover:bg-slate-100"
              >
                خروج
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm font-semibold">
              دخول
            </Link>
          )}

          <Link
            to="/add-listing"
            className="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            أضف إعلان
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl lg:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3 border-t bg-white p-4 lg:hidden">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="ابحث..."
            className="rounded-xl border p-3 outline-none"
          />

          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-xl border p-3 text-start font-bold"
          >
            {darkMode ? "الوضع الفاتح ☀️" : "الوضع الداكن 🌙"}
          </button>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            الرئيسية
          </Link>

          <Link to="/listings" onClick={() => setMenuOpen(false)}>
            الإعلانات
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            من نحن
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            تواصل معنا
          </Link>

          <hr />

          <Link to="/favorites" onClick={() => setMenuOpen(false)}>
            المفضلة
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                {user?.name}
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="text-start"
              >
                خروج
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              دخول
            </Link>
          )}

          <Link
            to="/add-listing"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"
          >
            أضف إعلان
          </Link>
        </div>
      )}
    </header>
  );
}
