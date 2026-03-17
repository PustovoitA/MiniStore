import HistoryRoutes from "@/pages/store/PagesStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PageBuner = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const getPathName = location.pathname;

    const list = HistoryRoutes((state) => state.list);
    const setPathInList = HistoryRoutes((state) => state.setPathInList);
    const deletePath = HistoryRoutes((state) => state.deletePath);

    useEffect(()=>{
        if(list.includes(getPathName)){
            deletePath(getPathName);
        }else{
            setPathInList(getPathName);
        }
    }, [getPathName]);

    return(<div className="flex flex-col items-center justify-center w-full h-87.5 bg-(--grey-light-color) unselectable">
        <h1 className="font-[Jost] text-8xl font-light">{getPathName.slice(1).toUpperCase()}</h1>
        {list.map(el => <li onClick={() => navigate(el)} key={list.indexOf(el)}>{el}</li>)}
    </div>)
}

export default PageBuner