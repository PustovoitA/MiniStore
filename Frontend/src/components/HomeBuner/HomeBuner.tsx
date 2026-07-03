import { Button } from "@/ui/Button"
import { useNavigate } from "react-router-dom";

const HomeBuner = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center w-full h-auto lg:h-150 bg-(--grey-light-color) unselectable py-10 lg:py-0 px-4 sm:px-8 lg:px-12">
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1800px] gap-8 lg:gap-12 xl:gap-20 h-full">
                <div className="info font-[Jost] flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-9 text-center lg:text-left min-w-0 flex-1">
                    <span className="flex items-center gap-3 lg:gap-4 text-(--grey-text-color) text-[clamp(1.25rem,2vw,2.25rem)]">
                        <div className="h-0.5 w-8 lg:w-11 bg-(--grey-text-color) shrink-0"></div>
                        <span>10%</span>
                        <span>OFF</span>
                    </span>
                    <h1 className="whitespace-nowrap text-[clamp(2rem,6vw,6rem)] font-light leading-tight">
                        NEW YEAR SALE
                    </h1>
                    <div onClick={() => navigate("/Shop")}>
                        <Button value="SHOP SALE" bgColor="var(--black-block-color)" type="button" />
                    </div>
                </div>
                <div className="image relative overflow-hidden flex justify-center shrink-0">
                    <img
                        className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-auto lg:h-full lg:max-h-150 object-contain"
                        src="/IMG_0816.PNG"
                        alt="AppleWatch image"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomeBuner;