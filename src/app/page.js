"use client"
import { motion } from "framer-motion";
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
    <div className="text-black min-h-screen">
      <div className="backdrop-blur-sm bg-white/70 min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 className="text-3xl text-center mb-10 font-semibold">Quienes Somos</h1>
        <div className="grid md:grid-cols-4 gap-6 px-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => <motion.div
  key={i}
  whileHover={{ scale: 1.05 }}
  className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition w-full h-40 ">
  <Image
    src={`/people/${i}.jpg`}
    fill
    style={{ objectFit: "cover",position:'relative' }}
    alt={`Persona ${i}`}
  />
</motion.div>)}
        </div>
        </section>
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
