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
        const currentList = HistoryRoutes.getState().list;

        if(currentList.includes(getPathName)){
            deletePath(getPathName);
        }else{
            setPathInList(getPathName);
        }
    }, [getPathName]);

    return(<div className="flex flex-col gap-4 items-center justify-center w-full h-87.5 bg-(--grey-light-color) unselectable">
        <h1 className="font-[Jost] text-8xl font-light">{getPathName.slice(1).toUpperCase()}</h1>
        <ul className="flex gap-0,5">
            {list.map(el => <li className={`after:content-['>'] after:mx-2 last:after:content-[''] ${el === getPathName? "text-[#72AEC8] underline" : "text-black"} hover:text-[#72AEC8] cursor-pointer`} onClick={() => navigate(el)} key={el}>{el.slice(1)}</li>)}
        </ul>
    </div>)
}

export default PageBuner