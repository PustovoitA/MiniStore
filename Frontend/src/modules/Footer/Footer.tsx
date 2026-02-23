
import SocialLinks from "./components/SocialLinks";
import QuickLinks from "./components/QuickLinks";
import HelpAndInfo from "./components/HelpAndInfo";
import Contacts from "./components/Contacts";
import Insta from "./components/Insta";
import FooterBottom from "./components/FooterBottom";

const Footer = () => {
    return(<div className="flex flex-col gap-10 items-center justify-center w-full">
        <footer className="flex flex-col gap-10 w-(--width)">

            <section>
                <Insta/>
            </section>

            <section className="flex items-center justify-between">
                <SocialLinks/>
                <QuickLinks/>
                <HelpAndInfo/>
                <Contacts/>
            </section>
        </footer>
        <FooterBottom/>
    </div>)
}

export default Footer