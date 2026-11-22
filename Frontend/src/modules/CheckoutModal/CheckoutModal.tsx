import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"

import Contacts from "./components/Contacts"
import Delivery from "./components/Delivery"
import Order from "./components/Order"
import Payment from "./components/Payment"
import Confirmation from "./components/Confirmation"

import type { InputType } from "@ui/types/InputTypes"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useBuyProduct } from "@/hooks/useBuyProducts"


const CheckoutModal = () => {
    const navigate = useNavigate()
    const methods = useForm<InputType>({
        shouldUnregister: true,
    });

    const purchase = useBuyProduct();
    const [confirmationIsOpet, setConfirmationIsOpet] = useState(false);
    const [inputData, setInputData] = useState<InputType>();

    useEffect(() => {
        if(confirmationIsOpet){
            document.body.classList.add('no-scroll');
        }else{
            document.body.classList.remove('no-scroll');
        }
    }, [confirmationIsOpet])

    const onSubmit:SubmitHandler<InputType> = (data) => {
        setConfirmationIsOpet(true);
        setInputData(data);
    }

    return(<>
        {purchase.isPending && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30">
                <div className="spinner"></div>
            </div>
        )}
        <section className="flex flex-col items-center justify-center w-full bg-(--grey-light-color) text-[40px] p-10 mb-20">
            PLACING ON ORDER
            <span className=" flex items-center gap-1 cursor-pointer hover:text-(--blue-color) text-(--grey-text-color) text-[16px] transition-colors"
            onClick={() => navigate(-1)}
            >
                <span className="material-symbols-outlined">keyboard_backspace</span>
                Back
            </span>
        </section>
        <FormProvider {...methods}>
            <section className="mx-auto flex w-full max-w-310 flex-col items-stretch justify-center gap-4 px-4 font-[Jost] lg:flex-row lg:items-start lg:gap-6">
                <form id="checkout" onSubmit={methods.handleSubmit(onSubmit)} className="flex w-full flex-col gap-3.75 lg:w-[calc(100%-360px)]">
                    <Contacts/>
                    <Delivery/>
                    <Payment/>
                </form>
                <section className="w-full lg:sticky lg:top-6 lg:w-84 lg:shrink-0">
                    <Order/>
                </section>
            </section>
        </FormProvider>

        <div 
        className="justify-center items-center w-full h-full bg-black/60 backdrop-blur-md fixed z-999 inset-0"
        style={{
            display: confirmationIsOpet ? "flex" : "none"
        }}
        >
            <Confirmation
            setConfirmationIsOpet={setConfirmationIsOpet}
            data={inputData}
            purchase={purchase}
            />
        </div>
    </>)
}
export default CheckoutModal