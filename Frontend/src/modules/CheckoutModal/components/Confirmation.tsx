import { useClearCheckout } from "@/hooks/useClearCheckout"
import CheckoutState from "@/store/CheckoutState"
import ToastState from "@/store/ToastState"

import { useNavigate } from "react-router-dom"

import { scrolToTop } from "@/assets/scrolToTopFunction"
import { Button } from "@/ui/Button"

import type { InputType } from "@/ui/types/InputTypes"

import { calculateDiscount } from "@/assets/discount"

interface Props{
    setConfirmationIsOpet: (arg0:boolean) => void,
    data: InputType | undefined,
    purchase: any
}


const Field = ({ label, value }: { label: string; value?: string }) => {
    if(value) {
        return (<>
            <div>
                <p className="text-xs text-(--grey-text-color)">{label}</p>
                <p className="break-words text-sm font-medium">{value}</p>
            </div>
        </>)
    }else{
        return null
    }
}

const Confirmation = ({setConfirmationIsOpet, purchase, data}:Props) => {

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

    const isPickup = Boolean(data?.store)

    const fullName = [data?.lastName, data?.firstName, data?.middleName]
        .filter(Boolean)
        .join(" ")

    const address = [
        data?.street,
        data?.houseNumber && `build. ${data.houseNumber}`,
        data?.apartmentNumber && `apt. ${data.apartmentNumber}`,
    ]
        .filter(Boolean)
        .join(", ")

    const cardLast4 = data?.cardNumber ? data.cardNumber.slice(-4) : ""

    const total = itemsToBuy.reduce(
        (sum, { product, quantity }) => sum + (calculateDiscount(product!.price, product!.discount) ?? 0) * quantity,
        0
    )

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-(--white-color) text-(--black-text-color) shadow-2xl"
            onClick={(e) => e.stopPropagation()}
        >
            <header className="flex items-start justify-between gap-4 border-b border-(--border) px-6 py-5 sm:px-8 sm:py-6">
                <div>
                    <h2 id="confirm-title" className="text-2xl font-bold">Review your order</h2>
                    <p className="mt-1 text-sm text-(--grey-text-color)">
                        Your order isn't placed yet. Check the details and press Place order.
                    </p>
                </div>
                <button
                    type="button"
                    aria-label="Close"
                    onClick={() => CancelFn()}
                    className="text-3xl leading-none text-(--grey-text-color) transition-colors hover:text-(--black-text-color)"
                >
                    ×
                </button>
            </header>

            <div className="grid flex-1 gap-8 overflow-y-auto px-6 py-6 sm:px-8 md:grid-cols-[3fr_2fr]">

                {/* Левая колонка: товары */}
                <section>
                    <h3 className="mb-2 text-base font-semibold">Items ({itemsToBuy.length})</h3>
                    <ul className="divide-y divide-(--border)">
                        {itemsToBuy.map(({ product, quantity }) =>
                            product && (
                                <li key={product.id} className="flex items-center gap-4 py-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-20 w-20 shrink-0 rounded-lg border border-(--border) object-cover"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-base font-semibold">{product.name}</p>
                                        <p className="text-sm text-(--grey-text-color)">
                                            ${calculateDiscount(product!.price, product!.discount)} × {quantity}
                                        </p>
                                    </div>
                                    <p className="text-base font-semibold">${calculateDiscount(product!.price, product!.discount) * quantity}</p>
                                </li>
                            )
                        )}
                    </ul>
                </section>

                {/* Правая колонка: кто получает, куда и как оплачено */}
                <aside className="h-fit space-y-5 rounded-lg bg-(--grey-light-color) p-5">
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold">Contact</h3>
                        <Field label="Name" value={fullName} />
                        <Field label="Phone" value={data?.phone} />
                        <Field label="Email" value={data?.email} />
                    </div>

                    <div className="space-y-3 border-t border-(--border) pt-5">
                        <h3 className="text-base font-semibold">{isPickup ? "Pickup" : "Delivery"}</h3>
                        <Field
                            label={isPickup ? "Store" : "Address"}
                            value={isPickup ? data?.store : address}
                        />
                    </div>

                    <div className="space-y-3 border-t border-(--border) pt-5">
                        <h3 className="text-base font-semibold">Payment</h3>
                        <Field
                            label="Method"
                            value={cardLast4 ? `Card •••• ${cardLast4}` : "Pay on receipt"}
                        />
                    </div>
                </aside>
            </div>

            <footer className="flex flex-col gap-4 border-t border-(--border) px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <p className="text-lg">
                    <span className="text-(--grey-text-color)">Total: </span>
                    <span className="text-2xl font-bold">${total}</span>
                </p>

                <div className="flex items-center justify-end gap-3">
                    <Button
                        type="button"
                        value="CANCEL"
                        bgColor="var(--grey-text-color)"
                        onClick={() => CancelFn()}
                    />
                    <Button
                        type="button"
                        value="PLACE ORDER"
                        bgColor="var(--blue-color)"
                        onClick={() => ConfirmFn()}
                    />
                </div>
            </footer>
        </div>
    )
}
export default Confirmation