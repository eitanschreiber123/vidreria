"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const items = [
    {text:"Ventanas de aluminio",image:'/nicaragua_5.jpg'},
    {text:"Puertas de vidrio",image:'/puerta.jpg'},
    {text:"Canceles de baño",image:'/bano.jpg'},
    {text:"Proyectos comerciales",image:'/last.jpg'}
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl text-center mb-10 font-semibold">Servicios</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((s,i)=>(
          <motion.div
  key={i}
  whileHover={{ scale: 1.05 }}
  className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
>
  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
    <Image
      src={s.image}
      fill
      style={{ objectFit: "cover" }}
      alt={s.text}
    />
  </div>

  <h3 className="font-semibold">{s.text}</h3>
</motion.div>
        ))}
      </div>
    </section>
  );
}
export default Services