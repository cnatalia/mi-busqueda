export interface ProductosResponse {
 resultado: {
  author: {
   name: string,
   lastname: string
  };
  categories: { nombre: string }[];
  items: {
   id: string,
   title: string,
   price: {
    currency: string,
    amount: number,
    decimals: number
   }
  };
  picture: string;
  conditions: string;
  freeShipping: boolean;
 }[];
}
