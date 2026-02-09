
import List from "./components/List"
import Toolbar from "./components/Toolbar"


const Header = () => {
    return(<header className="flex items-center justify-around py-3.5">
        <h1 className="font-[Jost] text-3xl">MiniStore<span className="text-(--blue-color)">.</span></h1>
        <div className="flex gap-25">
            <List/>
            <Toolbar/>
        </div>
    </header>)
}

export default Header