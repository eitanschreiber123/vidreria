"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [filter,setFilter] = useState("Todos");
  const data = [
    { type:"Ventanas", cover:["/last.jpg","/nicaragua_5.jpg"], count:20 },
    { type:"Puertas", cover:["/puerta.jpg","/services/second.jpg"], count:15 },
    { type:"Baños", cover:["/bano.jpg","/services/third.jpg"], count:10 },
    { type:"Oficinas", cover:["/Oficinas/office.jpg"], count:0 }
  ];
  const getFolderImages = (type, count) => {
    return Array.from({ length: count }, (_, i) => {
      return `/${type}/${i + 1}.jpg`;
    });
  };
  return (
    <section className="py-20 bg-black/5">
      <h2 className="text-3xl text-center mb-6">Proyectos</h2>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["Todos","Ventanas","Puertas","Baños","Oficinas"].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition">{f}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-6 px-6">
  {data
          .filter(d => filter === "Todos" || d.type === filter)
          .flatMap((p, i) => {
            const folderImages = getFolderImages(p.type, p.count);
            const allImages = [...p.cover, ...folderImages];

            return allImages.map((imgSrc, index) => (
              <motion.div
                key={`${i}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={imgSrc}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ));
          })}
</div>
    </section>
  );
}
export default Projects