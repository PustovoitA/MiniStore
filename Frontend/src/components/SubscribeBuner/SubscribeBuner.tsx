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
    return(<section>
    <div>
        <h1>SUBSCRIBE US NOW</h1>
        <p>Get latest news, updates and deals directly mailed to your inbox.</p>
    </div>
    <form className="flex" onSubmit={handleSubmit(onsubmit)}>
        <Input
        register={register}
        required="This file is required"
        type="email"
        placeholder="Your email address here"
        regExp={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
        errorMassage="Invalid email"
        formStateError={formState}
        width="350px"
        />
        <Button type="submit" bgColor='var(--blue-color)'value='SUBSCRIBE'/>
    </form>
    </section>)
}

export default SubscibeBuner