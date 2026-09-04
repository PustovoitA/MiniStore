import { Products } from "./components/Products";

import { useEffect, useState } from "react";
import { usePhonesOrWatches } from "@/hooks/usePhonesOrWatches";

import { paginationConfig } from "./object/paginationConfig";


const HomeProductSection = () => {
  const [phonePage, setPhonePage] = useState(1);
  const [watchPage, setWatachPage] = useState(1);

  const {totalPages, limitProductsOnPage} = paginationConfig;

  useEffect(() => {
      if(phonePage > totalPages) setPhonePage(1);
  }, [phonePage]);

  const phonesQuery = usePhonesOrWatches("phone", phonePage, limitProductsOnPage);
  const watchesQuery = usePhonesOrWatches("smart-watches", watchPage, limitProductsOnPage);

  return (
    <div className="flex flex-col gap-20 justify-center items-center w-full px-4 unselectable">
      <Products
      title="MOBILE PRODUCTS"
      page={phonePage}
      setPage={setPhonePage}
      isLoading={phonesQuery.isLoading}
      isError={phonesQuery.isError}
      data={phonesQuery.data}
      />

      <Products
      title="SMART WATCHES"
      page={watchPage}
      setPage={setWatachPage}
      isLoading={watchesQuery.isLoading}
      isError={watchesQuery.isError}
      data={watchesQuery.data}
      />
    </div>
)
}

export default HomeProductSection;