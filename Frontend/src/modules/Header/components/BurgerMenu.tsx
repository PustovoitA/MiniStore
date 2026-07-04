import { blockScroling, unblockScroling } from "@/assets/blockScroling";
import { useState } from "react"


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
            <div
                className={`bg-[#fff] h-full w-[50%] absolute right-0 top-0 rounded-tl-2xl rounded-bl-2xl transition-transform duration-300 ease-in-out ${
                    menuIsOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <span onClick={() => closeMenu()} className="material-symbols-outlined cursor-pointer absolute top-2 left-2">close</span>
            </div>
        </div>
    </div>)
}

export default BurgerMenu