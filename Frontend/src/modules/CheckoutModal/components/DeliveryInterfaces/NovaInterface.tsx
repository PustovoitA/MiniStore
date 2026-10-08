import { RadioGroup } from "@/ui/RadioGroup"

import { useState } from "react"


const NovaInterface = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("Nova Poshta courier");
    const deliveryMethods = ["Nova Poshta courier", "Nova Poshta branches", "Nova Poshta parcel locker"];
    const [loading, setLoading] = useState(false)

    return (<>
        <RadioGroup options={deliveryMethods} setLoading={setLoading} Loading={loading} value={deliveryMethod} onChange={setDeliveryMethod}/>

        {
            loading
            ? <div className="flex justify-center items-center">
                <div className="spinner"></div>
              </div>
            : <p>result</p>
        }
    </>)
}
export default NovaInterface