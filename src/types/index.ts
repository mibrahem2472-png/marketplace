export type Category = {
  id: number;
  name: string;
  icon: string;
};

export type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  location: string;
  time: string;
  category: string;
  userEmail?: string;
  badge?: string;
};

export type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: string;
};
