'use client'
import Image from "next/image";

export default function CreateCrud() {
  return (
    <div className="h-fit flex shadow-2xl">
      <div className="w-1/2 h-fit border-r-4 border-black flex flex-col items-center justify-center gap-6 p-10">
        <div className="w-48 h-48 bg-white ">
            <Image
              src="/assets/placeholder.png"
              alt="Preview da imagem"
              width={192}
              height={192}
              className="object-cover"
            />
        </div>
        <button className="border border-black px-6 py-2 hover:bg-gray-100 transition">
          Adicionar foto
        </button>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">
            Vamos adicionar <br /> um novo produto
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            Preencha as informações do usuário nos campos a seguir →
          </p>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="w-1/2 h-fit flex flex-col justify-center px-10 py-10 gap-4">
        <input
          type="text"
          placeholder="Nome*"
          className="border border-black px-4 py-3 outline-none"
        />
        <input
          type="text"
          placeholder="Preço*"
          className="border border-black px-4 py-3 outline-none"
        />
        <textarea
          placeholder="Descrição*"
          rows={5}
          className="border border-black px-4 py-3 outline-none resize-none"
        />
        <div className="border-b border-black my-6" />
        <div className="flex items-center justify-center gap-6">
          <button className="bg-gray-300 text-black px-6 py-2 rounded-md">
            Cancelar
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
