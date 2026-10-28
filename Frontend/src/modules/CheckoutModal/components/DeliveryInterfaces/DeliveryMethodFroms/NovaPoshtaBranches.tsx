import { Select } from "@/ui/Select";

import type { InputType } from "@ui/types/InputTypes";

import { useFormContext } from "react-hook-form";

const NovaPoshtaBranches = () => {
    const { register, formState, setValue } = useFormContext<InputType>();

    return(<>
        <div className="w-full">
            <Select
            name="branch"
            register={register}
            options={[
                {value: "2", label: "Нова пошта №2, м. Дніпро, просп. Богдана Хмельницького, 31Д" },
                { value: "3", label: "Нова пошта №3, м. Дніпро, вул. Тверська, 1" },
                { value: "4", label: "Нова пошта №4, м. Дніпро, пл. Старомостова, 1Б" },
                { value: "6", label: "Нова пошта №6, м. Дніпро, вул. Ударників, 27" },
                { value: "7", label: "Нова пошта №7, м. Дніпро, просп. Олександра Поля, 8А" },
                { value: "9", label: "Нова пошта №9, м. Дніпро, просп. Лесі Українки, 63А" },
                { value: "10", label: "Нова пошта №10, м. Дніпро, просп. Слобожанський, 91" },
                { value: "12", label: "Нова пошта №12, м. Дніпро, вул. Набережно-Заводська, 123Б" },
                { value: "13", label: "Нова пошта №13, м. Дніпро, просп. Гагаріна, 43" },
                { value: "16", label: "Нова пошта №16, м. Дніпро, вул. Бородинська, 43" },
                { value: "32", label: "Нова пошта №32, м. Дніпро, вул. Володимира Вернадського, 10" },
                { value: "38", label: "Нова пошта №38, м. Дніпро, вул. Михайла Грушевського, 4А" },
            ]}
            placeholder="Select a branch"
            errorMassage="Branch not found, please check the spelling."
            formStateError={formState}
            setValue={setValue}
            width="100%"
            required={false}
            ClassName=""
            />
        </div>
    </>)
}
export default NovaPoshtaBranches