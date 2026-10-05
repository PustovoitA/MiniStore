import { RadioGroup } from "@/ui/RadioGroup";

import { useState } from "react";


const UkrposhtaInterface = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("Ukrposhta branches");
    const deliveryMethods = ["Ukrposhta branches", "Ukrposhta parcel locker"];
    const [loading, setLoading] = useState(false);

    return (<>
        <RadioGroup options={deliveryMethods} setLoading={setLoading} Loading={loading} value={deliveryMethod} onChange={setDeliveryMethod}/>
    </>)
}
export default UkrposhtaInterface