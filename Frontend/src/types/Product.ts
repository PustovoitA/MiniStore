export interface Product {
    id: string;
    name: string;
    type: "phone" | "smart-watches";
    price: number;
    count: number;
    status: "normal" | "sale" | "new";
    discount: number | null;
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