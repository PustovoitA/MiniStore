import { useDelayLoadng } from "@/hooks/useDelayLoaidng";
import { useState } from "react";

import CardPayment from "./PaymentInterface/CardPayment";
import PaymentUponReceipt from "./PaymentInterface/PaymentUponReceipt";

type paymentOptionType = "Payment upon receipt" | "Card payment"

const Payment = () => {
    const [paymentOption, setPaymentOption] = useState<paymentOptionType>("Payment upon receipt");
    const [loading, setLoading] = useState(false);
    const delay = useDelayLoadng(setLoading, 3000);

    const optionObj = {
        "Payment upon receipt": <PaymentUponReceipt/>,
        "Card payment": <CardPayment/>,
    }

    return(<>
        <div
        style={{boxShadow: "0 0 10px 0 rgb(0 0 0 / 0.2)"}}
        className="flex flex-col items-start gap-4 w-full p-10 box-border rounded-2xl">
            <h1 className="text-[25px]">Payment</h1>
            <div className="flex items-center gap-2.5">
                <button
                disabled={loading === true}
                onClick={() => { setPaymentOption("Payment upon receipt"); delay() }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-3.75 py-1.25 ">
                    <span
                    className={`${paymentOption === "Payment upon receipt" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>
                        Payment upon receipt
                    </span>
                </button>

                <button
                disabled={loading === true}
                onClick={() => { setPaymentOption("Card payment"); delay() }}
                className="group flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-3.75 py-1.25">
                    <span 
                    className={`${paymentOption === "Card payment" ? "text-(--blue-color)" : "text-black"} group-hover:text-(--blue-color) text-[20px] transition-colors`}>
                        Card payment
                    </span>
                </button>
            </div>

            <div className="bg-(--grey-light-color) w-full h-0.5"></div>

            {loading
            ? <div className="flex justify-center items-center">
                <div className="spinner"></div>
              </div>
            : optionObj[paymentOption]
            }

        </div>
    </>)
}
export default Payment