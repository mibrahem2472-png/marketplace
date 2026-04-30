import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("من فضلك املأ كل البيانات");
      return;
    }

    register({
      name,
      email,
      password,
    });

    setError("");
    navigate("/login");
  }

  return (
    <section className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <h1 className="section-title">إنشاء حساب</h1>
        <p className="mt-2 text-slate-500">أنشئ حسابك وابدأ إضافة الإعلانات</p>
      </div>

      <form onSubmit={handleSubmit} className="page-card space-y-4 p-6">
        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
            {error}
          </div>
        )}

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-style w-full"
          placeholder="الاسم"
        />

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

        <button className="primary-btn w-full">إنشاء حساب</button>

        <p className="text-center text-sm text-slate-500">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" className="font-bold text-blue-600">
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </section>
  );
}
