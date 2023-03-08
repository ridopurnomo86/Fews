export type ProductDataType = {
  product_id: number;
  description: string;
  name: string;
  price: number;
  image_url: string;
  category: string;
};

export interface ProductDataApiType {
  data?: ProductDataType[];
}
