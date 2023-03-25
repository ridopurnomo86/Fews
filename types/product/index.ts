export type ProductDataType = {
  id: number;
  description: string;
  name: string;
  price: number;
  image_url: string;
  category: string;
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
