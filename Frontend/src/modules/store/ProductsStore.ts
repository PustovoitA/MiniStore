import { create } from "zustand";
import { persist } from "zustand/middleware";


interface TypeProductsStore {
    products: Product[];
}

interface Product {
    name: string;
    type: string;
    price: 300;
    count: 5;
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
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    count: 5,
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
                    description: "sdlkfjskldfj",
                    reviews: [],
                },

                {
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    count: 5,
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
                    description: "sdlkfjskldfj",
                    reviews: [],
                },

                {
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    count: 5,
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
                    description: "sdlkfjskldfj",
                    reviews: [],
                },

                {
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    count: 5,
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
                    description: "sdlkfjskldfj",
                    reviews: [],
                },

                {
                    name: "iphone 13",
                    type: "phone",
                    price: 300,
                    count: 5,
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