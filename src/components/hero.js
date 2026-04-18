"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/top.jpg" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Diseñamos espacios modernos con aluminio y vidrio
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Calidad, diseño personalizado e innovación para tu hogar o negocio
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/cotizar"><button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
            Cotizar
          </button></Link>
          <Link href="/projects"><button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Ver proyectos
          </button></Link>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',margin: '10px 0'}}>
        <Link href="https://wa.me/50585395835"><svg style={{width:'50px',height:'50px'}} viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></Link>
        <Link href="https://www.facebook.com/profile.php?id=100094371513520"><svg width="50" height="50" viewBox="0 0 20 20" fill="white"><path d="M10.821 20v-9h2.733l.446-4h-3.179V5.052C10.821 4.022 10.847 3 12.287 3h1.458V.14C13.745.097 12.492 0 11.226 0 8.58 0 6.923 1.657 6.923 4.7V7H4v4h2.923v9h3.898z"/></svg></Link>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero