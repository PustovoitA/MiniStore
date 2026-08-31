
const CustomerBenefits = () => {
    const benefits = [
        {
            icon: "shopping_cart",
            title: "FREE DELIVERY",
            text: "Consectetur adipi elit lorem ipsum dolor sit amet.",
        },
        {
            icon: "editor_choice",
            title: "QUALITY GUARANTEE",
            text: "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
        },
        {
            icon: "loyalty",
            title: "DAILY OFFERS",
            text: "Amet consectetur adipi elit loreme ipsum dolor sit.",
        },
        {
            icon: "verified_user",
            title: "100% SECURE PAYMENT",
            text: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
        },
    ];

    return (
        <div className="flex items-center justify-center w-full px-4 sm:px-8 lg:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 w-full max-w-(--width)">
                {benefits.map(({ icon, title, text }) => (
                    <div key={title} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-(--blue-color) unselectable">
                                {icon}
                            </span>
                            <h1 className="text-lg lg:text-xl">{title}</h1>
                        </div>
                        <p className="text-(--grey-text-color) text-sm lg:text-base max-w-70 sm:pl-8.75 mt-1">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerBenefits;