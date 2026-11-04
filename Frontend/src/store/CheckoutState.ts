import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TypeCheckoutState {
    buyNowProduct: {product: Product | undefined, quantity: number} | null,
    itemsToBuy: {product: Product | undefined, quantity: number}[] | [],
    setItemToBuy: (items:{product: Product | undefined, quantity: number}[]) => void,
    setBuyNowProduct: (item: Product | undefined, selectedCountProduct: number) => void,
    resetBuyNowProduct: () => void,
}


const CheckoutState = create<TypeCheckoutState>()(
    persist(
        (set) => ({

            buyNowProduct: null,
            itemsToBuy: [],

            setItemToBuy(items){
                set(() => ({itemsToBuy: items}))
            },

            setBuyNowProduct(item, selectedCountProduct){
                set(() => ({buyNowProduct: {product: item, quantity: selectedCountProduct}}))
            },

            resetBuyNowProduct(){
                set(() => ({buyNowProduct: null}))
            }
        }),
        {name: "checkout-store"}
    )
)
export default CheckoutState