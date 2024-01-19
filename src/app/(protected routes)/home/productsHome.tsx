"use client";

import CardProduct from "@/components/productHome/cardProduct";
import { useEffect, useState } from "react";
import { ProductProps } from "@/providers/types/product";

export default function ProductsHome() {
  const [products, setProducts] = useState<ProductProps[]>([]);
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
  }, []);

  return (
    <>
      <div>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("price")}>Sort by Price</button>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("alphabetical")}>Sort by A-Z</button>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("clear")}>Clear</button>
      </div>
      {products.map((prod: ProductProps) => (
        <CardProduct
          key={prod.id}
          name={prod.name}
          desc={prod.description}
          price={prod.price}
        />
      ))}
    </>
  )
}
