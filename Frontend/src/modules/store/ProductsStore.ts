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
    size?: Size[];
    description: string;
    reviews: [];
}

interface Colors {
    color: string;
    code: string;
    availability: boolean;
}

interface Size {
    size: "XL" | "L" | "M" | "S";
    availability: boolean;
}


const ProductStore = create<TypeProductsStore>()(
    persist(
        (set, get) => ({
            products: [
                // ===== iPhone =====
                {
                    productId: "IP1",
                    name: "iPhone XS",
                    type: "phone",
                    price: 150,
                    count: 8,
                    status: "normal",
                    image: "/productsImg/ip1.jpg",
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
                    image: "/productsImg/ip2.webp",
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
                    image: "/productsImg/ip3.jpg",
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
                    image: "/productsImg/ip5.jpg",
                    colors: [
                        { color: "Red", code: "#FF3B30", availability: true }
                    ],
                    description: "Budget iPhone",
                    reviews: [],
                },
                {
                    productId: "IP6",
                    name: "iPhone 11",
                    type: "phone",
                    price: 199,
                    count: 25,
                    status: "sale",
                    image: "/productsImg/ip6.webp",
                    colors: [
                        { color: "Deep Purple", code: "#5E5CE6", availability: true }
                    ],
                    description: "Classic iPhone",
                    reviews: [],
                },
                {
                    productId: "IP7",
                    name: "iPhone XR",
                    type: "phone",
                    price: 180,
                    count: 12,
                    status: "normal",
                    image: "/productsImg/ip7.jpg",
                    colors: [{ color: "Coral", code: "#FF6F61", availability: true }],
                    description: "Colorful iPhone",
                    reviews: [],
                },
                {
                    productId: "IP8",
                    name: "iPhone 13",
                    type: "phone",
                    price: 650,
                    count: 7,
                    status: "normal",
                    image: "/productsImg/ip8.webp",
                    colors: [{ color: "Pink", code: "#FF2D55", availability: true }],
                    description: "Balanced performance",
                    reviews: [],
                },
                {
                    productId: "IP9",
                    name: "iPhone 15",
                    type: "phone",
                    price: 950,
                    count: 5,
                    status: "new",
                    image: "/productsImg/ip9.webp",
                    colors: [{ color: "Green", code: "#34C759", availability: true }],
                    description: "Latest generation",
                    reviews: [],
                },
                {
                    productId: "IP10",
                    name: "iPhone 15 Pro",
                    type: "phone",
                    price: 1200,
                    count: 3,
                    status: "new",
                    image: "/productsImg/ip10.jpg",
                    colors: [{ color: "Titanium Blue", code: "#4A90E2", availability: true }],
                    description: "Pro flagship",
                    reviews: [],
                },
                {
                    productId: "IP11",
                    name: "iPhone SE 2022",
                    type: "phone",
                    price: 300,
                    count: 15,
                    status: "sale",
                    image: "/productsImg/ip11.jpg",
                    colors: [{ color: "Black", code: "#000000", availability: true }],
                    description: "Compact iPhone",
                    reviews: [],
                },
                {
                    productId: "IP12",
                    name: "iPhone 12 Pro",
                    type: "phone",
                    price: 500,
                    count: 6,
                    status: "normal",
                    image: "/productsImg/ip12.webp",
                    colors: [{ color: "Gold", code: "#D4AF37", availability: true }],
                    description: "Premium design",
                    reviews: [],
                },
                {
                    productId: "IP13",
                    name: "iPhone 11 Pro",
                    type: "phone",
                    price: 350,
                    count: 8,
                    status: "sale",
                    image: "/productsImg/ip13.webp",
                    colors: [{ color: "Midnight Green", code: "#4E5851", availability: true }],
                    description: "Triple camera",
                    reviews: [],
                },
                {
                    productId: "IP14",
                    name: "iPhone XS Max",
                    type: "phone",
                    price: 250,
                    count: 9,
                    status: "normal",
                    image: "/productsImg/ip14.jpg",
                    colors: [{ color: "Silver", code: "#C0C0C0", availability: true }],
                    description: "Large OLED display",
                    reviews: [],
                },
                {
                    productId: "IP15",
                    name: "iPhone 14 Plus",
                    type: "phone",
                    price: 800,
                    count: 4,
                    status: "new",
                    image: "/productsImg/ip15.png",
                    colors: [{ color: "Yellow", code: "#FFD60A", availability: true }],
                    description: "Big battery",
                    reviews: [],
                },

                // ===== Apple Watch =====
                {
                    productId: "AW1",
                    name: "Apple Watch Series 8",
                    type: "smart-watches",
                    price: 500,
                    count: 6,
                    status: "new",
                    image: "/productsImg/aw1.jpg",
                    colors: [{ color: "Midnight", code: "#1C1C1E", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
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
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
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
                    image: "/productsImg/aw3.jpg",
                    colors: [{ color: "Titanium", code: "#8E8E93", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
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
                    image: "/productsImg/aw4.jpg",
                    colors: [{ color: "Blue", code: "#007AFF", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
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
                    image: "/productsImg/aw5.webp",
                    colors: [{ color: "Red", code: "#FF3B30", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Classic model",
                    reviews: [],
                },
                {
                    productId: "AW6",
                    name: "Apple Watch Series 9",
                    type: "smart-watches",
                    price: 550,
                    count: 5,
                    status: "new",
                    image: "/productsImg/aw6.avif",
                    colors: [{ color: "Midnight", code: "#1C1C1E", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Latest Apple Watch",
                    reviews: [],
                },
                {
                    productId: "AW7",
                    name: "Apple Watch Series 5",
                    type: "smart-watches",
                    price: 250,
                    count: 8,
                    status: "sale",
                    image: "/productsImg/aw7.webp",
                    colors: [{ color: "Space Gray", code: "#2F2F2F", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Older but reliable",
                    reviews: [],
                },
                {
                    productId: "AW8",
                    name: "Apple Watch Series 4",
                    type: "smart-watches",
                    price: 200,
                    count: 6,
                    status: "sale",
                    image: "/productsImg/aw8.jpg",
                    colors: [{ color: "Silver", code: "#C7C7CC", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Entry-level watch",
                    reviews: [],
                },
                {
                    productId: "AW9",
                    name: "Apple Watch Ultra 2",
                    type: "smart-watches",
                    price: 1000,
                    count: 3,
                    status: "new",
                    image: "/productsImg/aw9.webp",
                    colors: [{ color: "Titanium", code: "#8E8E93", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Extreme performance",
                    reviews: [],
                },
                {
                    productId: "AW10",
                    name: "Apple Watch Nike",
                    type: "smart-watches",
                    price: 450,
                    count: 7,
                    status: "normal",
                    image: "/productsImg/aw10.jpg",
                    colors: [{ color: "Black/Volt", code: "#32D74B", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Sport edition",
                    reviews: [],
                },
                {
                    productId: "AW11",
                    name: "Apple Watch Hermes",
                    type: "smart-watches",
                    price: 1300,
                    count: 2,
                    status: "new",
                    image: "/productsImg/aw11.webp",
                    colors: [{ color: "Orange", code: "#FF9500", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Luxury edition",
                    reviews: [],
                },
                {
                    productId: "AW12",
                    name: "Apple Watch SE 2",
                    type: "smart-watches",
                    price: 320,
                    count: 11,
                    status: "normal",
                    image: "/productsImg/aw12.webp",
                    colors: [{ color: "Starlight", code: "#F2F2F7", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Budget modern watch",
                    reviews: [],
                },
                {
                    productId: "AW13",
                    name: "Apple Watch Series 3",
                    type: "smart-watches",
                    price: 150,
                    count: 14,
                    status: "sale",
                    image: "/productsImg/aw13.jpg",
                    colors: [{ color: "White", code: "#FFFFFF", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Very affordable",
                    reviews: [],
                },
                {
                    productId: "AW14",
                    name: "Apple Watch Edition",
                    type: "smart-watches",
                    price: 1400,
                    count: 1,
                    status: "new",
                    image: "/productsImg/aw14.webp",
                    colors: [{ color: "Ceramic", code: "#F5F5F5", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Exclusive model",
                    reviews: [],
                },
                {
                    productId: "AW15",
                    name: "Apple Watch Series 2",
                    type: "smart-watches",
                    price: 120,
                    count: 10,
                    status: "sale",
                    image: "/productsImg/aw15.webp",
                    colors: [{ color: "Aluminum", code: "#D1D1D6", availability: true }],
                    size: [
                        {size: "XL", availability: true},
                        {size: "L", availability: true},
                        {size: "M", availability: true},
                        {size: "S", availability: true}
                    ],
                    description: "Basic functionality",
                    reviews: [],
                },
            ]
        }),
        {
            name: "history-routes-storage"
        }

));

export default ProductStore;