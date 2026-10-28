import { apartmentRegex, houseNumberRegex, streetRegex } from "@/assets/regExp";

import { Input } from "@/ui/Input";

import type { InputType } from "@ui/types/InputTypes";

import { useFormContext } from "react-hook-form";

const NovaPoshtaCourier = () => {
    const { register, formState } = useFormContext<InputType>();

    return (<>
        <div className="w-full">
                <div className="flex items-center gap-5 w-full">
                    <label
                    style={{width:"calc(100% / 3 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">Street</p>
                        <Input
                        type="text"
                        name="street"
                        register={register}
                        placeholder="Enter your Street"
                        required = "This file is required"
                        formStateError={formState}
                        regExp={streetRegex}
                        errorMassage="Invalid Street"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                    <label
                    style={{width:"calc(100% / 3 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">House number</p>
                        <Input
                        type="text"
                        name="houseNumber"
                        register={register}
                        placeholder="Enter your house number"
                        required = "This file is required"
                        formStateError={formState}
                        regExp={houseNumberRegex}
                        errorMassage="Invalid house number"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                    <label
                    style={{width:"calc(100% / 3 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">Apartment number</p>
                        <Input
                        type="text"
                        name="apartmentNumber"
                        register={register}
                        placeholder="Enter your apartment number"
                        required = {false}
                        formStateError={formState}
                        regExp={apartmentRegex}
                        errorMassage="Invalid apartment number"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                </div>
        </div>
    </>)
}
export default NovaPoshtaCourier