import { useLocation, useNavigate } from "react-router-dom";

const PageBuner = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const getPathName = location.pathname

    return(<div className="flex items-center justify-center w-full h-87.5 bg-(--grey-light-color)">
        <h1>{getPathName.slice(1)}</h1>
    </div>)
}

export default PageBuner