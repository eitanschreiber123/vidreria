"use client"
import Image from "next/image";
import Navbar from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Configurator from "@/components/config";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const services = [
  {
    title: "Ventanas de aluminio",
    desc: "Diseños modernos que mejoran la estética y eficiencia de tu espacio.",
    img: "/services/first.jpg",
    features: ["Alta durabilidad", "Aislamiento térmico", "Diseño personalizado"],
  },
  {
    title: "Puertas de vidrio",
    desc: "Elegancia y funcionalidad con acabados de alta calidad.",
    img: "/services/second.jpg",
    features: ["Vidrio templado", "Diseño moderno", "Seguridad"],
  },
  {
    title: "Canceles de baño",
    desc: "Soluciones modernas para baños con estilo minimalista.",
    img: "/services/third.jpg",
    features: ["Fácil limpieza", "Alta resistencia", "Diseño elegante"],
  },
];
  return (
    <div className="text-black min-h-screen">
      <div className="backdrop-blur-sm bg-white/70 min-h-screen">
        <Navbar />
        <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Diseñamos espacios con estilo y durabilidad
        </h1>
        <p className="text-gray-600">
          Soluciones en aluminio y vidrio para hogares, negocios y grandes proyectos
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <span className="border px-4 py-2 rounded-full">Calidad garantizada</span>
          <span className="border px-4 py-2 rounded-full">Diseños personalizados</span>
          <span className="border px-4 py-2 rounded-full">Innovación y experiencia</span>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="border rounded-2xl overflow-hidden"
          >
            <img src={s.img} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>

              <ul className="text-sm text-gray-500 space-y-1">
                {s.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* SPECIAL SECTION (BAÑOS) */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/services/third.jpg" className="rounded-2xl" />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Especialistas en canceles de baño
            </h2>
            <p className="text-gray-600 mb-4">
              Diseños modernos en vidrio templado que transforman tu baño en un espacio elegante y funcional.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Vidrio templado de alta resistencia</li>
              <li>✔ Diseños minimalistas</li>
              <li>✔ Instalación profesional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl text-center mb-10">Cómo trabajamos</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Envíanos tu idea",
            "Te asesoramos",
            "Fabricamos",
            "Instalamos",
          ].map((step, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <div className="text-2xl font-bold mb-2">{i + 1}</div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Transformamos tus ideas en realidad
        </h2>
        <Link href="/cotizar"><button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-2 mx-auto">Cotizar</button></Link>
      </section>
        <Footer />
      </div>
    </div>
  );
}
