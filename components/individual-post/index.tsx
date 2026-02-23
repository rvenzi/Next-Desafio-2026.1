"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IndividualProdutos } from '@/types/data';

export default function ProductPage({produtos}: {produtos: IndividualProdutos}) {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(null);

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 bg-white text-gray-900 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
            <Image
                src={produtos?.image || "/assets/placeholder.png"}
                alt="Imagem do Produto"
                width={500}
                height={500}
                className="object-contain w-full h-full"
            />
        </div>

        <div className="flex flex-col lg:gap-4">
          <h1 className="text-3xl font-bold">{produtos?.title}</h1>
          
          <div className="mt-2">
            <p className="text-2xl font-semibold">R$ {produtos?.price}</p>
            <p className="text-sm text-gray-600">5% de desconto via Pix</p>
            <p className="text-sm font-medium">
              ou <span className="text-sm text-gray-600">10% de desconto na primeira compra</span>
            </p>
          </div>

          {/* BOTÕES COM SELEÇÃO */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setTamanhoSelecionado("100ml")}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition
                ${tamanhoSelecionado === "100ml"
                  ? "border-black bg-gray-200"
                  : "border-transparent bg-gray-100 hover:bg-gray-200"}
              `}
            >
              100 ml
            </button>

            <button
              onClick={() => setTamanhoSelecionado("50ml")}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition
                ${tamanhoSelecionado === "50ml"
                  ? "border-black bg-gray-200"
                  : "border-transparent bg-gray-100 hover:bg-gray-200"}
              `}
            >
              50 ml
            </button>
          </div>

          <button className="mt-6 w-full md:w-64 bg-black text-white py-4 text-xl font-bold hover:bg-gray-800 transition uppercase tracking-wider">
            Comprar
          </button>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Descrição</h2>
        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
          <p>{produtos?.description}</p>
        </div>
      </section>
    </main>
  );
}