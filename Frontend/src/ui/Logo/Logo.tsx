import { useNavigate } from "react-router-dom"

const Logo = () => {
    const navigation = useNavigate();
    return(<>
        <h1
        onClick={() => {navigation("/Home")}}
        className="font-[Jost] text-3xl sm:text-2xl md:text-3xl cursor-pointer">
            MiniStore
            <span className="text-(--blue-color)">.</span>
        </h1>
    </>)
}

export default Logo