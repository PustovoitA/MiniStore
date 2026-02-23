
import SocialLinks from "./components/SocialLinks";
import QuickLinks from "./components/QuickLinks";
import HelpAndInfo from "./components/HelpAndInfo";
import Contacts from "./components/Contacts";
import Insta from "./components/Insta";

const Footer = () => {
    return(<div className="flex items-center justify-center w-full">
        <footer className="flex flex-col gap-15 w-(--width)">

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
    </div>)
}

export default Footer