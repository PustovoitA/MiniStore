import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeCartStore = {
    basket: Product[] | [],
    setItemInCart: (item: Product | undefined) => boolean,
    deleteItemFromCart: (item: Product | undefined) => void,
    clearState: () => void
}


const CartStore = create<TypeCartStore>()(
    persist(
        (set, get) => ({

            basket: [],

            setItemInCart(item){
                if(!item) return false

                set((state) => ({
                    basket: [...state.basket, item]
                }));

                return true
            },

            deleteItemFromCart(item){
                set((state) => {
                    if(!item) return {basket: [...state.basket]}
                    return{basket: state.basket.filter(el => el !== item)}
                })
            },

            clearState(){
                set(()=>{return{basket: []}})
            },
        }),
        {name: "cart-storage"}
    )
)

export default CartStore