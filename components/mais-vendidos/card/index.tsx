import Link from "next/link";
import Image from "next/image";
import { Produtos } from "@/types/data";

type MaisVendidosCardProps = {
    produtos: Produtos
}

export default function MaisVendidosCard({produtos}: MaisVendidosCardProps) {
  return (
        <Link href ={`/post/${produtos.id}`} className="group">
            <div className="flex w-fit group-hover:shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center overflow-hidden text-gray-700 border-black border-2 w-64 h-104">
                    <Image 
                        src={produtos.image || '/assets/placeholder.png'}
                        width={500}
                        height={600}
                        alt="produto mais vendido"
                        className="w-60 h-60 object-contain mt-3"
                    />
                    <div className="flex flex-col items-center p-3 gap-1">
                        <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-black line-clamp-2">
                            {produtos.title}
                        </h1>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-2 items-center text-lg font-semibold text-black">
                                <p>R$ {Number(produtos.price).toFixed(2)}</p>
                            </div>
                            <div>
                                <button className="mt-3 mb-2 w-30 h-10 bg-black text-white font-semibold hover:bg-gray-800 duration-200 flex items-center justify-center gap-2">
                                    Ver Mais
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
  );
}