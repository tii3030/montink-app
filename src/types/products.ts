export type Product = {
  query: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  old_price: number;
  id: number;
  category: string;
  updated_at: string;
  colors: Array<String>;
  ratings: number;
  sizes: {
    value: string;
    label: string;
  }[];
};
