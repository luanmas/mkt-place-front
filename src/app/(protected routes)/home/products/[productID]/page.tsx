import { productAPI } from "@/providers/api/products";
import { IProduct } from "@/providers/types/product";
import { MoveLeft } from "lucide-react";
import Link from "next/link";


export const Product = async ({ params } : {
    params: { productID: string;}
}) => {

    const product: IProduct = await productAPI.getById({ id : params.productID });
    
    if(!product) {
        return (
            <div>
                <h2>Not found product</h2>
            </div>
        )
    }


    return (
        <div className="px-16">
            <Link href={"/home"} className="flex justify-between w-[12%] bg-zinc-100 px-1 py-1 rounded">
                <MoveLeft />
                Back to Home
            </Link >

            <section className="py-10 flex justify-between">
                <section className="bg-zinc-500 h-[500px] w-[40%] rounded drop-shadow-md">
                    <span className="text-zinc-500">aaaa</span>
                </section>
                <section className="w-[60%] px-4 space-y-5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold">{product.name}</h2>
                        <p className="text-justify">{product.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                            <span className="text-3xl font-light">R$ {product.price}</span>
                            <button className="min-w-[250px] py-3 font-semibold bg-blue-400 text-zinc-100 text-base rounded drop-shadow-md">
                                Comprar
                            </button>
                            <button className="min-w-[250px] py-3 font-semibold bg-zinc-100 text-blue-400 text-base rounded drop-shadow-md">
                                Adicionar no carrinho
                            </button>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Product;