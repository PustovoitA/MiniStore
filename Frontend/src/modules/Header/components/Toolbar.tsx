import { useLocation, useNavigate } from "react-router-dom"

const Toolbar = () =>{
    const navigate = useNavigate();

    const location = useLocation();

    return(<>
        <ul className="flex gap-4 unselectable">
            <li className={`${location.pathname === "/Search" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                <span className="material-symbols-outlined">search</span>
            </li>
            <li className={`${location.pathname === "/Account" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                <span className="material-symbols-outlined">person</span>
            </li>
            <li onClick={()=>navigate("Cart")} 
            className={`${location.pathname === "/Cart" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="flex items-center">(0)</span>
            </li>
        </ul>
    </>)
}

export default Toolbar