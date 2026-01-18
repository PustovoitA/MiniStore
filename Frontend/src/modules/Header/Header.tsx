
import List from "./components/List"
import Toolbar from "./components/Toolbar"


const Header = () => {
    return(<div>
        <h1>MiniStore<span>.</span></h1>
        <div>
            <List/>
            <Toolbar/>
        </div>
    </div>)
}

export default Header