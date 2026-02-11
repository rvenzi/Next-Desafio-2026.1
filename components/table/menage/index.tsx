import { Delete, Edit } from "lucide-react";
import Link from "next/link";
import { EditButton, DeleteButton } from "../buttons";

export default function MenageTable() {
  return (
    <div className="w-full sm:w-10/20 lg:w-10/16 xl:w-10/14 sm:ml-72 xl:ml-70 p-4 border-2 rounded-md flex flex-col gap-4">
      <div className="flex items-center w-full justify-between">
        <span className="text-base self-end text-gray-700">
          99 categorias encontradas...
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
            <tr className="bg-white border-b hover:bg-gray-50">
              <th className="px-6 py-6 font-medium">
                1
              </th>
              <th className="px-6 py-6 font-medium">
                Nome
              </th>
              <th className="px-6 py-6 font-medium">
                R$ 129,90
              </th>
              <th className="px-6 py-6 font-medium">
                <span className="hover:underline">
                  Produto 1, Produto 2, Produto 3...
                </span>
              </th>
              <th className="px-6 py-6 flex items-center gap-4">
                <EditButton id={1} />
                <DeleteButton id={1} />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
