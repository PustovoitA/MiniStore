import CartStore from "@/pages/store/CartStore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

type Props = {
    closer?: () => void | undefined
}

const Toolbar = ({closer}: Props) =>{
    const navigate = useNavigate();
    const location = useLocation();

    const cartStore = CartStore((state) => state.basket);
    const [countProducts, setCountProducts] = useState(cartStore.length);

    useEffect(()=>{
        setCountProducts(cartStore.length);
    },[cartStore])

    return(<>
        <ul className="flex gap-4 unselectable">
            <li className={`${location.pathname === "/Search" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                <span className="material-symbols-outlined">search</span>
            </li>
            <li className={`${location.pathname === "/Account" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                <span className="material-symbols-outlined">person</span>
            </li>
            <li onClick={() => {
                navigate("Cart");
                if(closer){
                    closer()
                }
            }} 
            className={`${location.pathname === "/Cart" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="flex items-center">({countProducts})</span>
            </li>
        </ul>
    </>)
}

export default Toolbar