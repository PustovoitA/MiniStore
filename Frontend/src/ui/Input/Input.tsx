import type { InputProps } from "../types/InputTypes"




const Input = ({type, register, placeholder, regExp, errorMassage, formStateError, width, required}:InputProps) => {
    return(<div className="flex flex-col">
        <input
        className="border border-(--border) px-5.5 py-3.75 text-(--grey-text-color) bg-(--white-color) outline-0"
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