import { ProductInCartPro } from "../types/product.types";

export const getTotalCartPrice = (array: ProductInCartPro[]) => {
  console.log(array);

  const totalCost = array.reduce((total: number, arr: ProductInCartPro) => {
    return total + +arr.price;
  }, 0);
  return totalCost;
};
