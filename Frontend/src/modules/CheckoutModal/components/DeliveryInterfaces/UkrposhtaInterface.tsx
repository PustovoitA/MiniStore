import { useState } from "react";

import UkrposhtaBranches from "./UkrposhtaBranches";
import UkrposhtaParcelLocker from "./UkrposhtaParcelLocker";
import { RadioGroup } from "@/ui/RadioGroup";

type UkrPoshtaDeliveryMethodType = "Ukrposhta branches" | "Ukrposhta parcel locker"

const UkrposhtaInterface = () => {
    const [deliveryMethod, setDeliveryMethod] = useState<UkrPoshtaDeliveryMethodType>("Ukrposhta branches");
    const deliveryMethods = ["Ukrposhta branches", "Ukrposhta parcel locker"];
    const [loading, setLoading] = useState(false);

    const context = {
        "Ukrposhta branches": <UkrposhtaBranches/>,
        "Ukrposhta parcel locker":<UkrposhtaParcelLocker/>,
    }

    return (<>
        <RadioGroup<UkrPoshtaDeliveryMethodType>
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
export default UkrposhtaInterface