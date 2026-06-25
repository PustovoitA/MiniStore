import type { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";

export type ProductsResponse = {
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: Product[];
};

const getPhonesOrWatches = async (type:string, page:number, limit:number): Promise<ProductsResponse> => {
    const response = await fetch(`capable-exploration-production-3154.up.railway.app/products?type=${type}&_page=${page}&_limit=${limit}`);
    if(!response.ok){
        throw new Error(`Something not ok with response: ${response.status}`);
    }
    return response.json();
}

export const usePhonesOrWatches = (type:string, page:number, limit:number) => {
    return useQuery({
        queryKey:["products", type, page],
        queryFn: () => getPhonesOrWatches(type, page, limit),
        placeholderData: (previousData) => previousData,
    })
}