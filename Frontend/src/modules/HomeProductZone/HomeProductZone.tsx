import { ProductCart } from "@/components/ProductCart";
import { useEffect, useState } from "react";
import { usePhonesOrWatches } from "@/hooks/usePhonesOrWatches";
import type { Product } from "@/types/Product";

const HomeProductZone = () => {
    const [phonePage, setPhonePage] = useState(1);
    const [watchPage, setWatachPage] = useState(1);

    const totalPages = 3;
    const limitProductsOnPage = 5;
    const maxProducts = 15;

    useEffect(() => {
        if(phonePage > totalPages) setPhonePage(1);
    }, [phonePage]);

    const phonesQuery = usePhonesOrWatches("phone", phonePage, limitProductsOnPage);
    const watchesQuery = usePhonesOrWatches("smart-watches", watchPage, limitProductsOnPage);

    return(<div className="flex flex-col gap-20 justify-center items-center w-full unselectable">
        <section className="mobile_sec flex flex-col items-center gap-5 w-(--width)">
            <div className="title flex items-center justify-between w-full font-[Jost]">
                <h1 className="text-3xl">MOBILE PRODUCTS</h1>
                <div>
                    <a className="text-[14px]" href="/Shop">GO TO SHOP</a>
                    <hr className="h-0.5 bg-[#c8c8c8] border-none" />
                </div>
            </div>
            <div className="flex items-center gap-4.5 w-full products">
                {phonesQuery.isLoading
                ? <p>Loading....</p>
                : phonesQuery.isError
                ? <p>Error</p>
                : phonesQuery.data?.data.map((el:Product) => {
                    return <ProductCart key={el.id} id={el.id} productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={limitProductsOnPage}/>
                })
                }
            </div>
            <div className="switcher flex items-center justify-center gap-4 w-full">
                {Array.from({ length: Math.ceil(maxProducts / limitProductsOnPage) }, (_, i) => (
                    <span
                    onClick={() => setPhonePage(i + 1)}
                    key={i + 1}
                    style={{backgroundColor: `${phonePage === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`, borderRadius: '50%'}}
                    className="w-3 h-3 cursor-pointer"
                    ></span>
                ))}
            </div>
        </section>

        <section className="watches_sec flex flex-col items-center gap-5 w-(--width)">
            <div className="title flex items-center justify-between w-full font-[Jost]">
                <h1 className="text-3xl">SMART WATCHES</h1>
                <div>
                    <a className="text-[14px]" href="/Shop">GO TO SHOP</a>
                    <hr className="h-0.5 bg-[#c8c8c8] border-none" />
                </div>
            </div>
            <div className="flex items-center gap-4.5 w-full products">
                {watchesQuery.isLoading
                ?<p>Loading...</p>
                :watchesQuery.isError
                ?<p>Error</p>
                :watchesQuery.data?.data.map((el:Product) => {
                    return <ProductCart key={el.id} id={el.id} productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={limitProductsOnPage}/>
                })
                }
            </div>
            <div className="switcher flex items-center justify-center gap-4 w-full">
                {Array.from({ length: Math.ceil(maxProducts / limitProductsOnPage) }, (_, i) => (
                    <span
                    onClick={() => setWatachPage(i + 1)}
                    key={i + 1}
                    style={{backgroundColor: `${watchPage === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`, borderRadius: '50%'}}
                    className="w-3 h-3 cursor-pointer"
                    ></span>
                ))}
            </div>
        </section>
    </div>)
}

export default HomeProductZone;