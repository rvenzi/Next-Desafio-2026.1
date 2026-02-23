import { fetchProdutoById } from "@/actions/individual/actions";
import ProductPage from "@/components/individual-post";

export default async function Individual({params}: {params: {id: string}}) {
    const id = parseInt(params.id, 10);

    const produtos = await fetchProdutoById(id);

    return (
        <div className="w-full md:w-10/12 m-auto py-8 px-4 md:p-0 min-h-screen">
            <ProductPage produtos={produtos} />
        </div>
    )
}