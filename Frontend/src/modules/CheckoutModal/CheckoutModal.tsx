import Contacts from "./components/Contacts"
import Delivery from "./components/Delivery"
import Order from "./components/Order"
import Payment from "./components/Payment"

const CheckoutModal = () => {
    return(<>
        <section className="flex items-center justify-center w-full bg-(--grey-light-color) text-[40px] p-10 mb-20">
            PLACING ON ORDER
        </section>
        <div className="mx-auto flex w-full max-w-310 flex-col items-stretch justify-center gap-4 px-4 font-[Jost] lg:flex-row lg:items-start lg:gap-6">
            <section className="flex w-full flex-col gap-3.75 lg:w-[calc(100%-360px)]">
                <Contacts/>
                <Delivery/>
                <Payment/>
            </section>
            <section className="w-full lg:sticky lg:top-6 lg:w-84 lg:shrink-0">
                <Order/>
            </section>
        </div>
    </>)
}
export default CheckoutModal
