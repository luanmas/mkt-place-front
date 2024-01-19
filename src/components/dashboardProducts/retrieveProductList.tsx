import ButtonDeleteProduct from "./buttonDeleteProduct";
import ButtonEditProduct from "./buttonEditProduct";

export default async function RetrieveProductList () {
    
    interface ProductProps {
        product_name: string;
        product_description: string;
        id: string;
        createdAt: Date;
    }
    
    const products : ProductProps[] = await fetch("https://657f3bdd6ae0629a3f531552.mockapi.io/products").then(res => res.json())
    
    return (
        <section className="flex  flex-col">
            {products.map((prod : ProductProps) => (
                <section key={prod.id} className="flex rounded justify-between bg-slate-200 px-3 py-3 w-[100%] max-h-[200px] my-3">
                    <div className="w-[70%] flex flex-col justify-between">
                        <h2>Nome do Produto : {prod.product_name}</h2>
                        <p>Descrição : {prod.product_description}</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <ButtonDeleteProduct />
                        <ButtonEditProduct />
                    </div>
                </section>
            ))}
        </section>
    )
}