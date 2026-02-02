"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col border-b-3 border-b-black items-center gap-6">
      <Image 
        src="/assets/Frame 12.png"
        width={2560}
        height={720}
        alt="fundo hero"
        className="object-cover -z-10"
        priority
      />
      <div className="absolute flex items-center justify-center xl:mt-60 lg:mt-40 md:mt-25 mt-15 bp-840:mt-35 sm:px-2 sm:py-10 px-0 py-2 bg-white/35 hover:bg-white/60 hover:scale-110 transition-transform rounded-2xl shadow-lg">
        <h1 className="text-black sm:w-100 w-50 sm:text-3xl lg:text-4xl text-sm font-bold text-center px-4 drop-shadow-lg">
          Perfumaria nacional e importada de melhor qualidade
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex sm:flex-row flex-col items-center pb-6 gap-5 xl:gap-50 md:gap-20 mb-black">
          <div className="flex flex-col text-center">
            <h2 className="text-black text-xl font-bold">Missão</h2>
            <p className="text-black w-70 sm:w-45 lg:w-70 text-sm text-center">Proporcionar experiências sensoriais únicas através da curadoria dos melhores perfumes do mundo, conectando cada cliente à fragrância que expressa sua verdadeira essência e eleva sua autoestima.</p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="text-black text-xl font-bold">Visão</h2>
            <p className="text-black  w-70 sm:w-45 lg:w-70 text-sm text-center">Ser a principal referência no mercado de perfumaria, reconhecida pela excelência no atendimento personalizado e por transformar a escolha em um momento de autodescoberta e sofisticação.</p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="text-black text-xl font-bold">Valores</h2>
            <p className="text-black w-70 sm:w-45 lg:w-70 text-sm text-center">Trabalhamos com autenticidade e qualidade, garantindo produtos que elevam a confiança. Encantando o cliente, unindo transparência e paixão, transformando fragrância em bem-estar e sofisticação.</p>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
      
  );
} 