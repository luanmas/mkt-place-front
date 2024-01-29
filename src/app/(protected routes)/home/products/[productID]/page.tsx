import { productAPI } from "@/providers/api/products";
import { IProduct } from "@/providers/types/product";
import { MoveLeft } from "lucide-react";
import Link from "next/link";


export const Product = async ({ params } : {
    params: { productID: string;}
}) => {

    const product: IProduct = await productAPI.getById({ id : params.productID });
    console.log(product);

    if(!product) {
        return (
            <div>
                <h2>Not found product</h2>
            </div>
        )
    }

    return (
        <div>
            <Link href={"/home"}>
                Back to Home
                <MoveLeft />
            </Link >

            <h2>Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <span>Price: {product.price}</span>
        </div>
    )
}

export default Product;