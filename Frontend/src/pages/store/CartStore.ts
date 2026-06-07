import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeCartStore = {
    basket: Product[] | [],
    setItemInCart: (item: Product | undefined) => void,
    deleteItemFromCart: (item: Product | undefined) => void,
    clearState: () => void
}


const CartStore = create<TypeCartStore>()(
    persist(
        (set, get) => ({

            basket: [],

            setItemInCart(item){
                set((state) => {
                    if(!item) return {basket: [...state.basket]}
                    return {basket: [...state.basket, item]}
                })
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
        {name: "history-routes-storage"}
    )
)

export default CartStore