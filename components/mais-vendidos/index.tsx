import MaisVendidosCard from "./card";

export default function MaisVendidos() {
  return (
    <div className="w-full space-y-12 mt-10 mb-20">
        <h2 className="text-2xl font-bold text-center">Mais Vendidos</h2>
        <div className="w-full flex justify-center gap-20 sm:gap-20 lg:gap-25 xl:gap-40 flex-wrap flex-row">
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
            <MaisVendidosCard />
        </div>
    </div>
  );
}