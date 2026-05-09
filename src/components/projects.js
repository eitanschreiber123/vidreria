"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Projects = () => {
  const [filter,setFilter] = useState("Todos");

  const newData = [
  {category: 'Puertas',
   sub: [
  { category: 'Ventanas y puertas pvc', img: 'nicaragua_1.jpg'},
  { category: 'Puerta de baño con acrilico', img: 'nicaragua_2.jpg' },
  { category: 'Puerta para Baño vidrio duplex', img: 'nicaragua_3.jpg' },
  { category: 'Puerta corrediza francesa', img: 'nicaragua_4.jpg' },
  { category: 'Puerta Abatible doble acción', img: ['nicaragua_5.jpg','nicaragua_25.jpg'] },
  { category: 'Puerta corrediza temperada', img: 'nicaragua_6.jpg' },
  { category: 'Puerta abatible temperada', img: 'nicaragua_8.jpg' },
  { category: 'Puertas de baño corrediza temperado 10mm', img: 'nicaragua_10.jpg' },
  { category: 'Puerta abatible para ducha', img: 'nicaragua_51.jpg' },
  { category: 'Puerta semilux abatible', img: 'nicaragua_52.jpg' },
  { category: 'Puerta corrediza con vidrios temperados', img: 'nicaragua_49.jpg' },
  { category: 'Puerta abatible aluminio madera', img: 'nicaragua_47.jpg' },
  { category: 'Puerta corrediza con panel.pvc', img: 'nicaragua_43.jpg' },
  { category: 'Puertas corredizas PVC', img: 'nicaragua_44.jpg' },
  { category: 'Puerta abatible estilo francesa', img: 'nicaragua_12.jpg' },
  { category: 'Puerta corrediza estilo francesa', img: 'nicaragua_13.jpg' },
  { category: 'Puerta abatible Europa blanca', img: 'nicaragua_16.jpg' },
  { category: 'Puerta europa 3 hojas blanca', img: 'nicaragua_17.jpg' },
  { category: 'Puerta abatible doble acción bronce', img: 'nicaragua_19.jpg' },
  { category: 'Puertas corredizas europa', img: 'nicaragua_21.jpg' },
  { category: 'Puertas de 3 hojas corredizas', img: 'nicaragua_22.jpg' },
  { category: 'Puertas abatibles y fachadas', img: 'nicaragua_23.jpg' },
  { category: 'Puertas plegables Europa', img: 'nicaragua_24.jpg' },
  { category: 'Puerta abatible', img: 'nicaragua_30.jpg' },
  { category: 'Puerta Europa clasica', img: 'nicaragua_32.jpg' },
  { category: 'Puerta temperada Eolo.con frost', img: 'nicaragua_34.jpg' },
  { category: 'Puerta temperada abatible', img: 'nicaragua_36.jpg' },
  { category: 'Puerta corrediza vidrio temperado 10mm L', img: 'nicaragua_37.jpg' },
  { category: 'Puerta temperada corrediza para ducha', img: 'nicaragua_39.jpg' },
  { category: 'Puertas doble.accion', img: 'nicaragua_40.jpg' },
  { category: 'Puerta para hospital', img: 'nicaragua_41.jpg' },
  { category: 'Otros', img: ["/puerta.jpg","/services/second.jpg"],count:15 }
   ]
  },
  {category: 'Ventanas',
   sub: [
    { category: 'Ventanas y puertas pvc', img: 'nicaragua_1.jpg'},
    { category: 'Ventanas corredizas europa clásica', img: 'nicaragua_11.jpg' },
    { category: 'Ventanas Corredizas,  Iso 1500', img: 'nicaragua_14.jpg' },
    { category: 'Ventanas Corredizas vc600', img: 'nicaragua_15.jpg' },
    { category: 'Ventana europa Camila Nogal', img: 'nicaragua_18.jpg' },
    { category: 'Ventana corrediza vc500 blanca', img: 'nicaragua_25.jpg' },
    { category: 'Ventana corrediza francesa', img: 'nicaragua_29.jpg' },
    { category: 'Otros', img:["/last.jpg","/nicaragua_other.jpg"], count:20}
   ]
  },
  {category: 'Fachadas',
   sub: [
    { category: 'Fachada y puerta temperada', img: 'nicaragua_7.jpg' },
    { category: 'Fachada con vidrios temperados', img: 'nicaragua_50.jpg' },
    { category: 'Fachada de vidrios fijos para tienda', img: 'nicaragua_53.jpg' }
   ]
  },
  {category: 'Barandal',
   sub: [
    { category: 'Barandal de acero inoxidable y vidrios', img: 'nicaragua_28.jpg' },
    { category: 'Barandal glass clip vidrios temperados 10mm', img: 'nicaragua_33.jpg' },
    { category: 'Barandal de vidrio y acero inoxidable', img: 'nicaragua_38.jpg' },
    { category: 'Barandal de tubitos de acero', img: 'nicaragua_46.jpg' }
   ]
  },
  {category: 'Vitrinas',
   sub: [
    { category: 'Vitrinas de vidrios', img: 'nicaragua_27.jpg' },
    { category: 'Vitrina vertical', img: 'nicaragua_31.jpg' }
   ]
  },
  {category: 'Cabinas',
   sub: [
     { category: 'Cabina para ducha, temperado', img: 'nicaragua_9.jpg' },
     { category: 'Cabina para ducha con aluminio y vidrio duplex', img: 'nicaragua_26.jpg' },
     { category: 'Cabinas para Caja', img: 'nicaragua_42.jpg' }
   ]
  },
  {category:'Otros',
    sub: [
      { category: 'Particiones para sanitarios', img: 'nicaragua_20.jpg' },
      { category: 'Europa clasica.con cedazo', img: 'nicaragua_35.jpg' },
      { category: 'Francesa blanca panorámicas', img: 'nicaragua_45.jpg' },
      { category: 'Mamparas de vidrios temperados de 10mm', img: 'nicaragua_48.jpg' },
      { category: 'Baños', img: ["/bano.jpg","/services/third.jpg"], count:10 },
      { category: 'Oficinas', img: '/Oficinas/office.jpg' }
    ]
  }
]

  const getFolderImages = (type, count) => {
    return Array.from({ length: count }, (_, i) => {
      return `/${type}/${i + 1}.jpg`;
    });
  };

  return (
    <section className="py-20 bg-black/5">
      <h2 className="text-3xl text-center mb-6">Proyectos</h2>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {newData.map(n => n.category).concat('Todos').map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
          >
            {f}
          </button>
        ))}
      </div>

      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {
          newData
            .filter(d => filter === "Todos" || d.category === filter)
            .flatMap((p, i) =>
              p.sub.map((s, index) => {

                let images = [];

                // If img is an array
                if (Array.isArray(s.img)) {
                  images = [...s.img];
                }
                // If img is a string
                else if (typeof s.img === 'string') {
                  images = [s.img];
                }

                // If count exists, add folder images
                if (s.count) {
                  const folderImages = getFolderImages(p.category !== 'Otros' ? p.category : s.category, s.count);
                  images = [...images, ...folderImages];
                }

                return (
                  <div
                    key={`${s.category}-${index}`}
                    style={{display:'flex',flexDirection:'column',alignItems:'center'}}
                    className="mb-10"
                  >
                    <h1 className="text-2xl font-semibold px-6 mb-4">
                      {s.category}
                    </h1>

                    <div
  className="flex flex-wrap gap-6 px-6 justify-center"
  style={{ maxWidth: "1400px" }}
>
                      {
                        images.map((img, imgIndex) => (
                          <motion.div
                            key={`${img}-${imgIndex}`}
                            whileHover={{ scale: 1.03 }}
                            className="overflow-hidden rounded-2xl shadow-lg bg-white flex-shrink-0"
style={{ width: "300px" }}
                          >
                            <img
                              src={img.startsWith('/') ? img : `/${img}`}
                              alt={s.category}
                              className="w-full h-64 object-cover"
                            />
                          </motion.div>
                        ))
                      }
                    </div>
                  </div>
                )
              })
            )
        }
      </div>
    </section>
  );
}

export default Projects