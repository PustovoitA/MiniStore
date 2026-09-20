import type { SelectProps } from "../types/InputTypes"

const Select = ({name, register, options, placeholder, errorMassage, formStateError, width, required}: SelectProps) => {
    return (<div className="flex flex-col">
        <select
        className="border border-(--border) px-5.5 py-3.75 text-(--grey-text-color) bg-(--white-color) outline-0 appearance-none cursor-pointer"
        style={{width:width}}
        defaultValue=""
        {...register(name, {
            required: required,
            validate: (value) => value !== "" || errorMassage
        })}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {formStateError?.errors[name]?.message &&
        (<span className="ml-3.75 text-red-600">
            {formStateError.errors[name]?.message as string}
        </span>)}
    </div>)
}

export default Select