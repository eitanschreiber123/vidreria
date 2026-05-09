"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {

const newData = [
  {
    category: 'Puertas',
    desc: 'Elegancia y funcionalidad con acabados de alta calidad',
    features: ["Vidrio templado", "Diseño moderno", "Seguridad"],
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
      { category: 'Otros', img: ['puerta.jpg','services/second.jpg'], count: 15 }
    ]
  },
  {
    category: 'Ventanas',
    desc: 'Diseños modernos que mejoran la estética y eficiencia de tu espacio',
    features: ["Alta durabilidad", "Aislamiento térmico", "Diseño personalizado"],
    sub: [
      { category: 'Ventanas y puertas pvc', img: 'nicaragua_1.jpg'},
      { category: 'Ventanas corredizas europa clásica', img: 'nicaragua_11.jpg' },
      { category: 'Ventanas Corredizas, Iso 1500', img: 'nicaragua_14.jpg' },
      { category: 'Ventanas Corredizas vc600', img: 'nicaragua_15.jpg' },
      { category: 'Ventana europa Camila Nogal', img: 'nicaragua_18.jpg' },
      { category: 'Ventana corrediza vc500 blanca', img: 'nicaragua_25.jpg' },
      { category: 'Ventana corrediza francesa', img: 'nicaragua_29.jpg' },
      { category: 'Otros', img:['last.jpg','nicaragua_other.jpg'], count:20 }
    ]
  },
  {
    category: 'Fachadas',
    sub: [
      { category: 'Fachada y puerta temperada', img: 'nicaragua_7.jpg' },
      { category: 'Fachada con vidrios temperados', img: 'nicaragua_50.jpg' },
      { category: 'Fachada de vidrios fijos para tienda', img: 'nicaragua_53.jpg' }
    ]
  },
  {
    category: 'Barandal',
    sub: [
      { category: 'Barandal de acero inoxidable y vidrios', img: 'nicaragua_28.jpg' },
      { category: 'Barandal glass clip vidrios temperados 10mm', img: 'nicaragua_33.jpg' },
      { category: 'Barandal de vidrio y acero inoxidable', img: 'nicaragua_38.jpg' },
      { category: 'Barandal de tubitos de acero', img: 'nicaragua_46.jpg' }
    ]
  },
  {
    category: 'Vitrinas',
    sub: [
      { category: 'Vitrinas de vidrios', img: 'nicaragua_27.jpg' },
      { category: 'Vitrina vertical', img: 'nicaragua_31.jpg' }
    ]
  },
  {
    category: 'Cabinas',
    sub: [
      { category: 'Cabina para ducha, temperado', img: 'nicaragua_9.jpg' },
      { category: 'Cabina para ducha con aluminio y vidrio duplex', img: 'nicaragua_26.jpg' },
      { category: 'Cabinas para Caja', img: 'nicaragua_42.jpg' }
    ]
  },
  {
    category: 'Otros',
    sub: [
      { category: 'Particiones para sanitarios', img: 'nicaragua_20.jpg' },
      { category: 'Europa clasica.con cedazo', img: 'nicaragua_35.jpg' },
      { category: 'Francesa blanca panorámicas', img: 'nicaragua_45.jpg' },
      { category: 'Mamparas de vidrios temperados de 10mm', img: 'nicaragua_48.jpg' },
      { category: 'Baños', img: ['bano.jpg','services/third.jpg'], count:10 },
      { category: 'Oficinas', img: 'Oficinas/office.jpg' }
    ]
  }
]

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Diseñamos espacios con estilo y durabilidad
        </h1>
        <p className="text-gray-600">
          Soluciones en aluminio y vidrio para hogares, negocios y grandes proyectos
        </p>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Fabricamos e instalamos puertas, ventanas, fachadas, barandales,
          vitrinas y cabinas con diseños modernos, materiales resistentes y
          acabados profesionales.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-8">
          <span className="border px-5 py-2 rounded-full">
            Vidrio templado
          </span>
          <span className="border px-5 py-2 rounded-full">
            PVC y aluminio
          </span>
          <span className="border px-5 py-2 rounded-full">
            Instalación profesional
          </span>
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        {newData.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'20px'}}>
                <h2 className="text-4xl font-bold mb-2">
                  {group.category}
                </h2>
                {group.desc && <p className="text-gray-500">{group.desc}</p>}
                <ul className="text-sm text-gray-500 space-y-1">
                {group.features?.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
                <p className="text-gray-500">
                  {group.sub.length} servicios disponibles
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {group.sub.map((item, index) => {
                const image = Array.isArray(item.img)
                  ? item.img[0]
                  : item.img

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="border rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={`/${image}`}
                        alt={item.category}
                        className="h-64 w-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold leading-snug mb-3">
                        {item.category}
                      </h3>

                      <div className="flex gap-3 mt-4">
                        <Link
                          href="/cotizar"
                          className="flex-1 text-center bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
                        >
                          Cotizar
                        </Link>

                        <Link
                          href="/cotizar" className="border px-4 rounded-xl hover:bg-gray-100 transition">
                          Ver más
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Cómo trabajamos
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Cuéntanos tu idea',
                desc: 'Comparte medidas, fotos o referencias de tu proyecto.'
              },
              {
                title: 'Asesoría personalizada',
                desc: 'Te ayudamos a elegir el mejor diseño y materiales.'
              },
              {
                title: 'Fabricación',
                desc: 'Fabricamos cada pieza con precisión y acabados profesionales.'
              },
              {
                title: 'Instalación',
                desc: 'Nuestro equipo realiza una instalación segura y limpia.'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border text-center"
              >
                <div className="text-5xl font-bold text-gray-200 mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-semibold text-xl mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para transformar tu espacio?
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Creamos proyectos personalizados para hogares, oficinas, negocios y
          construcciones modernas.
        </p>

        <Link
          href="/cotizar"
          className="bg-black text-white px-10 py-4 rounded-2xl inline-block hover:opacity-90 transition"
        >
          Solicitar cotización
        </Link>
      </section>

      <Footer />
    </div>
  )
}