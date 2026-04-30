import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useAuth } from "../context/AuthContext";

type Message = {
  id: number;
  sender: "user" | "seller";
  text: string;
};

export default function ContactSeller() {
  const { id } = useParams();
  const { products } = useProducts();
  const { isLoggedIn, user } = useAuth();

  const product = products.find((item) => item.id === Number(id));

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "seller",
      text: "أهلاً بيك 👋، تقدر تسألني عن أي تفاصيل تخص الإعلان.",
    },
  ]);

  const [message, setMessage] = useState("");

  if (!isLoggedIn) {
    return (
      <section className="page-card mx-auto max-w-xl p-8 text-center">
        <h1 className="text-2xl font-bold">يجب تسجيل الدخول أولًا</h1>
        <p className="mt-2 text-slate-500">سجل دخولك للتواصل مع البائع</p>

        <Link to="/login" className="primary-btn mt-6 inline-block">
          تسجيل الدخول
        </Link>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="page-card mx-auto max-w-xl p-8 text-center">
        <h1 className="text-2xl font-bold">الإعلان غير موجود</h1>

        <Link to="/listings" className="primary-btn mt-6 inline-block">
          الرجوع للإعلانات
        </Link>
      </section>
    );
  }

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    setTimeout(() => {
      const sellerReply: Message = {
        id: Date.now() + 1,
        sender: "seller",
        text: "تمام 👍 الإعلان متاح حالياً. تحب تعرف تفاصيل أكتر؟",
      };

      setMessages((prev) => [...prev, sellerReply]);
    }, 700);
  }

  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="section-title">محادثة مع البائع</h1>
        <p className="mt-2 text-slate-500">أنت تتحدث باسم: {user?.name}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="page-card h-fit overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-bold">{product.title}</h2>

            <p className="mt-2 text-2xl font-black text-blue-600">
              {product.price}
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <p>📍 {product.location}</p>
              <p>🏷 {product.category}</p>
              <p>⏱ {product.time}</p>
            </div>

            <Link
              to={`/product/${product.id}`}
              className="primary-btn mt-5 block text-center"
            >
              عرض الإعلان
            </Link>
          </div>
        </aside>

        <div className="page-card flex h-[620px] flex-col overflow-hidden">
          <div className="border-b border-slate-200 p-5">
            <h2 className="text-xl font-bold">الشات</h2>
            <p className="mt-1 text-sm text-slate-500">محادثة داخل الموقع</p>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={sendMessage}
            className="flex gap-3 border-t border-slate-200 bg-white p-4"
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-style flex-1"
              placeholder="اكتب رسالتك هنا..."
            />

            <button className="primary-btn px-8">إرسال</button>
          </form>
        </div>
      </div>
    </section>
  );
}
