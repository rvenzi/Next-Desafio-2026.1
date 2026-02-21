import Image from "next/image";
import Link from "next/link";

export default function PagLogin() {
    return (
        <div className="w-full h-screen flex flex-row">
              <Image 
                src="/assets/login-img.png"
                width={425}
                height={200}
                alt="fundos de login"
                className="object-cover -z-10"
                priority
              />
              <div className="absolute flex items-center justify-center mt-2">
                <Link href="/" className="text-black w-20 p-2 text-md font-bold text-center ml-2 bg-white hover:bg-white/60 hover:scale-110 transition-transform rounded-2xl shadow-lg drop-shadow-lg">
                    voltar
                </Link>
              </div>

              <div className="absolute lg:relative mt-50 ml-15 md:mt-50 md:ml-70 lg:mt-0 lg:ml-0 flex flex-1 items-center justify-center bg-white lg:p-8">
                <div className="w-full max-w-md bg-[#EBE0D8] p-10 rounded-sm shadow-sm">
                    <form className="space-y-6">   
                        <div className="space-y-2">
                            <label className="block text-lg font-medium">Nome:</label>
                            <input
                                type="text"
                                placeholder="Nome Sobrenome"
                                className="w-full border-none p-3 bg-white text-gray-500 outline-none focus:ring-1 focus:ring-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg font-medium">Email:</label>
                            <input
                                type="email"
                                placeholder="seuemail@gmail.com"
                                className="w-full border-none p-3 bg-white text-gray-500 outline-none focus:ring-1 focus:ring-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg font-medium">Senha:</label>
                            <input
                                type="password"
                                placeholder="**************"
                                className="w-full border-none p-3 bg-white text-gray-500 outline-none focus:ring-1 focus:ring-gray-300"
                            />
                        </div>
                        <div className="flex justify-center pt-4">
                            <Link href={'/gerenciamento'} className="w-20 p-3 text-lg font-bold text-center text-white bg-black hover:bg-[#4B5563]/80 hover:scale-105 transition-transform rounded-2xl shadow-lg drop-shadow-lg">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}