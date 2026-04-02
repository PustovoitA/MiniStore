import { create } from "zustand";
import { persist } from "zustand/middleware";



const ProductStore = create()(
    persist(
        (set, get) => ({
            products: [
                {
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    conunt: 5,
                    image: "##",
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
                    description: "sdlkfjskldfj",
                    reviews: [],
                }
            ],
        }),
        {
            name: "history-routes-storage"
        }

));

export default ProductStore;