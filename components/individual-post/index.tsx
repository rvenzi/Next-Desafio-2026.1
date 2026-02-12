import React from 'react';
import Image from 'next/image';

export default function ProductPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 bg-white text-gray-900 font-sans">
      {/* Seção Superior: Imagem e Compra */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Placeholder da Imagem */}
        <div className="aspect-square bg-[#f0f0f0] border border-gray-100 flex items-center justify-center overflow-hidden">
            <Image
                src="/assets/placeholder.png"
                alt="Imagem do Produto"
                width={500}
                height={500}
                className="object-contain w-full h-full"
            />
        </div>

        {/* Informações do Produto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          
          <div className="mt-2">
            <p className="text-2xl font-semibold">R$ 133,92</p>
            <p className="text-sm text-gray-600">até 6x de 22,32 s/ juros</p>
            <p className="text-sm font-medium">ou <span className="font-bold">R$ 129,90 via Pix</span></p>
          </div>

          {/* Seleção de Tamanho */}
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition text-sm font-medium">100 ml</button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition text-sm font-medium">50 ml</button>
          </div>

          {/* Botão de Compra */}
          <button className="mt-6 w-full md:w-64 bg-black text-white py-4 text-xl font-bold hover:bg-gray-800 transition uppercase tracking-wider">
            Comprar
          </button>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      {/* Seção de Descrição */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Descrição</h2>
        
        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">Why do we use it?</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">Where does it come from?</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">Where can I get some?</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}