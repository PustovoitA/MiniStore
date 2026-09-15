
import { useForm, type SubmitHandler } from "react-hook-form";

import { Input, type InputType } from "@/ui/Input";

import { lastNameRegex, firstNameRegex, middleNameRegex, emailRegex, uaPhoneRegex } from "@/assets/regExp";

const Contacts = () => {
    const { handleSubmit, register, formState } = useForm<InputType>();
    const onSubmit:SubmitHandler<InputType> = (data) => {
        console.log(data);
    }

    return(<>
        <div 
        style={{boxShadow: "0 0 10px 0 rgb(0 0 0 / 0.2)"}}
        className="flex flex-col items-start gap-4 w-full p-10 box-border rounded-2xl">
            <h1 className="text-[25px]">Contacts</h1>
            <form className="flex flex-col gap-[20px] w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-[20px] w-full">
                    <label
                    style={{width:"calc(100% / 3 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">last Name</p>
                        <Input
                        type="text"
                        register={register}
                        placeholder="Enter your Last Name"
                        required = "This file is required"
                        formStateError={formState}
                        regExp={lastNameRegex}
                        errorMassage="Invalid last Name"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                    <label
                    style={{width:"calc(100% / 3 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">Name</p>
                        <Input
                        type="text"
                        register={register}
                        placeholder="Enter your Name"
                        required = "This file is required"
                        formStateError={formState}
                        regExp={firstNameRegex}
                        errorMassage="Invalid Name"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                    <label
                    style={{width:"calc(100% / 3 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">Middle Name</p>
                        <Input
                        type="text"
                        register={register}
                        placeholder="Enter your Middle Name"
                        required = {false}
                        formStateError={formState}
                        regExp={middleNameRegex}
                        errorMassage="Invalid Middle Name"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                </div>
                <div className="flex items-center gap-[20px] w-full">
                    <label
                    style={{width:"calc(100% / 2 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">Phone</p>
                        <Input
                        type="text"
                        register={register}
                        placeholder="+380"
                        required = "This file is required"
                        formStateError={formState}
                        regExp={uaPhoneRegex}
                        errorMassage="Invalid Phone"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                    <label
                    style={{width:"calc(100% / 2 - 10px)"}}
                    >
                        <p className="text-(--grey-text-color)">E-mail</p>
                        <Input
                        type="email"
                        register={register}
                        placeholder="example@gmail.com"
                        required = "This file is required"
                        formStateError={formState}
                        regExp={emailRegex}
                        errorMassage="Invalid E-mail"
                        width="100%"
                        ClassName=""
                        />
                    </label>
                </div>
            </form>
        </div>
    </>)
}
export default Contacts