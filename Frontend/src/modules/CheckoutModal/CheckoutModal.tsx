import Contacts from "./components/Contacts"
import Delivery from "./components/Delivery"
import Order from "./components/Order"
import Payment from "./components/Payment"

const CheckoutModal = () => {
    return(<>
        <section className="flex items-center justify-center w-full bg-(--grey-light-color) text-[40px] p-10 mb-20">
            PLACING ON ORDER
        </section>
        <div className="flex justify-center items-start gap-3 font-[Jost]">
            <section className="flex flex-col gap-[15px] w-[65%]">
                <Contacts/>
                <Delivery/>
                <Payment/>
            </section>
            <section>
                <Order/>
            </section>
        </div>
    </>)
}
export default CheckoutModal