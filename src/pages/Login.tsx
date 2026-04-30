import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const success = login(email, password);

    if (!success) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      return;
    }

    setError("");
    navigate("/profile");
  }

  return (
    <section className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <h1 className="section-title">تسجيل الدخول</h1>
        <p className="mt-2 text-slate-500">أهلاً بعودتك إلى MarketPlace</p>
      </div>

      <form onSubmit={handleSubmit} className="page-card space-y-4 p-6">
        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
            {error}
          </div>
        )}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-style w-full"
          placeholder="البريد الإلكتروني"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input-style w-full"
          placeholder="كلمة المرور"
        />

        <button className="primary-btn w-full">دخول</button>

        <p className="text-center text-sm text-slate-500">
          ليس لديك حساب؟{" "}
          <Link to="/register" className="font-bold text-blue-600">
            إنشاء حساب
          </Link>
        </p>
      </form>
    </section>
  );
}
