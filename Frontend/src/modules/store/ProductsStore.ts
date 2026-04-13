import { create } from "zustand";
import { persist } from "zustand/middleware";


interface TypeProductsStore {
    products: Product[];
}

interface Product {
    productId: string;
    name: string;
    type: "phone" | "smart-watches";
    price: number;
    count: number;
    status: "normal" | "sale" | "new";
    image: string;
    colors: Colors[];
    description: string;
    reviews: [];
}

interface Colors {
    color: string;
    code: string;
    availability: boolean;
}


const ProductStore = create<TypeProductsStore>()(
    persist(
        (set, get) => ({
            products: [
                {
                    productId: "A12bgk800J",
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    count: 5,
                    status: "normal",
                    image: "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg",
                    colors: [
                        {
                            color: "Midnight",
                            code: "#1C1C1E",
                            availability: true,
                        },
                        {
                            color: "Starlight",
                            code: "#F2F2F7",
                            availability: true,
                        },
                        {
                            color: "Blue",
                            code: "#3C7EE4",
                            availability: true,
                        },
                        {
                            color: "Pink",
                            code: "#F4A8B8",
                            availability: true,
                        }
                    ],
                    description: "good phone",
                    reviews: [],
                },

                {
                    productId: "K543ubmf90O",
                    name: "pink watches",
                    type: "smart-watches",
                    price: 870,
                    count: 2,
                    status: "sale",
                    image: "https://images.pexels.com/photos/31406903/pexels-photo-31406903.jpeg",
                    colors: [
                        {
                            color: "Pink",
                            code: "#F4A8B8",
                            availability: true,
                        }
                    ],
                    description: "good watches",
                    reviews: [],
                },
            ],
        }),
        {
            name: "history-routes-storage"
        }

));

export default ProductStore;