
import List from "./components/List"
import Toolbar from "./components/Toolbar"

import { Logo } from "@ui/Logo"


const Header = () => {
    return(<header className="flex items-center justify-around py-3.5 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <Logo/>
        <div className="flex gap-25">
            <List/>
            <Toolbar/>
        </div>
    </header>)
}

export default Header