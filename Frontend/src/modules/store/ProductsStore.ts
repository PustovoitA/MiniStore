import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface TypeProductsStore {
    products: Product[];
}

export interface Product {
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
                // ===== iPhone (5) =====
                {
                    productId: "IP1",
                    name: "iPhone XS",
                    type: "phone",
                    price: 150,
                    count: 8,
                    status: "normal",
                    image: "/productsImg/ip4.webp",
                    colors: [
                        { color: "Midnight", code: "#1C1C1E", availability: true },
                        { color: "Starlight", code: "#F2F2F7", availability: true }
                    ],
                    description: "Reliable everyday iPhone",
                    reviews: [],
                },
                {
                    productId: "IP2",
                    name: "iPhone 13 Pro",
                    type: "phone",
                    price: 700,
                    count: 5,
                    status: "sale",
                    image: "/productsImg/ip4.webp",
                    colors: [
                        { color: "Graphite", code: "#2C2C2E", availability: true }
                    ],
                    description: "Pro performance",
                    reviews: [],
                },
                {
                    productId: "IP3",
                    name: "iPhone 14",
                    type: "phone",
                    price: 750,
                    count: 6,
                    status: "new",
                    image: "/productsImg/ip4.webp",
                    colors: [
                        { color: "Blue", code: "#3C7EE4", availability: true }
                    ],
                    description: "Modern design",
                    reviews: [],
                },
                {
                    productId: "IP4",
                    name: "iPhone 14 Pro",
                    type: "phone",
                    price: 900,
                    count: 4,
                    status: "new",
                    image: "/productsImg/ip4.webp",
                    colors: [
                        { color: "Deep Purple", code: "#5E5CE6", availability: true }
                    ],
                    description: "Dynamic Island",
                    reviews: [],
                },
                {
                    productId: "IP5",
                    name: "iPhone 12",
                    type: "phone",
                    price: 400,
                    count: 10,
                    status: "sale",
                    image: "/productsImg/ip4.webp",
                    colors: [
                        { color: "Red", code: "#FF3B30", availability: true }
                    ],
                    description: "Budget iPhone",
                    reviews: [],
                },

                // ===== Apple Watch (5) =====
                {
                    productId: "AW1",
                    name: "Apple Watch Series 8",
                    type: "smart-watches",
                    price: 500,
                    count: 6,
                    status: "new",
                    image: "/productsImg/aw2.webp",
                    colors: [{ color: "Midnight", code: "#1C1C1E", availability: true }],
                    description: "Advanced health tracking",
                    reviews: [],
                },
                {
                    productId: "AW2",
                    name: "Apple Watch SE",
                    type: "smart-watches",
                    price: 300,
                    count: 10,
                    status: "normal",
                    image: "/productsImg/aw2.webp",
                    colors: [{ color: "Silver", code: "#C7C7CC", availability: true }],
                    description: "Affordable Apple Watch",
                    reviews: [],
                },
                {
                    productId: "AW3",
                    name: "Apple Watch Ultra",
                    type: "smart-watches",
                    price: 900,
                    count: 2,
                    status: "new",
                    image: "/productsImg/aw2.webp",
                    colors: [{ color: "Titanium", code: "#8E8E93", availability: true }],
                    description: "Extreme sports watch",
                    reviews: [],
                },
                {
                    productId: "AW4",
                    name: "Apple Watch Series 7",
                    type: "smart-watches",
                    price: 420,
                    count: 7,
                    status: "sale",
                    image: "/productsImg/aw2.webp",
                    colors: [{ color: "Blue", code: "#007AFF", availability: true }],
                    description: "Large display",
                    reviews: [],
                },
                {
                    productId: "AW5",
                    name: "Apple Watch Series 6",
                    type: "smart-watches",
                    price: 350,
                    count: 9,
                    status: "normal",
                    image: "/productsImg/aw2.webp",
                    colors: [{ color: "Red", code: "#FF3B30", availability: true }],
                    description: "Classic model",
                    reviews: [],
                },
            ]
        }),
        {
            name: "history-routes-storage"
        }

));

export default ProductStore;