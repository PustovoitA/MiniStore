import { useState } from "react"
import type { SelectProps } from "../types/InputTypes"

const Select = ({name, register, options, placeholder, errorMassage, formStateError, width, required}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);


    return (<div className="flex flex-col relative">
        <input
        onFocus = {() => setIsOpen(true) }
        className="border border-(--border) px-5.5 py-3.75 bg-(--white-color) outline-0 appearance-none cursor-pointer"
        style={{width:width}}
        placeholder={placeholder}
        {...register(name, {
            required: required,
            validate: (value) => value !== "" || errorMassage,
            onBlur: () => setIsOpen(false)
        })}
        />

        <div className={`flex items-center justify-center bg-(--grey-light-color) rounded-[50%] w-[30px] h-[30px] cursor-pointer absolute right-3 top-[25%]`}>
            <span className={`material-symbols-outlined transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                keyboard_arrow_down
            </span>
        </div>

        {isOpen
        ?<div className="list-none absolute top-full border border-(--border) bg-white w-full scroll-auto max-h-[200px] overflow-y-auto">
            {options.map(el => <li className="p-1 cursor-pointer w-full hover:bg-(--grey-light-color)" key={el.value}>{el.label}</li>)}
        </div>
        :null
        }
        

        {formStateError?.errors[name]?.message &&
        (<span className="ml-3.75 text-red-600">
            {formStateError.errors[name]?.message as string}
        </span>)}
    </div>)
}

export default Select