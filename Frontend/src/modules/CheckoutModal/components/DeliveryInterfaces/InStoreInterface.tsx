import { Select } from "@/ui/Select";

import type { InputType } from "@ui/types/InputTypes";

import { useForm, type SubmitHandler } from "react-hook-form";


const InStoreInterface = () => {
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
            name="store"
            register={register}
            options={[
                { value: "1", label: "MiniStore ТРЦ Gulliver, м. Київ, вул. Спортивна, 1а" },
                { value: "2", label: "MiniStore ТРЦ Ocean Plaza, м. Київ, Дніпровська наб., 33" },
                { value: "3", label: "MiniStore ТРЦ Мост-Сіті, м. Дніпро, вул. Січеславська Набережна, 15" },
                { value: "4", label: "MiniStore ТРЦ Караван, м. Дніпро, просп. Слобожанський, 95" },
                { value: "5", label: "MiniStore ТРЦ Караван, м. Харків, просп. Гагаріна, 42" },
                { value: "6", label: "MiniStore ТРЦ Class, м. Харків, просп. Науки, 9" },
                { value: "7", label: "MiniStore ТРЦ Форум Львів, м. Львів, вул. Under, 2" },
                { value: "8", label: "MiniStore ТЦ King Cross Leopolis, м. Львів, вул. Мостицька, 1" },
                { value: "9", label: "MiniStore ТРЦ Sky Park, м. Одеса, Люстдорфська дорога, 100" },
                { value: "10", label: "MiniStore ТРЦ Riviera, м. Одеса, вул. Кримська, 27" },
                { value: "11", label: "MiniStore ТРЦ City Center, м. Запоріжжя, просп. Соборний, 168" },
                { value: "12", label: "MiniStore ТРЦ Depo, м. Вінниця, вул. Хмельницьке шосе, 2" },
            ]}
            placeholder="Select a store"
            errorMassage="Select a store"
            formStateError={formState}
            setValue={setValue}
            width="100%"
            required={false}
            ClassName=""
            />
        </form>
    </>)
}
export default InStoreInterface