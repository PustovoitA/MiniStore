import { RadioGroup } from "@/ui/RadioGroup"

import { useState } from "react"


const NovaInterface = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("Курьер Новая почта");
    const deliveryMethods = ["Курьер Новая почта", "Отделения Нова пошта", "Почтомат Нова пошта"];
    const [loading, setLoading] = useState(false)

    return (<>
        <RadioGroup options={deliveryMethods} setLoading={setLoading} Loading={loading} value={deliveryMethod} onChange={setDeliveryMethod}/>
    </>)
}
export default NovaInterface