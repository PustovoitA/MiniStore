import type { Product } from "@/types/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TypeCartStore = {
    basket: Product[],
    setItemInCart: () => void,
    deleteItemFromCart: () => void,
    changeCountOfItem: () => void
}


const CartStore = create<TypeCartStore>()(
    persist(
        (set, get) => ({

            basket: [],

            setItemInCart(){},

            deleteItemFromCart(){},

            changeCountOfItem(){},
        }),
        {name: "history-routes-storage"}
    )
)

export default CartStore