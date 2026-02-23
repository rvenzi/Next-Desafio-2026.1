'use client'
import { createProduto } from "@/actions/gerenciamento/tabela-gerenciamento/actions";
import Image from "next/image";
import { useRef, useState } from 'react';

export default function CreateCrud() {

  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      console.log("Arquivo selecionado:", file);
    }
  };
  
  return (
    <div className="h-fit flex flex-col lg:flex-row items-center justify-center shadow-2xl">
      <form action={createProduto} className="w-1/2 h-fit lg:border-r-4 border-black flex flex-col items-center justify-center gap-6 lg:p-5">
        <div className="w-48 h-48 bg-white ">
            {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="flex w-full h-full bg-gray-200">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={i % 2 === 0 ? "bg-gray-400" : "bg-transparent"} />
              ))}
            </div>
          )}

          <input
            type="file"
            name="image" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image"
            className="hidden"
          />

        </div>
        <button 
          type="button"
          onClick={handleButtonClick}
          className=" border border-black px-6 py-2 text-lg hover:bg-gray-50 transition-colors"
        >
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
      </form>

      {/* LADO DIREITO */}
      <form action={createProduto} className="w-1/2 h-fit flex flex-col justify-center lg:px-5 py-10 gap-4">
        <input
          type="text"
          placeholder="Nome*"
          className="border border-black px-4 py-3 outline-none"
          name="name"
        />
        <input
          type="text"
          placeholder="Preço*"
          className="border border-black px-4 py-3 outline-none"
          name="preco"
        />
        <textarea
          placeholder="Descrição*"
          rows={5}
          className="border border-black px-4 py-3 outline-none resize-none"
          name="descricao"
        />
        <div className="border-b border-black my-6" />
        <div className="flex items-center justify-center gap-2">
          <button className="bg-gray-300 text-black px-1 py-2 rounded-md"
            type="button" 
            onClick={() => window.history.back()}>
            Cancelar
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
