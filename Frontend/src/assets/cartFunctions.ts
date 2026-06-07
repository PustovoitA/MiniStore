import CartStore from "@/pages/store/CartStore";
import type { Product } from "@/types/Product";


export function addProductInCart (item: Product | undefined){
    return CartStore.getState().setItemInCart(item);
}