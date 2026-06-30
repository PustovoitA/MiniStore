
import type { FormState, UseFormRegister } from "react-hook-form"
import type { InputType } from "./InputType"


type InputProps = {
    type: "password" | "text" | "email",
    register: UseFormRegister<InputType>,
    placeholder: string,
    regExp: RegExp,
    errorMassage: string,
    formStateError: FormState<InputType> | undefined,
    width: string,
    required: "This file is required" | boolean,
    ClassName: string
}

const Input = ({type, register, placeholder, regExp, errorMassage, formStateError, width, required}:InputProps) => {
    return(<div className="flex flex-col">
        <input
        className="border border-(--grey-light-color) px-5.5 py-3.75 text-(--grey-text-color) bg-(--white-color) outline-0"
        style={{width:width}}
        type={type}
        placeholder={placeholder}
        {...register(type, {
            required: required,
            pattern: {
                value: regExp,
                message: errorMassage
            }
        })}
        />
        {formStateError?.errors[type]?.message &&
        (<span className="ml-3.75 text-red-600">
            {formStateError.errors[type]?.message as string}
        </span>)}
    </div>)
}

export default Input