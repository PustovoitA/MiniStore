
import BurgerMenu from "./components/BurgerMenu"
import List from "./components/List"
import Toolbar from "./components/Toolbar"

import { Logo } from "@ui/Logo"


const Header = () => {
    return(<header className="flex items-center justify-between px-3 sm:px-0 sm:justify-around py-3.5 shadow-[0_2px_4px_rgba(0,0,0,0.1)] relative">
        <Logo/>
        <div className="sm:flex sm:gap-10 md:gap-16 lg:gap-25 hidden">
            <List/>
            <Toolbar/>
        </div>
        <BurgerMenu/>
    </header>)
}

export default Header