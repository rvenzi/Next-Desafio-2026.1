'use client';
import MaisVendidosCard from "../mais-vendidos/card";
import { Search } from "lucide-react";
import Pagination from "../paginacao";

export default function PagProdutos() {
  return (
    <div className="w-full space-y-12 mt-10 mb-20">
        <div className="w-full flex justify-center">
            <div className="w-10/20 h-12 border border-black flex items-center px-4 gap-3">
                <Search className="text-black" />
                <input 
                    type="text" 
                    placeholder="Buscar produtos..." 
                    className="w-full h-full outline-none"
                />
            </div>
        </div>
        <div className="w-full flex justify-center gap-20 sm:gap-20 lg:gap-25 xl:gap-40 flex-wrap flex-row">
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
        </div>
        <div className="w-full flex justify-center mt-10">
            <Pagination />
        </div>
    </div>
  );
}