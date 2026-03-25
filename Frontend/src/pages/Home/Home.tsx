import { CustomerBenefits } from "@/components/CustomerBenefits"
import { HomeBuner } from "@/components/HomeBuner"
import PageBuner from "@/components/PageBuner/PageBuner"

const Home = () => {
    return(<>
    <div className="hidden">
        <PageBuner/>
    </div>
    <HomeBuner/>
    <CustomerBenefits/>
    </>)
}

export default Home