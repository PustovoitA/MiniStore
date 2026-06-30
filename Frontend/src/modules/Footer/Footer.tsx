
import SocialLinks from "./components/socialLinks";
import QuickLinks from "./components/quickLinks";
import HelpAndInfo from "./components/helpAndInfo";
import Contacts from "./components/contacts";
import Insta from "./components/insta";
import FooterBottom from "./components/FooterBottom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full px-4">
      <footer className="flex flex-col gap-10 w-full sm:w-(--width) max-w-full">

        <section>
          <Insta />
        </section>

        <section className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center sm:justify-between gap-8 sm:gap-6 text-center sm:text-left">
          <SocialLinks />
          <QuickLinks />
          <HelpAndInfo />
          <Contacts />
        </section>

      </footer>
      <FooterBottom />
    </div>
  )
}

export default Footer