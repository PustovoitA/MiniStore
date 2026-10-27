import type { InputProps } from "../types/InputTypes"




const Input = ({type, name, register, placeholder, regExp, errorMassage, formStateError, width, required}:InputProps) => {
    const fieldName = name ?? type;
    return(<div className="flex flex-col">
        <input
        className="border border-(--border) px-5.5 py-3.75 bg-(--white-color) outline-0"
        style={{width:width}}
        type={type}
        placeholder={placeholder}
        {...register(fieldName, {
            required: required,
            pattern: {
                value: regExp,
                message: errorMassage
            }
        })}
        />
        {formStateError?.errors[fieldName]?.message &&
        (<span className="ml-3.75 text-red-600">
            {formStateError.errors[fieldName]?.message as string}
        </span>)}
    </div>)
}

export default Input
