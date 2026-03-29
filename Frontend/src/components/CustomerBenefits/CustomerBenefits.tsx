
const CustomerBenefits = () => {
    return(<div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-between w-(--width)">
            <div className="free_delivery flex flex-col items-start">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-(--blue-color)">shopping_cart</span>
                    <h1 className="text-xl">FREE DELIVERY</h1>
                </div>
                <p className="text-(--grey-text-color) w-50 relative left-8.75">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>

            <div className="quality_guarantee flex flex-col items-start">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-(--blue-color)">editor_choice</span>
                    <h1 className="text-xl">QUALITY GUARANTEE</h1>
                </div>
                <p className="text-(--grey-text-color) w-50 relative left-8.75">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
            </div>

            <div className="daily_offers flex flex-col items-start">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-(--blue-color)">loyalty</span>
                    <h1 className="text-xl">DAILY OFFERS</h1>
                </div>
                <p className="text-(--grey-text-color) w-50 relative left-8.75">Amet consectetur adipi elit loreme ipsum dolor sit.</p>
            </div>

            <div className="100%_secure_payment flex flex-col items-start">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-(--blue-color)">verified_user</span>
                    <h1 className="text-xl">100% SECURE PAYMENT</h1>
                </div>
                <p className="text-(--grey-text-color) w-50 relative left-8.75">Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
            </div>
        </div>
    </div>)
}

export default CustomerBenefits