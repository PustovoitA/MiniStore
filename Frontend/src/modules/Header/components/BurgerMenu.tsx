import { blockScroling, unblockScroling } from "@/assets/blockScroling";
import { useState } from "react"
import List from "./List";
import Toolbar from "./Toolbar";


const BurgerMenu = () => {
    const [menuIsOpen, setMenuValue] = useState(false)

    const openMenu = () => {
        setMenuValue(true);
        blockScroling();
    }
    const closeMenu = () => {
        setMenuValue(false);
        unblockScroling();
    }

    return (<div className="flex items-center justify-center sm:hidden">
        <span onClick={() => openMenu()} className="material-symbols-outlined cursor-pointer">menu</span>

        <div
            className={`w-full h-full fixed z-20 top-0 right-0 bg-[#00000074] backdrop-blur-md transition-opacity duration-300 ${
                menuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => closeMenu()}
        >

            <div onClick={() => closeMenu()} className="bg-[#fff0] h-full w-[50%] absolute left-0 top-0"></div>
            <div
                className={`flex items-start justify-center bg-[#fff] h-full w-[50%] absolute right-0 top-0 rounded-tl-2xl rounded-bl-2xl transition-transform duration-300 ease-in-out ${
                    menuIsOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <span onClick={() => closeMenu()} className="material-symbols-outlined cursor-pointer absolute top-2 left-2">close</span>
                <div className="flex flex-col items-center gap-4.5 mt-15">
                    <Toolbar closer={closeMenu} />
                    <List closer={closeMenu} />
                </div>
            </div>
        </div>
    </div>)
}

export default BurgerMenu