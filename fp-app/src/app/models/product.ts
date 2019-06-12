import { Category } from './category';

export interface Product {
  id: string;
  isActive: boolean;
  price: number;
  avatar: string;
  itemsAvailable: string;
  category: Category;
  name: string;
  description: string;
  created: number;
  createdBy: string;
}

