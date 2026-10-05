import { RadioGroup } from "@/ui/RadioGroup";

import { useState } from "react";


const UkrposhtaInterface = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("Отделения Укрпочта");
    const deliveryMethods = ["Отделения Укрпочта", "Почтомат Укрпочта"];
    const [loading, setLoading] = useState(false);

    return (<>
        <RadioGroup options={deliveryMethods} setLoading={setLoading} Loading={loading} value={deliveryMethod} onChange={setDeliveryMethod}/>
    </>)
}
export default UkrposhtaInterface