import { Button } from "@/ui/Button"
import { useNavigate } from "react-router-dom"


const NotFoundPage = () => {
    const navigation = useNavigate();

    return(<div className="flex flex-col items-center justify-center w-full h-[400px] md:h-[700px]">
        <img className="w-[650px] h-[350px] md:h-[650px]" src="/notFoundImage.svg" alt="not found page" />
        <div onClick={() => {navigation("/Home")}}>
            <Button value="BACK TO HOME" bgColor="var(--black-block-color)" type="button"/>
        </div>
    </div>)
}

export default NotFoundPage