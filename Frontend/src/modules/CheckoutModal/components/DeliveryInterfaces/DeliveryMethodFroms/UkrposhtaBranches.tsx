import { Select } from "@/ui/Select";

import type { InputType } from "@ui/types/InputTypes";

import { useFormContext } from "react-hook-form";

const UkrposhtaBranches = () => {
    const { register, formState, setValue } = useFormContext<InputType>();

    return (<>
        <form className="w-full">
            <Select
            name="branch"
            register={register}
            options={[
                {value: "49001", label: "Укрпошта №1, м. Дніпро, вул. Михайла Грушевського, 10"},
                { value: "49005", label: "Укрпошта №5, м. Дніпро, вул. Героїв Крут, 1"},
                {value: "49006", label: "Укрпошта, м. Дніпро, вул. Надії Алексєєнко, 30",},
                {value: "49008", label: "Укрпошта, м. Дніпро, вул. Робоча, 69",},
                {value: "49010", label: "Укрпошта, м. Дніпро, вул. Володі Дубініна, 10",},
                {value: "49012", label: "Укрпошта, м. Дніпро, бульв. Слави, 5М"},
                {value: "49020", label: "Укрпошта, м. Дніпро, вул. Старий Шлях, 3"},
                {value: "49024", label: "Укрпошта, м. Дніпро, вул. Універсальна, 27"},
                {value: "49031", label: "Укрпошта, м. Дніпро, просп. Олександра Поля, 43"},
                {value: "49040", label: "Укрпошта, м. Дніпро, ж/м Тополя-1, 18"},
                {value: "49045", label: "Укрпошта, м. Дніпро, просп. Науки, 40Ж"},
                {value: "49051", label: "Укрпошта, м. Дніпро, просп. Петра Калнишевського, 18"},
            ]}
            placeholder="Select a branch"
            errorMassage="Branch not found, please check the spelling."
            formStateError={formState}
            setValue={setValue}
            width="100%"
            required={false}
            ClassName=""
            />
        </form>
    </>)
}
export default UkrposhtaBranches