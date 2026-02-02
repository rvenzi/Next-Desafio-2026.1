"use client";
import Link from "next/link";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from "phosphor-react";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t-2 border-black py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

                <div className="flex flex-col gap-4">
                    <Link href="/termos" className="text-black text-xl font-medium hover:underline">
                        Termos de uso
                    </Link>
                    <Link href="/privacidade" className="text-black text-xl font-medium hover:underline">
                        Política de privacidade
                    </Link>
                    
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[10px] border border-gray-200">
                            <Image 
                                src="/assets/Selo google.png"
                                alt="Google Safe"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div className="w-24 h-12 white flex items-center justify-center text-[10px] border border-gray-200">
                            <Image 
                                src="/assets/Selo google (1).png"
                                alt="Google Safe"
                                width={96}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Image 
                        src="/assets/logo.png"
                        alt="logo"
                        width={96}
                        height={48}
                        className="object-contain"
                    />
                    <span className="text-black text-2xl font-bold font-imbue">Pure Essence</span>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex items-center mr-5 ">
                        <h3 className="text-black text-2xl font-medium">Redes Sociais</h3>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" className="text-black hover:scale-110 transition-transform">
                            <FacebookLogo size={40} weight="fill" />
                        </Link>
                        <Link href="#" className="text-black hover:scale-110 transition-transform">
                            <WhatsappLogo size={40} weight="fill" />
                        </Link>
                        <Link href="#" className="text-black hover:scale-110 transition-transform">
                            <InstagramLogo size={40} weight="fill" />
                        </Link>
                        <Link href="#" className="text-black hover:scale-110 transition-transform">
                            <EnvelopeSimple size={40} weight="fill" />
                        </Link>
                    </div>
                    <p className="text-[10px] text-gray-500">
                        ©2026 Code Jr. Todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}