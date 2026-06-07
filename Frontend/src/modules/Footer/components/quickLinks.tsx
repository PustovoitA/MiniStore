import { scrolToTop } from "@/assets/scrolToTopFunction"
import { Link } from "react-router-dom"

const QuickLinks = () => {


    return (<div className="flex flex-col gap-2">
        <h1 className="font-[Jost] text-xl tracking-wider">QUICK LINKS</h1>

        <ul className="flex flex-col gap-1 font-[Jost]">
            <li onClick={() => scrolToTop()} className="hover:text-(--blue-color) transition-colors">
                <Link className="text-[15px] tracking-widest" to="/Home">HOME</Link>
            </li>
            <li onClick={() => scrolToTop()} className="hover:text-(--blue-color) transition-colors">
                <Link className="text-[15px] tracking-widest" to="/About">ABOUT</Link>
            </li>
            <li onClick={() => scrolToTop()} className="hover:text-(--blue-color) transition-colors">
                <Link className="text-[15px] tracking-widest" to="/Shop">SHOP</Link>
            </li>
            <li onClick={() => scrolToTop()} className="hover:text-(--blue-color) transition-colors">
                <Link className="text-[15px] tracking-widest" to="/Blog">BLOGS</Link>
            </li>
            <li onClick={() => scrolToTop()} className="hover:text-(--blue-color) transition-colors">
                <Link className="text-[15px] tracking-widest" to="/Contact">CONTACT</Link>
            </li>
        </ul>
    </div>)
}

export default QuickLinks