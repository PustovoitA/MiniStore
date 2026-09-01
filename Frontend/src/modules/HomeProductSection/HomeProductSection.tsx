import { ProductCart } from "@/components/ProductCart";
import SkeletonCard from "./components/SkeletonCard";

import { useEffect, useState } from "react";
import { usePhonesOrWatches } from "@/hooks/usePhonesOrWatches";

import type { Product } from "@/types/Product";

import { paginationConfig } from "./object/paginationConfig";


const HomeProductSection = () => {
    const [phonePage, setPhonePage] = useState(1);
    const [watchPage, setWatachPage] = useState(1);

    const {totalPages, limitProductsOnPage, maxProducts} = paginationConfig;

    useEffect(() => {
        if(phonePage > totalPages) setPhonePage(1);
    }, [phonePage]);

    const phonesQuery = usePhonesOrWatches("phone", phonePage, limitProductsOnPage);
    const watchesQuery = usePhonesOrWatches("smart-watches", watchPage, limitProductsOnPage);

    return (
  <div className="flex flex-col gap-20 justify-center items-center w-full px-4 unselectable">
    
    <section className="mobile_sec flex flex-col items-center gap-5 w-full sm:w-(--width) max-w-full">
      <div className="title flex items-center justify-between w-full font-[Jost]">
        <h1 className="text-xl sm:text-2xl md:text-3xl">MOBILE PRODUCTS</h1>
        <div>
          <a className="text-[12px] sm:text-[14px]" href="/Shop">GO TO SHOP</a>
          <hr className="h-0.5 bg-[#c8c8c8] border-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4.5 w-full products">
        {phonesQuery.isLoading
          ? new Array(5).fill(0).map((_,id) => <SkeletonCard key={id}/>)
          : phonesQuery.isError
          ? <p>Error</p>
          : phonesQuery.data?.map((el: Product) => (
              <ProductCart key={el.id} item={el} />
            ))
        }
      </div>

      {phonesQuery.isLoading
      ? null
      : <div className="switcher flex items-center justify-center gap-4 w-full">
        {Array.from({ length: Math.ceil(maxProducts / limitProductsOnPage) }, (_, i) => (
          <span
            onClick={() => setPhonePage(i + 1)}
            key={i + 1}
            style={{
              backgroundColor: `${phonePage === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`,
              borderRadius: '50%'
            }}
            className="w-3 h-3 cursor-pointer"
          />
        ))}
      </div>
      }
      
    </section>

    <section className="watches_sec flex flex-col items-center gap-5 w-full sm:w-(--width) max-w-full">
      <div className="title flex items-center justify-between w-full font-[Jost]">
        <h1 className="text-xl sm:text-2xl md:text-3xl">SMART WATCHES</h1>
        <div>
          <a className="text-[12px] sm:text-[14px]" href="/Shop">GO TO SHOP</a>
          <hr className="h-0.5 bg-[#c8c8c8] border-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4.5 w-full products">
        {watchesQuery.isLoading
          ? new Array(5).fill(0).map((_,id) => <SkeletonCard key={id}/>)
          : watchesQuery.isError
          ? <p>Error</p>
          : watchesQuery.data?.map((el: Product) => (
              <ProductCart key={el.id} item={el} />
            ))
        }
      </div>
      {watchesQuery.isLoading
      ? null
      : <div className="switcher flex items-center justify-center gap-4 w-full">
        {Array.from({ length: Math.ceil(maxProducts / limitProductsOnPage) }, (_, i) => (
          <span
            onClick={() => setWatachPage(i + 1)}
            key={i + 1}
            style={{
              backgroundColor: `${watchPage === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`,
              borderRadius: '50%'
            }}
            className="w-3 h-3 cursor-pointer"
          />
        ))}
      </div>
      }
      
    </section>

  </div>
)
}

export default HomeProductSection;