import type { Product } from "../types";

import iphone from "../assets/images/products/iphone.png";
import car from "../assets/images/products/car.png";
import apartment from "../assets/images/products/apartment.png";
import samsung from "../assets/images/products/samsung.png";
import sofa from "../assets/images/products/sofa.png";

export const products: Product[] = [
  // موبايلات
  {
    id: 1,
    title: "ايفون 14 برو ماكس 256GB",
    price: "2450 ريال",
    image: iphone,
    location: "الرياض",
    time: "منذ 2 ساعة",
    category: "موبايلات",
  },

  // سيارات
  {
    id: 2,
    title: "هيونداي النترا 2020",
    price: "32000 ريال",
    image: car,
    location: "الرياض",
    time: "منذ 5 ساعات",
    category: "سيارات",
  },

  // عقارات
  {
    id: 3,
    title: "شقة للإيجار",
    price: "1800 ريال",
    image: apartment,
    location: "القاهرة",
    time: "منذ يوم",
    category: "عقارات",
  },

  // إلكترونيات
  {
    id: 4,
    title: "سامسونج S21",
    price: "1150 ريال",
    image: samsung,
    location: "الرياض",
    time: "منذ يوم",
    category: "إلكترونيات",
  },

  // منزل
  {
    id: 5,
    title: "كنبة زاوية",
    price: "750 ريال",
    image: sofa,
    location: "الرياض",
    time: "منذ يومين",
    category: "المنزل والحديقة",
  },

  // وظائف
  {
    id: 6,
    title: "مطلوب مصمم جرافيك",
    price: "4000 ريال",
    image: iphone,
    location: "الرياض",
    time: "منذ ساعة",
    category: "وظائف",
  },

  // خدمات
  {
    id: 7,
    title: "خدمة صيانة موبايلات",
    price: "50 ريال",
    image: samsung,
    location: "القاهرة",
    time: "منذ 3 ساعات",
    category: "خدمات",
  },

  // أزياء
  {
    id: 8,
    title: "تيشيرت رجالي جديد",
    price: "120 ريال",
    image: sofa,
    location: "الرياض",
    time: "منذ يوم",
    category: "أزياء وموضة",
  },

  // رياضة
  {
    id: 9,
    title: "دراجة رياضية",
    price: "600 ريال",
    image: car,
    location: "القاهرة",
    time: "منذ يومين",
    category: "رياضة وهوايات",
  },
];
