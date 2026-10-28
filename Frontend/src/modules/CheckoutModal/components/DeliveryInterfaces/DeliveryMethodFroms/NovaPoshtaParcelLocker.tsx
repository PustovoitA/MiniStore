import { Select } from "@/ui/Select";

import type { InputType } from "@ui/types/InputTypes";

import { useFormContext } from "react-hook-form";

const NovaPoshtaParcelLocker = () => {
    const { register, formState, setValue } = useFormContext<InputType>();

    return(<>
        <form className="w-full">
            <Select
            name="locker"
            register={register}
            options={[
                {value: "5034", label: "Поштомат №5034, м. Дніпро, вул. Калинова, 52"},
                {value: "5429", label: "Поштомат №5429, м. Дніпро, просп. Петра Калнишевського, 62"},
                {value: "4159", label: "Поштомат №4159, м. Дніпро, вул. Калинова, 49"},
                {value: "5019", label: "Поштомат №5019, м. Дніпро, вул. Ульянівська, 10"},
                {value: "1760", label: "Поштомат №1760, м. Дніпро, Сонячна Набережна, 48А"},
                {value: "1755", label: "Поштомат №1755, м. Дніпро, вул. Богдана Хмельницького, 26А"},
                {value: "29207", label: "Поштомат №29207, м. Дніпро, вул. Михайла Драгоманова, 52, під'їзд №2"},
                {value: "24720", label: "Поштомат №24720, м. Дніпро, вул. Калинова, 1, під'їзд №5"},
                {value: "27410", label: "Поштомат №27410, м. Дніпро, вул. Моніторна, 2, під'їзд №12"},
                {value: "29380", label: "Поштомат №29380, м. Дніпро, просп. Героїв, 32, під'їзд №2"},
                {value: "61371", label: "Поштомат №61371, м. Дніпро, вул. Івана Акінфієва, 18"},
                {value: "62183", label: "Поштомат №62183, м. Дніпро, вул. Володимира Антоновича, 10Б"},
            ]}
            placeholder="Select a parcel locker"
            errorMassage="Parcel locker not found, please check the spelling."
            formStateError={formState}
            setValue={setValue}
            width="100%"
            required={false}
            ClassName=""
            />
        </form>
    </>)
}
export default NovaPoshtaParcelLocker