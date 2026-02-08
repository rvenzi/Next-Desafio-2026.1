"use client";
import Link from "next/link";
import Image from "next/image";


export default function PagContato() {
    return (
        <div className="flex flex-col items-center">
            <Image 
                src="/assets/img-pag-ctt.png"
                width={2560}
                height={720}
                alt="fundo pagina contato"
                className="object-cover -z-10 w-full h-full top-0 left-0"
                priority
            />
            
            <div className="bg-white flex flex-col absolute w-10/12 mt-5 md:mt-20 md:w-1/2 p-2 md:p-8 gap-4 md:gap-8 shadow-lg">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">Fale Conosco</h1>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">Preencha o formulário abaixo para entrar em contato conosco. Estamos ansiosos para ouvir de você!</p>
                </div>
                <div className="flex flex-col items-center gap-4 justify-center">
                    <div className="w-full border-2 border-black">
                        <input 
                            type="text" 
                            placeholder="Nome*"
                            className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div className="w-full border-2 border-black">
                        <input 
                            type="text" 
                            placeholder="Email*"
                            className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div className="w-full border-2 border-black">
                        <input 
                            type="text" 
                            placeholder="Assunto*"
                            className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div className="w-full border-2 border-black">
                        <textarea  
                            placeholder="Mensagem*"
                            className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-600 transition-colors">Enviar</button>
             
                    <div className="bg-white flex flex-col w-full p-2 md:p-8 gap-4 md:gap-8 border-2 border-black shadow-lg">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">Dados para Contato</h1>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">Endereço: Lorem Ipsum, 8923, Lorem Ipsum.</p>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">Telefone: (32) 4353-3346</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}