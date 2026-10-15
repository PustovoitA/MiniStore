import { useState } from "react"

import NovaPoshtaBranches from "./DeliveryMethodFroms/NovaPoshtaBranches";
import NovaPoshtaParcelLocker from "./DeliveryMethodFroms/NovaPoshtaParcelLocker";
import NovaPoshtaCourier from "./DeliveryMethodFroms/NovaPoshtaCourier";
import { RadioGroup } from "@/ui/RadioGroup"

type NovaPoshtaDeliveryMethodType = "Nova Poshta courier" | "Nova Poshta branches" | "Nova Poshta parcel locker"

const NovaInterface = () => {
    const [deliveryMethod, setDeliveryMethod] = useState<NovaPoshtaDeliveryMethodType>("Nova Poshta courier");
    const deliveryMethods: NovaPoshtaDeliveryMethodType[] = ["Nova Poshta courier", "Nova Poshta branches", "Nova Poshta parcel locker"];
    const [loading, setLoading] = useState(false);

    const context = {
        "Nova Poshta courier": <NovaPoshtaCourier/>,
        "Nova Poshta branches": <NovaPoshtaBranches/>,
        "Nova Poshta parcel locker": <NovaPoshtaParcelLocker/>,
    }

    return (<>
        <RadioGroup<NovaPoshtaDeliveryMethodType>
        options={deliveryMethods} 
        setLoading={setLoading} 
        Loading={loading} 
        value={deliveryMethod} 
        onChange={setDeliveryMethod}/>

        {
            loading
            ? <div className="flex justify-center items-center">
                <div className="spinner"></div>
              </div>
            : context[deliveryMethod]
        }
    </>)
}
export default NovaInterface