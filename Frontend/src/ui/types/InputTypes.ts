import type { FormState, UseFormRegister, UseFormSetValue } from "react-hook-form"


export type InputType = {
// Contacts
  lastName: string;
  firstName: string;
  middleName?: string;
  phone: string;
  email: string;

  // Delivery
  deliveryMethod: "pickup" | "novaPoshta" | "ukrPoshta";
  store?: string;
  branch?: string;
  locker?: string;
  street?: string;
  houseNumber?: string;
  apartmentNumber?: string;

  // Payment
  paymentMethod: "receipt" | "card";
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

export type InputProps = {
    type: "password" | "text" | "email" | "tel",
    name: keyof InputType,
    register: UseFormRegister<InputType>,
    placeholder: string,
    regExp: RegExp,
    errorMassage: string,
    formStateError: FormState<InputType> | undefined,
    width: string,
    required: "This file is required" | boolean,
    ClassName: string,
}

type Option = {
    value: string,
    label: string,
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
    ClassName?: string,
}

export type RadioGroupProps<T extends string> = {
    options: T[],
    value: T,
    setLoading: (v:boolean) => void,
    Loading: boolean,
    onChange?: (value: T ) => void,
}
