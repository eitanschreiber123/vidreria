import Image from "next/image";
import Navbar from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Configurator from "@/components/config";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="text-black min-h-screen bg-[url('/images/bg-texture.jpg')] bg-cover bg-fixed">
      <div className="backdrop-blur-sm bg-white/70 min-h-screen">
        <Navbar />
        <h1>Cotizar</h1>
        <Configurator />
        <Footer />
      </div>
    </div>
  );
}
