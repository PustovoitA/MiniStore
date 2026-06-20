import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeCartStore = {
    basket: CartItem[],
    notification: Notification,
    totals: Totals[],
    setItemInCart: (item: Product | undefined, selectedCount: number) => boolean,
    setNotification: (item: Notification) => void
    deleteItemFromCart: (item: Product | undefined) => void,
    clearState: () => void,
    updateQuantity: (itemId: string, quantity: number) => void,
    incrementQuantity: (item: Product, selectedCount: number) => void,
    updateTotals: (item: Totals) => void,
    calculateTotals: () => number,
}

type CartItem = {
    product: Product,
    quantity: number,
}

type Notification = {open: boolean, value: "success" | "error"}
type Totals = {itemId: string, price: number}


const CartStore = create<TypeCartStore>()(
    persist(
        (set, get) => ({

            basket: [],
            notification: {open: false, value: "success"},
            totals: [],

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
                            quantity: el.quantity + selectedCount > item.count ? item.count : el.quantity + selectedCount
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
                                quantity: quantity > item.product.count ? item.product.count : quantity
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

            updateTotals(item){
                const existingItem = get().totals.find(el => el.itemId === item.itemId);
                set((state) => {
                    if(existingItem){
                        const newTotals = state.totals.map(el => {
                            if(el.itemId === item.itemId){
                                return{
                                    ...el,
                                    price: item.price
                                }
                            }else{
                                return el
                            }
                        })

                        return{totals: newTotals}
                    }else{
                        return{totals: [...state.totals, {itemId: item.itemId, price: item.price}]}
                    }
                });
            },

            calculateTotals(){
                const curTotals = get().totals;
                const newArr = curTotals.map(el => el.price);
                return newArr.reduce((el, temp) => el + temp, 0)
            },

            deleteItemFromCart(item){
                set((state) => {
                    if(!item) return {basket: [...state.basket]}
                    return{
                        basket: state.basket.filter(el => el.product !== item),
                        totals: state.totals.filter(el => el.itemId !== item.id),
                    }
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