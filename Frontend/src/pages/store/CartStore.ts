import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeCartStore = {
    basket: CartItem[],
    notification: Notification,
    setItemInCart: (item: Product | undefined, selectedCount: number) => boolean,
    setNotification: (item: Notification) => void
    deleteItemFromCart: (item: Product | undefined) => void,
    clearState: () => void,
    updateQuantity: (itemId: string, quantity: number) => void,
    incrementQuantity: (item: Product, selectedCount: number) => void
}

type CartItem = {
    product: Product,
    quantity: number,
}

type Notification = {open: boolean, value: "success" | "error"}


const CartStore = create<TypeCartStore>()(
    persist(
        (set, get) => ({

            basket: [],
            notification: {open: false, value: "success"},

            setItemInCart(item, selectedCount){
                if(!item){
                    set({notification:{open: true, value: "error"}})
                    return false
                }

                const existingItem = get().basket.find(el => el.product.id === item.id);
                if (existingItem) {
                    get().incrementQuantity(item, selectedCount)
                    return true;
                }

                set((state) => ({
                    basket: [...state.basket, {product: item, quantity: selectedCount}],
                    notification: {open: true, value: "success"},
                }));

                return true
            },

            incrementQuantity(item, selectedCount){
                set((state) => ({
                    basket: state.basket.map(el =>
                        el.product.id === item.id
                        ? {
                            ...el,
                            quantity: el.quantity + selectedCount
                        }
                        : el
                    ),
                    notification: { open: true, value: "success" }
                }));
            },

            updateQuantity(productId, quantity) {
                set((state) => {
                    const newBasket = state.basket.map((item) => {
                        if (item.product.id === productId) {
                            return {
                                ...item,
                                quantity: quantity
                            };
                        }else{
                            return item;
                        }
                    });

                    return {
                        basket: newBasket
                    };
                });
            },

            setNotification(item){
                set(()=>{
                    return{notification: item}
                })
            },

            deleteItemFromCart(item){
                set((state) => {
                    if(!item) return {basket: [...state.basket]}
                    return{basket: state.basket.filter(el => el.product !== item)}
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