import { useLocation, useNavigate } from "react-router-dom"


const List = () =>{
    const navigate = useNavigate();

    const location = useLocation();

    return(<>
        <ul className="flex gap-12 font-[Jost] text-black">
            <li
            onClick={() => navigate("/")} 
            className={`${location.pathname === "/" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>HOME</li>
            <li
            className={`${location.pathname === "/Pages" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>
                PAGES
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li 
            onClick={() => navigate("About")} 
            className={`${location.pathname === "/About" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>ABOUT</li>
            <li
            onClick={() => navigate("Blog")} 
            className={`${location.pathname === "/Blog" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>BLOGS</li>
            <li
            onClick={() => navigate("Contact")} 
            className={`${location.pathname === "/Contact" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>CONTACT</li>
        </ul>
    </>)
}

export default List