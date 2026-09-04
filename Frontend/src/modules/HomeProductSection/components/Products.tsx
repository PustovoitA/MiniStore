import { ProductCart } from "@/components/ProductCart"
import SkeletonCard from "./SkeletonCard"

import { paginationConfig } from "../object/paginationConfig"

import type { Product } from "@/types/Product"

interface Props {
    title: "MOBILE PRODUCTS" | "SMART WATCHES",
    page: number,
    setPage: (i:number) => void,
    isLoading: boolean,
    isError: boolean,
    data: Product[] | undefined,
}

export const Products = ({title, page, setPage, isLoading, isError, data}:Props) => {

    const {limitProductsOnPage, maxProducts} = paginationConfig

    return (<>
        <section className="mobile_sec flex flex-col items-center gap-5 w-full sm:w-(--width) max-w-full">
            <div className="title flex items-center justify-between w-full font-[Jost]">
                <h1 className="text-xl sm:text-2xl md:text-3xl">{title}</h1>
                <div>
                <a className="text-[12px] sm:text-[14px]" href="/Shop">GO TO SHOP</a>
                <hr className="h-0.5 bg-[#c8c8c8] border-none" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4.5 w-full products">
                {isLoading
                ? new Array(5).fill(0).map((_,id) => <SkeletonCard key={id}/>)
                : isError
                ? <p>Error</p>
                : data?.map((el: Product) => (
                    <ProductCart key={el.id} item={el} />
                    ))
                }
            </div>

            {isLoading
            ? null
            : <div className="switcher flex items-center justify-center gap-4 w-full">
                {Array.from({ length: Math.ceil(maxProducts / limitProductsOnPage) }, (_, i) => (
                <span
                    onClick={() => setPage(i + 1)}
                    key={i + 1}
                    style={{
                    backgroundColor: `${page === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`,
                    borderRadius: '50%'
                    }}
                    className="w-3 h-3 cursor-pointer"
                />
                ))}
            </div>
            }
      
        </section>
    </>)
}