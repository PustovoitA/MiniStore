import { scrolToTop } from "@/assets/scrolToTopFunction";

import { Button } from "@/ui/Button";

import CartStore from "@/pages/store/CartStore";

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";


const Total = () => {
    const navigation = useNavigate();
    const totals = CartStore((state) => state.totals)
    const calculateTotals = CartStore((state) => state.calculateTotals);

    const calculatedTotal = useMemo(() => {
        return calculateTotals();
    }, [totals])

    return (<>
        <div className="mt-10 md:mt-15">
            <h1 className="text-[24px] md:text-[30px]">CART TOTAL</h1>
            <hr className="text-[#c9bcbc] my-3.5" />
            <div className="flex items-center justify-between w-full sm:w-[60%] md:w-[40%] text-[16px] md:text-[18px]">
                <p className="underline">TOTAL</p>
                <p className="text-(--blue-color)">{`$${calculatedTotal.toFixed(2)}`}</p>
            </div>
            <hr className="text-[#c9bcbc] my-3.5" />

            <div className="flex flex-wrap items-center gap-4">
                <div onClick={()=>{
                        navigation("/Shop");
                        scrolToTop();
                    }} className="w-full sm:w-auto">
                    <Button bgColor="var(--black-block-color)" type="button" value="CONTINUE SHOPPING" />
                </div>
                <div className="w-full sm:w-auto">
                    <Button bgColor="var(--black-block-color)" type="button" value="PROCEED TO CHECKOUT" />
                </div>
            </div>
        </div>
    </>)
}
export default Total