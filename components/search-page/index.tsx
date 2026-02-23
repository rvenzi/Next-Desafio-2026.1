'use client';
import MaisVendidosCard from "../mais-vendidos/card";
import Pagination from "../paginacao";
import SearchBar from "../search";
import { Produtos } from "@/types/data";


export default function SearchPage({produtos, count, totalPages}: {produtos: Produtos[], count: number, totalPages: number}) {
  return (
    <div>
        <div>
            <SearchBar />
            {count != 0 ? <div></div> : 
            <div className="flex flex-col justify-center items-center text-center">
              <p>
                Nenhum produto encontrado!
              </p>
              <p>
                Tente procurar outra coisa, ou explore a pagina de produtos.
              </p>
              </div>}
        </div>
        <div className="w-full flex justify-center gap-20 sm:gap-20 lg:gap-25 xl:gap-40 flex-wrap flex-row">
        {produtos.map((produtos, index) => (
          <MaisVendidosCard key={index} produtos={produtos} />
        ) )}
      </div>
      <div className="w-full flex justify-center mt-10 mb-10">
        {totalPages > 1 && (
          <Pagination totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}