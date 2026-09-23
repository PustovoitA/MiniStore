import type { FormState, UseFormRegister, UseFormSetValue } from "react-hook-form"


export type InputType = {
    email: string | undefined,
    password:string | undefined,
    text:string | undefined,
    store: string | undefined
}

export type InputProps = {
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

type Option = {
    value: string,
    label: string
}

export type SelectProps = {
    name: keyof InputType,
    register: UseFormRegister<InputType>,
    options: Option[],
    placeholder?: string,
    errorMassage: string,
    formStateError: FormState<InputType> | undefined,
    setValue: UseFormSetValue<InputType>,
    width: string,
    required: "This field is required" | boolean,
    ClassName?: string
}
