
import List from "./components/List"
import Toolbar from "./components/Toolbar"


const Header = () => {
    return(<div className="flex items-center justify-around py-1.5">
        <h1 className="font-[Jost] text-3xl">MiniStore<span className="text-(--blue-color)">.</span></h1>
        <div>
            <List/>
            <Toolbar/>
        </div>
    </div>)
}

export default Header