import InStoreInterface from "./DeliveryInterfaces/InStoreInterface"
import NovaInterface from "./DeliveryInterfaces/NovaInterface"
import UkrposhtaInterface from "./DeliveryInterfaces/UkrposhtaInterface"

import { useState } from "react"

type deliveryOptionType = "In-store pickup" | "Nova Poshta" | "Ukrposhta"

const Delivery = () => {
    const [deliveryOption, setDeliveryOption] = useState<deliveryOptionType>("In-store pickup");
    const [loading, setLoading] = useState(false)

    const optionObj = {
        "In-store pickup": <InStoreInterface/>,
        "Nova Poshta": <NovaInterface/>,
        "Ukrposhta": <UkrposhtaInterface/>
    }

    const delayLoading = (delay:number) => {
        let timer:any;

        return () => {
            clearTimeout(timer);
            setLoading(true);
            timer = setTimeout(() => {
                setLoading(false);
            }, delay)
        }
    }
    const delay = delayLoading(3000)
    
    return(<>
        <div
        style={{boxShadow: "0 0 10px 0 rgb(0 0 0 / 0.2)"}}
        className="flex flex-col items-start gap-4 w-full p-10 box-border rounded-2xl">
            <h1 className="text-[25px]">Delivery</h1>
            <div className="flex items-center gap-2.5">
                <button
                disabled={loading === true}
                onClick={() => { setDeliveryOption("In-store pickup"); delay() }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px] ">
                    <span
                    className={`${deliveryOption === "In-store pickup" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>In-store pickup</span>
                    <span className="text-(--grey-text-color) text-[14px]">payment upon receipt</span>
                </button>
                <button
                disabled={loading === true}
                onClick={() => { setDeliveryOption("Nova Poshta"); delay() }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span 
                    className={`${deliveryOption === "Nova Poshta" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>Nova Poshta</span>
                    <span className="text-(--grey-text-color) text-[14px]">extensive network</span>
                </button>
                <button
                disabled={loading === true}
                onClick={() => { setDeliveryOption("Ukrposhta"); delay() }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span
                    className={`${deliveryOption === "Ukrposhta" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>Ukrposhta</span>
                    <span className="text-(--grey-text-color) text-[14px]">affordable terms</span>
                </button>
            </div>

            <div className="bg-(--grey-light-color) w-full h-0.5"></div>

            {loading
            ? <div className="flex justify-center items-center">
                <div className="spinner"></div>
              </div>
            : optionObj[deliveryOption]
            }

        </div>
    </>)
}
export default Delivery