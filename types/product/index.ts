export type CartProductDataType = {
  id: number;
  description: string;
  name: string;
  price: number;
  image_url: string;
  category: string;
  type: string;
  quantity: number;
  totalPrice: number;
};

export type ProductDataType = {
  id: number;
  description: string;
  name: string;
  price: number;
  image_url: string;
  category: string;
  type: string;
  created_at: string;
  updated_at: string;
  slug: string;
  type_id: number;
  category_id: number;
  Type_Product: TypesProductDataType;
  Category_Product: CategoryProductDataType;
};

export type TypesProductDataType = {
  id: number;
  name: string;
  updated_at: string;
  created_at: string;
};

export type CategoryProductDataType = {
  id: number;
  name: string;
  updated_at: string;
  created_at: string;
};

export interface ProductDataApiType {
  data?: ProductDataType[];
}
