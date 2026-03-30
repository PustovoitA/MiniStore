import { CustomerBenefits } from "@/components/CustomerBenefits"
import { HomeBuner } from "@/components/HomeBuner"
import PageBuner from "@/components/PageBuner/PageBuner"

const Home = () => {
    return(<>
    <div className="hidden">
        <PageBuner/>
    </div>
    <div className="flex flex-col gap-22">
        <HomeBuner/>
        <CustomerBenefits/>
    </div>
    </>)
}

export default Home