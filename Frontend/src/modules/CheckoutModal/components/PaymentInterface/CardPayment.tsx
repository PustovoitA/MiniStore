import { useForm } from "react-hook-form";

import { Input } from "@/ui/Input";
import type { InputType } from "@/ui/types/InputTypes";

const CardPayment = () => {
    const { register, handleSubmit, formState } = useForm<InputType>();

    return (
        <form
            className="flex flex-col gap-5 w-full"
            onSubmit={handleSubmit(() => undefined)}
            noValidate
        >
            <p className="text-(--grey-text-color)">
                Enter your card details to continue.
            </p>

            <label className="flex flex-col gap-1 w-full">
                <span className="text-(--grey-text-color)">Card number</span>
                <Input
                    name="cardNumber"
                    type="text"
                    register={register}
                    placeholder="1234 5678 9012 3456"
                    required="This file is required"
                    formStateError={formState}
                    regExp={/^\d{13,19}$/}
                    errorMassage="Enter a valid card number (13–19 digits)"
                    width="100%"
                    ClassName=""
                />
            </label>

            <label className="flex flex-col gap-1 w-full">
                <span className="text-(--grey-text-color)">Cardholder name</span>
                <Input
                    name="cardHolder"
                    type="text"
                    register={register}
                    placeholder="Name as shown on card"
                    required="This file is required"
                    formStateError={formState}
                    regExp={/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+(?:[ '-][a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+)*$/}
                    errorMassage="Enter the cardholder name"
                    width="100%"
                    ClassName=""
                />
            </label>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
                <label className="flex flex-col gap-1 w-full sm:w-1/2">
                    <span className="text-(--grey-text-color)">Expiry date</span>
                    <Input
                        name="expiryDate"
                        type="text"
                        register={register}
                        placeholder="MM/YY"
                        required="This file is required"
                        formStateError={formState}
                        regExp={/^(0[1-9]|1[0-2])\/[0-9]{2}$/}
                        errorMassage="Use MM/YY format"
                        width="100%"
                        ClassName=""
                    />
                </label>

                <label className="flex flex-col gap-1 w-full sm:w-1/2">
                    <span className="text-(--grey-text-color)">Security code (CVV)</span>
                    <Input
                        name="cvv"
                        type="password"
                        register={register}
                        placeholder="3 or 4 digits"
                        required="This file is required"
                        formStateError={formState}
                        regExp={/^\d{3,4}$/}
                        errorMassage="Enter a 3 or 4 digit security code"
                        width="100%"
                        ClassName=""
                    />
                </label>
            </div>

            <button
                type="submit"
                className="self-start bg-(--blue-color) text-white px-6 py-3 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
            >
                Continue
            </button>
        </form>
    );
};

export default CardPayment;
