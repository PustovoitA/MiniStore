import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeCartStore = {
    basket: Product[] | [],
    notification: Notification
    setItemInCart: (item: Product | undefined) => boolean,
    setNotification:(item: Notification) => void
    deleteItemFromCart: (item: Product | undefined) => void,
    clearState: () => void
}

type Notification = {open: boolean, value: "success" | "error"}


const CartStore = create<TypeCartStore>()(
    persist(
        (set, get) => ({

            basket: [],
            notification: {open: false, value: "success"},

            setItemInCart(item){
                if(!item){
                    set({notification:{open: true, value: "error"}})
                    return false
                }

                set((state) => ({
                    basket: [...state.basket, item],
                    notification:{open: true, value: "success"}
                }));

                return true
            },

            setNotification(item){
                set(()=>{
                    return{notification: item}
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
        {name: "cart-storage"}
    )
)

export default CartStore