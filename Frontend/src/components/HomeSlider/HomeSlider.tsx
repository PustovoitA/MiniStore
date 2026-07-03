import { Button } from "@/ui/Button"
import { useNavigate } from "react-router-dom"

const HomeSlider = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-auto md:h-[500px] lg:h-150 bg-(--grey-light-color) unselectable">
            <section className="slide flex flex-col md:flex-row items-center justify-around h-full gap-8 md:gap-4 py-10 md:py-0 px-4 md:px-0">
                <div className="info flex flex-col justify-center items-center md:items-start gap-5 md:gap-9 text-center md:text-left order-2 md:order-1">
                    <h1 className="w-full max-w-[90%] sm:max-w-md md:max-w-[900px] lg:w-200 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-[Jost] font-light leading-tight">
                        YOUR PRODUCTS ARE GREAT.
                    </h1>
                    <div onClick={() => navigate("/Shop")}>
                        <Button value="SHOP PRODUCT" bgColor="var(--black-block-color)" type="button" />
                    </div>
                </div>
                <div className="image w-full md:w-auto h-64 sm:h-80 md:h-full relative overflow-hidden order-1 md:order-2 flex justify-center">
                    <img
                        className="w-40 sm:w-56 md:w-64 lg:w-80 h-auto md:h-150 relative top-0 md:top-15 object-contain"
                        src="/IMG_9015.PNG"
                        alt="AppleWatch image"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomeSlider;