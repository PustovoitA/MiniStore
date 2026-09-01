import { CustomerBenefits } from "@/ui/CustomerBenefits"
import { SaleBuner } from "@/components/SaleBuner"
import { HomeSlider } from "@/components/HomeSlider"
import PageBuner from "@/components/PageBuner/PageBuner"
import { HomeProductSection } from "@/modules/HomeProductSection"

const Home = () => {
    return(<>
    <div className="hidden">
        <PageBuner/>
    </div>
    <div className="flex flex-col gap-22">
        <HomeSlider/>
        <CustomerBenefits/>
        <HomeProductSection/>
        <SaleBuner/>
    </div>
    </>)
}

export default Home