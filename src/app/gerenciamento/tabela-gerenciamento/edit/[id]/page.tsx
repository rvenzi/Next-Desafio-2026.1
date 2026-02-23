
import { fetchProdutosById } from "@/actions/gerenciamento/tabela-gerenciamento/actions";
import EditCrud from "@/components/crud/edit";

export default async function Page({params}: {params: {id: string}}) {

    const id = parseInt(params.id, 10)
    const produtos = await fetchProdutosById(id)

    return (
        <div className="w-fit flex flex-col items-center sm:ml-75 xl:ml-90 lg:mt-20 justify-center py-10">
           <EditCrud produtos={produtos!} />
        </div>
    )
}