import { useClearCheckout } from "@/hooks/useClearCheckout"
import CheckoutState from "@/store/CheckoutState"
import ToastState from "@/store/ToastState"

import { useNavigate } from "react-router-dom"

import { scrolToTop } from "@/assets/scrolToTopFunction"
import { Button } from "@/ui/Button"

import type { InputType } from "@/ui/types/InputTypes"

interface Props{
    setConfirmationIsOpet: (arg0:boolean) => void,
    data: InputType | undefined,
    purchase: any
}

const Confirmation = ({setConfirmationIsOpet, purchase}:Props) => {

    const navigate = useNavigate()
    const itemsToBuy = CheckoutState((state) => state.itemsToBuy)
    const showToast = ToastState((state) => state.showToast)
    const clearCheckout = useClearCheckout();

    const ConfirmFn = () => {
        purchase.isPending 
        purchase.mutate(itemsToBuy, {
            onSuccess: () => {
                setConfirmationIsOpet(false);
                clearCheckout();
                navigate("/Home");
                scrolToTop();
                showToast("success", "Your order has been placed successfully!");
            },
            onError: (error:string) => {
                console.log("Unable to purchase the item; please try again later.");
                console.error(`ERROR: ${error}`);
                showToast("error", "Unable to complete your purchase. Please try again later.");
            }
        });
        setConfirmationIsOpet(false);
    }

    const CancelFn = () => {
        setConfirmationIsOpet(false);
    }

    return (<>
        <div className="flex items-center gap-2">
            <Button 
            type="button"
            value="CONFIRM"
            bgColor="var(--blue-color)"
            onClick={() => ConfirmFn()}
            />

            <Button 
            type="button"
            value="CANCEL"
            bgColor="var(--grey-text-color)"
            onClick={() => CancelFn()}
            />
        </div>
    </>)
}
export default Confirmation