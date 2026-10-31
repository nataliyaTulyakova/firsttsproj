import type { Product } from "./mytypes.js";
export function calculateTotal(products: Product[]):number{
    let total:number;
    total = products.reduce((sum, item) =>{
         return sum + item.price;
    }, 0 );
    return Math.round(total * 100) / 100;
}
