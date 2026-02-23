import { Delete, Edit } from "lucide-react";
import Link from "next/link";
import { EditButton, DeleteButton } from "../buttons";
import { Produtos } from "@/types/data";

export default function MenageTable({produtos, count}: {produtos: Produtos[], count: number}) {
  return (
    <div className="w-full sm:w-10/20 lg:w-10/16 xl:w-10/14 sm:ml-72 xl:ml-70 p-4 border-2 rounded-md flex flex-col gap-4">
      <div className="flex items-center w-full justify-between">
        <span className="text-base self-end text-gray-700">
          99 produtos encontrados...
        </span>

        <Link href={'/gerenciamento/tabela-gerenciamento/create'}>
          <button className="py-2 px-6 w-32 border-2 rounded-md text-white bg-sky-600 transition-all hover:bg-sky-700">
            + Criar
          </button>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-base text-left">
          <thead className="uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>

              <th scope="col" className="px-6 py-3">
                Nome
              </th>

              <th scope="col" className="px-6 py-3">
                Preço
              </th>

              <th scope="col" className="px-6 py-3">
                Descrição
              </th>

              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produtos, index) =>(
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <th className="px-6 py-6 font-medium">
                  {produtos?.id}
                </th>
                <th className="px-6 py-6 font-medium">
                  {produtos?.title}
                </th>
                <th className="px-6 py-6 font-medium">
                  R$ {Number(produtos.price).toFixed(2)}
                </th>
                <th className="px-6 py-6 font-medium">
                  {produtos?.description
                    ? produtos.description.length > 50
                    ? produtos.description.slice(0, 25) + '...'
                    : produtos.description
                    : 'Título não existe'}
                </th>
                <th className="px-6 py-6 flex items-center gap-4">
                  <EditButton id={produtos?.id} />
                  <DeleteButton id={produtos?.id} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
