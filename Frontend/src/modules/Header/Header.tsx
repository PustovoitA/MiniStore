
import List from "./components/List"
import Toolbar from "./components/Toolbar"


const Header = () => {
    return(<div>
        <h1 className="font-[Jost] text-3xl">MiniStore<span className="text-(--blue-color)">.</span></h1>
        <div>
            <List/>
            <Toolbar/>
        </div>
    </div>)
}

export default Header