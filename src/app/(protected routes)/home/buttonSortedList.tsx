'use client';

import { ProductProps } from "@/providers/types/product";

const ButtonSortedList = ({ sort, products } : { sort: string; products: ProductProps[] }) => {
  
  function handleSort () {
    switch (sort) {
        case "price":
        products.sort((a, b) => a.price > b.price ? 1 : -1)
        break;
    }
  }

  return (
    <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={handleSort}>
        {sort}
    </button>
  )
}

export default ButtonSortedList;