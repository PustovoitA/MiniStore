import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TypeCheckoutState {
    buyNowProduct: {product: Product | undefined, quantity: number} | null,
    setBuyNowProduct: (item: Product | undefined, selectedCountProduct: number) => void,
    resetBuyNowProduct: () => void,
}


const CheckoutState = create<TypeCheckoutState>()(
    persist(
        (set) => ({
            buyNowProduct: null,

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