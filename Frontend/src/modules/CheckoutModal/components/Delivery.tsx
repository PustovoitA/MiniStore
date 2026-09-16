import { useState } from "react"

type deliveryOptionType = "In-store pickup" | "Nova Poshta" | "Ukrposhta"

const Delivery = () => {
    const [deliveryOption, setDeliveryOption] = useState<deliveryOptionType>("In-store pickup")
    
    return(<>
        <div
        style={{boxShadow: "0 0 10px 0 rgb(0 0 0 / 0.2)"}}
        className="flex flex-col items-start gap-4 w-full p-10 box-border rounded-2xl">
            <h1 className="text-[25px]">Delivery</h1>
            <ul className="flex items-center gap-2.5">
                <li
                onClick={() => { setDeliveryOption("In-store pickup") }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px] ">
                    <span
                    className={`${deliveryOption === "In-store pickup" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>In-store pickup</span>
                    <span className="text-(--grey-text-color) text-[14px]">payment upon receipt</span>
                </li>
                <li
                onClick={() => { setDeliveryOption("Nova Poshta") }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span 
                    className={`${deliveryOption === "Nova Poshta" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>Nova Poshta</span>
                    <span className="text-(--grey-text-color) text-[14px]">extensive network</span>
                </li>
                <li
                onClick={() => { setDeliveryOption("Ukrposhta") }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span
                    className={`${deliveryOption === "Ukrposhta" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>Ukrposhta</span>
                    <span className="text-(--grey-text-color) text-[14px]">affordable terms</span>
                </li>
            </ul>
        </div>
    </>)
}
export default Delivery