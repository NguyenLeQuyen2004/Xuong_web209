import { Product } from "./Product";
import { User } from "./User";

export type Orders = {
  user: User;
  address: string;
  phone: string;
  name: string;
  payment: "COD" | "BANK";
  totalPrice: number;
  products: Product[];
};
