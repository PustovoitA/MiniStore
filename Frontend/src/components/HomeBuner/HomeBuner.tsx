import { Button } from "@/ui/Button"
import { useNavigate } from "react-router-dom"

const HomeBuner = () => {
    const navigate = useNavigate();

    return(<div className="w-full h-150 bg-(--grey-light-color) unselectable">
        <section className="slide flex items-center justify-around h-full">
            <div className="info flex flex-col justify-center items-start gap-9">
                <h1 className="w-200 text-8xl font-[Jost] font-light">YOUR PRODUCTS ARE GREAT.</h1>
                <div onClick={() => navigate("/Shop")}>
                    <Button value="SHOP PRODUCT" bgColor="var(--black-block-color)" type="button" />
                </div>
            </div>
            <div className="image h-full relative overflow-hidden">
                <img className="w-80 h-150 relative top-15" src="/IMG_9015.PNG" alt="AppleWatch image" />
            </div>
        </section>
    </div>)
}

export default HomeBuner