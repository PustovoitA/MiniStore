import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TypeCheckoutState {
    isOpen: boolean
}


const CheckoutState = create<TypeCheckoutState>()(
    persist(
        (set, get) => ({
            isOpen: false
        }),
        {name: "checkout-store"}
    )
)