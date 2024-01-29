"use client";

import CardProduct from "@/components/productHome/cardProduct";
import { useEffect, useState } from "react";
import { IProduct } from "@/providers/types/product";
import { productAPI } from "@/providers/api/products";

export default function ProductsHome() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getAll();
      setProducts(response);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchProducts();
    setIsLoading(false);
  }, []);

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

  return (
    <>
      <div>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("price")}>Sort by Price</button>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("alphabetical")}>Sort by A-Z</button>
        <button className="px-3 py-1 rounded bg-slate-700 text-slate-200" onClick={() => setSort("clear")}>Clear</button>
      </div>
      <section className="bg-zinc-100 my-3 grid lg:grid-cols-3 gap-10 p-5 shadow-mb rounded">
        {products.map((prod: IProduct) => (
          <CardProduct
            key={prod.id}
            name={prod.name}
            description={prod.description}
            price={prod.price}
            id={prod.id}
          />
        ))}
      </section>
    </>
  )
}
