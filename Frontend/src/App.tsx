
import {Input} from "@ui/Input"
import {Button} from "@ui/Button"
import { useForm, type SubmitHandler } from "react-hook-form"

import type { InputType } from "@ui/Input"

function App() {

  const {register, handleSubmit, watch, formState, reset} = useForm<InputType>({
    mode: "onChange"
  });

  const onsubmit:SubmitHandler<InputType> = (data) => {
    console.log(data);
    reset();
  }

  return (<>
    <div>
    <Button type="button" bgColor='var(--blue-color)' value='BUY NOW'/>
    <br />
    <br />
    <Button type="button" bgColor='var(--blue-color)'value='SUBSCRIBE'/>
    <br />
    <br />
    <Button type="button" bgColor='var(--black-block-color)' value='ADD TO CARD'/>
  </div>

<br />
<br />

  <form onSubmit={handleSubmit(onsubmit)}>
    <Input 
    register={register}
    type="text"
    placeholder="Your Email Here"
    regExp={/^[A-Za-z]+$/}
    errorMassage="Invalid email. You must to use only English letters"
    formStateError={formState}
    width="200px"
    />
    <Button type="submit" bgColor='var(--blue-color)'value='SUBMIT'/>
  </form>

  </>)
}

export default App
