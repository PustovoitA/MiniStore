import { useState } from "react"

import type { SelectProps } from "../types/InputTypes"

const Select = ({name, register, options, placeholder, errorMassage, formStateError, setValue, width, required}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) => {
        setValue(name, value, { shouldValidate: true });
        const input = document.querySelector('input[name="store"]') as HTMLInputElement
        input?.blur()
    }

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
        ? formStateError?.errors[name]?.message
        ? <span className="absolute top-full text-black w-full border border-(--border) p-1">{formStateError.errors[name]?.message as string}</span>
        : <div className="list-none absolute top-full border border-(--border) bg-white w-full scroll-auto max-h-[200px] overflow-y-auto">
            {options.map(el => <li onMouseDown={(e) => {e.preventDefault(); handleSelect(el.label)}} className="p-1 cursor-pointer w-full hover:bg-(--grey-light-color)" key={el.value}>{el.label}</li>)}
        </div>
        : null
        }
        

        
    </div>)
}

export default Select