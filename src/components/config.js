"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Configurator = () => {
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
  { category: 'Otros', img: ["puerta.jpg","services/second.jpg"],count:15 }
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
    { category: 'Otros', img:["last.jpg","nicaragua_other.jpg"], count:20}
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
      { category: 'Baños', img: ["bano.jpg","services/third.jpg"], count:10 },
      { category: 'Oficinas', img: 'Oficinas/office.jpg' }
    ]
  }
]
const getFolderImages = (type, count) => {
    return Array.from({ length: count }, (_, i) => {
      return `/${type}/${i + 1}.jpg`;
    });
  };
  const STORAGE_KEY = "vidrial_configurator";

  const [userImage,setUserImage]=useState(null);
  const [objects,setObjects]=useState([]);
  const [active,setActive]=useState(null);
  const [wallWidth,setWallWidth]=useState(300);
  const [search,setSearch]=useState("");

  // LOAD CACHE
  useEffect(()=>{
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){
      const data = JSON.parse(saved);
      setObjects(data.objects||[]);
      setWallWidth(data.wallWidth||300);
      setUserImage(data.userImage||null);
    }
  },[]);

  const saveToCache = (state)=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  };

  const handleUpload=(e)=>{
    const file=e.target.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = ()=>{
      const base64 = reader.result;
      setUserImage(base64);
      saveToCache({objects,wallWidth,userImage:base64});
    };
    reader.readAsDataURL(file);
  };

  const addObject = (item) => {
    const newObj = {
      id: Date.now(),
      type: item.category,
      img: Array.isArray(item.img)?item.img[0]:item.img,
      x:0,y:0,scale:1,rotation:0,opacity:0.9,realWidth:100
    };

    setObjects(prev=>{
      const updated=[...prev,newObj];
      saveToCache({objects:updated,wallWidth,userImage});
      return updated;
    });

    setActive(newObj.id);
  };

  const updateObject=(id,changes)=>{
    const updated = objects.map(o=>o.id===id?{...o,...changes}:o);
    setObjects(updated);
    saveToCache({objects:updated,wallWidth,userImage});
  };

  const activeObj = objects.find(o=>o.id===active);

  const filtered = filter === 'Todos' ? newData.flatMap(parent => parent.sub).filter(item=>
    item.category.toLowerCase().includes(search.toLowerCase())
  ) : newData.find(parent => parent.category === filter)?.sub.filter(item=>
    item.category.toLowerCase().includes(search.toLowerCase())
  ) || [];

  // EXPORT + WHATSAPP
  const exportImage = async () => {
    const el = document.getElementById("canvas-area");
    if(!el) return;

    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(el);
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "diseno.png";
    link.href = dataUrl;
    link.click();

    const phone = "50585395835";
    const summary = objects.map(o=>`• ${o.type} (${o.realWidth} cm)`).join("%0A");

    const text = encodeURIComponent(
      `Hola, acabo de crear un diseño:%0A%0A`+
      `📐 Pared: ${wallWidth} cm%0A%0A`+
      `🧩 Productos:%0A${summary}%0A%0A`+
      `Quiero una cotización.`
    );

    window.open(`https://wa.me/${phone}?text=${text}`,"_blank");
  };

  return (
    <section className="py-20 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-10">Cotiza tu proyecto</h2>

        <input id="upload" type="file" onChange={handleUpload} className="hidden" />
        <div className="text-center mb-6">
          <label htmlFor="upload" className="bg-black text-white px-6 py-3 rounded-xl cursor-pointer">
            Subir imagen
          </label>
        </div>

        <div className="text-center mb-6">
          <label>Ancho pared (cm):</label>
          <input type="number" value={wallWidth} onChange={e=>setWallWidth(+e.target.value)} className="border px-2 ml-2 w-24" />
        </div>

        <input
          placeholder="Buscar producto..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
          className="w-full mb-6 p-3 border rounded-xl"
        />
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {filtered.map((item,i)=>(
            <div key={i} onClick={()=>addObject(item)} className="cursor-pointer bg-white rounded-xl shadow">
              <img src={`/${Array.isArray(item.img)?item.img[0]:item.img}`} className="h-32 w-full object-cover rounded-t-xl" />
              <p className="p-2 text-xs">{item.category}</p>
            </div>
          ))}
        </div>

        {activeObj && (
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            <input type="range" min="0.5" max="2" step="0.1" value={activeObj.scale} onChange={e=>updateObject(active,{scale:+e.target.value})}/>
            <input type="range" min="-180" max="180" value={activeObj.rotation} onChange={e=>updateObject(active,{rotation:+e.target.value})}/>
            <input type="range" min="0.1" max="1" step="0.1" value={activeObj.opacity} onChange={e=>updateObject(active,{opacity:+e.target.value})}/>
            <input type="number" value={activeObj.realWidth} onChange={e=>updateObject(active,{realWidth:+e.target.value})} className="border px-2"/>
            <button onClick={()=>{
              const updated=objects.filter(o=>o.id!==active);
              setObjects(updated);
              saveToCache({objects:updated,wallWidth,userImage});
            }} className="bg-red-500 text-white">Eliminar</button>
          </div>
        )}

        <div className="flex justify-center">
          {userImage && (
            <div id="canvas-area" className="relative">
              <img src={userImage} className="max-h-[600px] rounded-xl" />

              {objects.map(obj=>{
                const scaleFactor = obj.realWidth / wallWidth;
                return (
                  <motion.img
                    key={obj.id}
                    src={`/images/${obj.img}`}
                    drag
                    onClick={()=>setActive(obj.id)}
                    style={{
                      x: obj.x,
                      y: obj.y,
                      scale: obj.scale * scaleFactor * 5,
                      rotate: obj.rotation,
                      opacity: obj.opacity
                    }}
                    onDragEnd={(e,info)=>{
                      updateObject(obj.id,{x:obj.x+info.offset.x,y:obj.y+info.offset.y})
                    }}
                    className={`absolute top-1/2 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 cursor-move ${active===obj.id?"ring-2 ring-green-500":""}`}
                  />
                )
              })}
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <button onClick={()=>{
            saveToCache({objects,wallWidth,userImage});
            exportImage();
          }} className="bg-green-500 text-white px-6 py-3 rounded-xl">
            Descargar + Enviar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
export default Configurator