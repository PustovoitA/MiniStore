import { useForm, type SubmitHandler } from "react-hook-form";

import {Button} from "@ui/Button"
import {Input} from "@ui/Input"

import type {InputType} from "@ui/Input"

const SubscibeBuner = () => {
    const {register, handleSubmit, formState, reset} = useForm<InputType>({
        mode: "onChange"
    });

    const onsubmit:SubmitHandler<InputType> = (data) => {
        console.log(data);
        reset();
    }
    return (
        <div className="my-10 sm:my-20 flex items-center justify-center w-full px-4">
            <section className="w-full sm:w-(--width) max-w-full py-10 sm:py-20 px-6 sm:px-10 bg-(--black-block-color) flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-6">
                <div className="leading-9 sm:leading-11.25 text-center lg:text-left">
                    <h1 className="font-[Jost] text-2xl sm:text-3xl text-(--white-color) tracking-[1px]">
                    SUBSCRIBE US NOW
                    </h1>
                    <p className="text-(--grey-text-color) text-sm sm:text-base">
                    Get latest news, updates and deals directly mailed to your inbox.
                    </p>
                </div>
                <form
                    className="flex flex-col md:flex-row gap-3 md:gap-0 w-full md:w-auto"
                    onSubmit={handleSubmit(onsubmit)}
                >
                    <Input
                    register={register}
                    required="This file is required"
                    type="email"
                    placeholder="Your email address here"
                    regExp={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                    errorMassage="Invalid email"
                    formStateError={formState}
                    width="100%"
                    ClassName="sm:w-87.5"
                    />
                    <Button type="submit" bgColor="var(--blue-color)" value="SUBSCRIBE" />
                </form>
            </section>
        </div>
    );
}

export default SubscibeBuner