import { useLocation, useNavigate } from "react-router-dom";

const PageBuner = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const getPathName = location.pathname

    return(<div className="flex items-center justify-center w-full h-87.5 bg-(--grey-light-color) unselectable">
        <h1 className="font-[Jost] text-8xl font-light">{getPathName.slice(1).toUpperCase()}</h1>
    </div>)
}

export default PageBuner