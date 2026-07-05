import { useLocation, useNavigate } from "react-router-dom"

type Props = {
    closer?: () => void | undefined
}

const List = ({closer}: Props) =>{
    const navigate = useNavigate();

    const location = useLocation();

    return(<>
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 font-[Jost] text-black sm:text-[14px] md:text-[16px] unselectable">
            <li
            onClick={() => {
                navigate("Home");
                if(closer){
                    closer();
                }
            }}
            className={`${location.pathname === "/Home" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>HOME</li>
            <li
            onClick={() => {
                navigate("Shop");
                if(closer){
                    closer();
                }
            }} 
            className={`${location.pathname === "/Shop" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>SHOP</li>
            <li 
            onClick={() => {
                navigate("About");
                if(closer){
                    closer()
                }
            }} 
            className={`${location.pathname === "/About" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>ABOUT</li>
            <li
            onClick={() => {
                navigate("Blog");
                if(closer){
                    closer()
                }
            }} 
            className={`${location.pathname === "/Blog" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>BLOGS</li>
            <li
            onClick={() => {
                navigate("Contact");
                if(closer){
                    closer()
                }
            }} 
            className={`${location.pathname === "/Contact" ? "text-[#72AEC8]" : "text-black"} flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest`}>CONTACT</li>
        </ul>
    </>)
}

export default List