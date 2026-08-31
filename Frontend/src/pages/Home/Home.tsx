import { CustomerBenefits } from "@/ui/CustomerBenefits"
import { SaleBuner } from "@/components/SaleBuner"
import { HomeSlider } from "@/components/HomeSlider"
import PageBuner from "@/components/PageBuner/PageBuner"
import { HomeProductZone } from "@/modules/HomeProductZone"

const Home = () => {
    return(<>
    <div className="hidden">
        <PageBuner/>
    </div>
    <div className="flex flex-col gap-22">
        <HomeSlider/>
        <CustomerBenefits/>
        <HomeProductZone/>
        <SaleBuner/>
    </div>
    </>)
}

export default Home