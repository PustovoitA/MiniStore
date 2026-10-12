import { Select } from "@/ui/Select";

import type { InputType } from "@ui/types/InputTypes";

import { useForm, type SubmitHandler } from "react-hook-form";

const UkrposhtaParcelLocker = () => {
    const { handleSubmit, register, formState, setValue } = useForm<InputType>(
        {
            mode: "onChange"
        }
    );
    const onSubmit:SubmitHandler<InputType> = (data) => {
        console.log(data);
    }

    return (<>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Select
            name="locker"
            register={register}
            options={[
                {value: "UP-001", label: "Поштомат Укрпошти, м. Дніпро, просп. Дмитра Яворницького, 10"},
                {value: "UP-002", label: "Поштомат Укрпошти, м. Дніпро, вул. Михайла Грушевського, 10"},
                {value: "UP-003", label: "Поштомат Укрпошти, м. Дніпро, просп. Науки, 40"},
                {value: "UP-004", label: "Поштомат Укрпошти, м. Дніпро, просп. Слобожанський, 87"},
                {value: "UP-005", label: "Поштомат Укрпошти, м. Дніпро, вул. Робоча,  ту69"},
                {value: "UP-006", label: "Поштомат Укрпошти, м. Дніпро, вул. Калинова, 53"},
                {value: "UP-007", label: "Поштомат Укрпошти, м. Дніпро, просп. Богдана Хмельницького, 118"},
                {value: "UP-008", label: "Поштомат Укрпошти, м. Дніпро, вул. Набережна Перемоги,  Поштомат 44"},
                {value: "UP-009", label: "Поштомат Укрпошти, м. Дніпро, ж/м Тополя-2, 20"},
                {value: "UP-010", label: "Поштомат Укрпошти, м. Дніпро, ж/м Перемога-4, 18"},
                {value: "UP-011", label: "Поштомат Укрпошти, м. Дніпро, вул. Володимира Антоновича, 26"},
                {value: "UP-012", label: "Поштомат Укрпошти, м. Дніпро, просп. Героїв, 12"}
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
export default UkrposhtaParcelLocker