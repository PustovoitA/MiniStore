
import SocialLinks from "./components/socialLinks";
import QuickLinks from "./components/quickLinks";
import HelpAndInfo from "./components/helpAndInfo";
import Contacts from "./components/contacts";
import Insta from "./components/insta";
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