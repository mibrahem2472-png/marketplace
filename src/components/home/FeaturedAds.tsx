import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedAds() {
  return (
    <section className="mt-12">
      <SectionTitle title="إعلانات مميزة" link="عرض الكل" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
