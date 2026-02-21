import HeroSection from "@/components/hero-section";
import MaisVendidos from "@/components/mais-vendidos";
import getMaisVendidos from "@/actions/home/actions";

export default async function Home() {
  
  const produtos = await getMaisVendidos()

  return (
    <div>
      <HeroSection />
      <MaisVendidos produtos = {produtos} />
    </div>
  );
}
