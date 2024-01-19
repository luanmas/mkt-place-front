"use client";

import CardProduct from "@/components/productHome/cardProduct";
import { useEffect, useState } from "react";
import { ProductProps } from "@/providers/types/product";
import SkeletonCard from "./SkeletonCard";

export default function ProductsHome() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("");

  const fetchData = async () => {
    const productsList: ProductProps[] = await fetch("https://657f3bdd6ae0629a3f531552.mockapi.io/products2").then(res => res.json());
    setProducts(productsList);
  }

  const handleSort = () => {
    switch (sort) {
      case "price":
        const sortedByPrice = [...products].sort((a, b) => a.price > b.price ? 1 : -1);
        setProducts(sortedByPrice);
        break;

      case "alphabetical":
        let sortedByAlphabetical = [...products].sort((a, b) => a.name > b.name ? 1 : -1);
        setProducts(sortedByAlphabetical);
        break;

      case "clear":
        setProducts([...products]);
        break;  
      
      default:
        setProducts([...products]);
    }
  }

  useEffect(() => {
    handleSort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <div>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("price")}>Sort by Price</button>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("alphabetical")}>Sort by A-Z</button>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("clear")}>Clear</button>
      </div>
      <section className="bg-zinc-100 my-3 grid lg:grid-cols-3 gap-10 p-5 shadow-mb rounded">
        {isLoading && [...products].fill({name: "", description: "", id: "", price: ""}).map((d, i) => <SkeletonCard key={i}/>)}
        {products.map((prod: ProductProps) => (
          <CardProduct
            key={prod.id}
            name={prod.name}
            desc={prod.description}
            price={prod.price}
          />
        ))}
      </section>
    </>
  )
}
