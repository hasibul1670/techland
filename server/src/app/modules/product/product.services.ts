import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { IProduct, IProductFilters } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (filters: IProductFilters) => {
  const { searchTerm, ...filtersData } = filters;
  const { whereConditions } = buildWhereConditions(searchTerm, filtersData);
  const result = await Product.find(whereConditions);
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findOne({_id: id });
    return result
};

const deleteProduct = async (id: string) => {
  const result = await Product.findOneAndDelete({ _id: id });
  return result;
};
const updateProduct = async (
  id: string,
  payload: Partial<IProduct>
): Promise<IProduct | null> => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const ProductService = {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
