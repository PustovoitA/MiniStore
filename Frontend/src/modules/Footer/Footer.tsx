
import SocialLinks from "./components/SocialLinks";
import QuickLinks from "./components/QuickLinks";
import HelpAndInfo from "./components/HelpAndInfo";
import Contacts from "./components/Contacts";
import Insta from "./components/Insta";

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