import CartStore from "@/pages/store/CartStore";
import type { Product } from "@/types/Product";


export function addProductInCart (item: Product | undefined): void {
    CartStore.getState().setItemInCart(item);
}