import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"

import Contacts from "./components/Contacts"
import Delivery from "./components/Delivery"
import Order from "./components/Order"
import Payment from "./components/Payment"

import type { InputType } from "@ui/types/InputTypes"

import CheckoutState from "@/store/CheckoutState"
import ToastState from "@/store/ToastState"

import { useNavigate } from "react-router-dom"
import { useBuyProduct } from "@/hooks/useBuyProducts"
import { useClearCheckout } from "@/hooks/useClearCheckout"
import { scrolToTop } from "@/assets/scrolToTopFunction"

const CheckoutModal = () => {
    const itemsToBuy = CheckoutState((state) => state.itemsToBuy)
    const showToast = ToastState((state) => state.showToast)
    const navigate = useNavigate()
    const methods = useForm<InputType>({
        shouldUnregister: true,
    });
    const purchase = useBuyProduct();
    const clearCheckout = useClearCheckout();

    const onSubmit:SubmitHandler<InputType> = (data) => {
        console.log(data, itemsToBuy);
        purchase.isPending 
        purchase.mutate(itemsToBuy, {
            onSuccess: () => {
                clearCheckout();
                navigate("/Home");
                scrolToTop();
                showToast("success", "Your order has been placed successfully!");
            },
            onError: (error) => {
                console.log("Unable to purchase the item; please try again later.");
                console.error(`ERROR: ${error}`);
                showToast("error", "Unable to complete your purchase. Please try again later.");
            }
        });
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
    </>)
}
export default CheckoutModal