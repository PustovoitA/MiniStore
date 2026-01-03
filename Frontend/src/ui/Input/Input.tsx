
import type { FormState, UseFormRegister } from "react-hook-form"
import type { InputType } from "./InputType"


type InputProps = {
    type: "password" | "text" | "email",
    register: UseFormRegister<InputType>,
    placeholder: string,
    regExp: RegExp,
    errorMassage: string,
    formStateError: FormState<InputType> | undefined,
    width: string
}

const Input = ({type, register, placeholder, regExp, errorMassage, formStateError, width}:InputProps) => {
    return(<>
        <input
        type={type}
        placeholder={placeholder}
        {...register(type, {
            required: "This field is required",
            pattern: {
                value: regExp,
                message: errorMassage
            }
        })}
        />
        {formStateError?.errors[type]?.message &&
        (<span>
            {formStateError.errors[type]?.message as string}
        </span>)}
    </>)
}

export default Input