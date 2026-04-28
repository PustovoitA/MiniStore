import { Button } from "@/ui/Button"
import { useNavigate } from "react-router-dom";

const HomeBuner = () => {
    const navigate = useNavigate();

    return(<div className="flex items-center justify-end w-full h-150 bg-(--grey-light-color) unselectable">
        <section className="flex items-center gap-30 h-full">
            <div className="info font-[Jost] flex flex-col justify-center items-start gap-9">
                <span className=" flex items-center gap-4 text-(--grey-text-color) text-4xl">
                    <div className="h-0.5 w-11 bg-(--grey-text-color)"></div>
                    <span>10%</span>
                    <span>OFF</span>
                </span>
                <h1 className="w-200 text-8xl font-light">NEW YEAR SALE</h1>
                <div onClick={() => navigate("/Shop")}>
                    <Button value="SHOP SALE" bgColor="var(--black-block-color)" type="button" />
                </div>
            </div>
            <div className="image h-full relative overflow-hidden">
                <img className="" src="/IMG_0816.PNG" alt="AppleWatch image" />
            </div>
        </section>
    </div>)
}

export default HomeBuner