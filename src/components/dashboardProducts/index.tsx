import ButtonOpenModalCreateProduct from "./buttonOpenModalCreateProduct";
import RetrieveProductList from "./retrieveProductList";

export default function DashboardProducts  () {
    return (
        <section className="flex flex-col justify-center items-center w-[80%] mx-auto">
            <div className="w-full flex justify-between py-2 px-2">
                <h2 className="font-semibold text-2xl">Meus Produtos</h2>
                <ButtonOpenModalCreateProduct />
            </div>
            <RetrieveProductList />
        </section>
    );
}