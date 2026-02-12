'use client'
import Image from "next/image";

const categorie = "Categoria default";

export default function EditCrud() {
  return (
    <div className="h-fit flex flex-col lg:flex-row items-center justify-center shadow-2xl">
      <div className="w-1/2 h-fit lg:border-r-4 border-black flex flex-col items-center justify-center gap-6 lg:p-5">
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
          Editar foto
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
      <div className="w-1/2 h-fit flex flex-col justify-center lg:px-5 py-10 gap-4">
        <input
          type="text"
          placeholder="Nome*"
          className="border border-black px-4 py-3 outline-none"
          defaultValue={categorie}
        />
        <input
          type="text"
          placeholder="Preço*"
          className="border border-black px-4 py-3 outline-none"
          defaultValue={categorie}
        />
        <textarea
          placeholder="Descrição*"
          rows={5}
          className="border border-black px-4 py-3 outline-none resize-none"
          defaultValue={categorie}
        />
        <div className="border-b border-black my-6" />
        <div className="flex items-center justify-center gap-2">
          <button className="bg-gray-300 text-black px-1 py-2 rounded-md">
            Cancelar
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
