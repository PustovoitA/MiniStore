import HistoryRoutes from "@/pages/store/PagesStore";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PageBuner = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const pathname = location.pathname;

    const list = HistoryRoutes((state) => state.list);
    const setPathInList = HistoryRoutes((state) => state.setPathInList);
    const deletePath = HistoryRoutes((state) => state.deletePath);

    useEffect(()=>{
        const currentList = HistoryRoutes.getState().list;

        if(currentList.includes(pathname)){
            deletePath(pathname);
        }else{
            setPathInList(pathname);
        }
    }, [pathname]);

    return (
        <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full min-h-50 sm:h-87.5 py-6 sm:py-0 px-4 bg-(--grey-light-color) unselectable">
            <h1 className="font-[Jost] text-5xl sm:text-8xl md:text-8xl lg:text-8xl font-light text-center wrap-break-words">
            {pathname.slice(1).toUpperCase()}
            </h1>
            <ul className="flex flex-wrap gap-1 justify-center">
            {list.map(el => (
                <li
                className={`text-sm sm:text-base after:content-['>'] after:mx-2 last:after:content-[''] ${
                    el === pathname ? "text-[#72AEC8] underline" : "text-(--grey-text-color)"
                } hover:text-[#72AEC8] cursor-pointer`}
                onClick={() => navigate(el)}
                key={el}
                >
                {el.slice(1)}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default PageBuner