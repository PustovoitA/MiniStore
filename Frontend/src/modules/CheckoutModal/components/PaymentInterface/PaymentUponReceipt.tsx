
import { RadioGroup } from "@/ui/RadioGroup"
import { useState } from "react"


type radioType = "Payment upon receipt"

const PaymentUponReceipt = () => {
    const [loading, setLoading] = useState(false)

    return (<>
        <RadioGroup<radioType>
        options={["Payment upon receipt"]} 
        setLoading={setLoading} 
        Loading={loading} 
        value={"Payment upon receipt"} 
        />
    </>)
}
export default PaymentUponReceipt