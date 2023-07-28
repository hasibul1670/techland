import { Model } from 'mongoose';

export type IProduct = {
  name: string;
  productDescription: string;
  measurement: string;
  company: string;
  generic: string;
  category: string;
  price: number;
  imageUrl: string;
};


export type ProductModel = Model<IProduct>;

export type IProductFilters = {
  searchTerm?: string;
  name?: string;
  category?: string;
};


export const productFilterableFields = ['searchTerm', 'name', 'category', ''];

export const productSearchableFields = ['name','category'];