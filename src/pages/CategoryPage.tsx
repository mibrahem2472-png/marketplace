import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/home/ProductCard";
import { useProducts } from "../context/ProductsContext";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName || "");

  const { products } = useProducts();

  const categoryProducts = products.filter(
    (product) => product.category === decodedCategory,
  );

  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="section-title">{decodedCategory}</h1>
          <p className="mt-2 text-slate-500">إعلانات قسم {decodedCategory}</p>
        </div>

        <Link to="/" className="primary-btn">
          الرجوع للرئيسية
        </Link>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="page-card py-20 text-center">
          <p className="text-5xl">📦</p>
          <h2 className="mt-4 text-2xl font-bold">لا توجد إعلانات</h2>
          <p className="mt-2 text-slate-500">
            لا توجد إعلانات في هذا القسم حالياً
          </p>
        </div>
      )}
    </section>
  );
}
