import { useMutation } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_API_URL;

const buyProducts = async (quantity: number, id: string) => {
    const res = await fetch(`${BASE_URL}/product/${id}/purchase`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quantity}),
    });

    if(!res.ok) throw new Error(`Purchase failed: ${res.status}`);

    return res.json();
}

export const useBuyProduct = (quantity: number, id: string) => {
    return useMutation({
        mutationFn: () => buyProducts(quantity, id)
    })
}