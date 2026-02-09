
import SocialLinks from "./components/socialLinks";
import QuickLinks from "./components/quickLinks";
import HelpAndInfo from "./components/helpAndInfo";
import Contacts from "./components/contacts";
import Insta from "./components/insta";

const Footer = () => {
    return(<footer>

        <section>
            <Insta/>
        </section>

        <section>
            <SocialLinks/>
            <QuickLinks/>
            <HelpAndInfo/>
            <Contacts/>
        </section>

    </footer>)
}

export default Footer