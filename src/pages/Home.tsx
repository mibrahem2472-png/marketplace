import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedAds from "../components/home/FeaturedAds";
import Benefits from "../components/home/Benefits";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Categories />
      <FeaturedAds />
      <Benefits />
    </div>
  );
}
