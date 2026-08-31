import { CustomerBenefits } from "@/ui/CustomerBenefits"
import { HomeBuner } from "@/components/HomeBuner"
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
        <HomeBuner/>
    </div>
    </>)
}

export default Home