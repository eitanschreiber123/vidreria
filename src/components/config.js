"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Configurator = () => {
  // 🔥 LOCAL STORAGE (CACHE)
  const STORAGE_KEY = "vidrial_configurator";
  const [userImage,setUserImage]=useState(null);
  

  // 🔁 LOAD FROM CACHE
  useEffect(() => {
  if (typeof window === "undefined") return;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const data = JSON.parse(saved);
    setObjects(data.objects || []);
    setWallWidth(data.wallWidth || 300);
    setUserImage(data.userImage || null);
  }
}, []);
  const [objects,setObjects]=useState([]);
  const [active,setActive]=useState(null);
  const [wallWidth,setWallWidth]=useState(300); // cm

  const presets = {
    window: "/images/window.png",
    door: "/images/door.png",
    shower: "/images/shower.png"
  };

  const addObject = (type) => {
    const newObj = {
      id: Date.now(),
      type,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 0.9,
      realWidth: 100 // cm default
    };
    setObjects(prev => {
      const updated = [...prev,newObj];
      saveToCache({objects:updated,wallWidth,userImage});
      return updated;
    });
    setActive(newObj.id);
  };

  const updateObject = (id,changes) => {
    setObjects(prev => prev.map(o=>o.id===id?{...o,...changes}:o));
  };

  // 💾 SAVE TO CACHE
  const saveToCache = (state) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

  const handleUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    setUserImage(base64);
    saveToCache({ objects, wallWidth, userImage: base64 });
  };
  reader.readAsDataURL(file);
};

  const activeObj = objects.find(o=>o.id===active);

  // 📸 EXPORT
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
    const summary = objects.map(o => {
  return `• ${o.type} (${o.realWidth} cm)`;
}).join("%0A");

const text = encodeURIComponent(
  `Hola, acabo de crear un diseño en su configurador:%0A%0A` +
  `📐 Ancho de pared: ${wallWidth} cm%0A%0A` +
  `🧩 Elementos:%0A${summary}%0A%0A` +
  `Me gustaría recibir una cotización y más información.%0AGracias.`
);
    window.open(`https://wa.me/${phone}?text=${text}`,"_blank");
  };

  return (
    <section className="py-20 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-10">Visualiza tu proyecto</h2>

        <input id="upload" type="file" onChange={handleUpload} className="hidden" />

        <div className="text-center mb-6">
          <label htmlFor="upload" className="inline-block bg-black text-white px-6 py-3 rounded-xl cursor-pointer hover:scale-105 transition">
            Subir imagen de tu espacio
          </label>
        </div>

        {/* Wall size */}
        <div className="text-center mb-6">
          <label className="mr-2">Ancho pared (cm):</label>
          <input type="number" value={wallWidth} onChange={e=>setWallWidth(+e.target.value)} className="border px-2 py-1 w-24" />
        </div>

        {/* Add objects */}
        <div className="flex gap-4 justify-center mb-6">
          <button onClick={()=>addObject("window")} className="bg-black text-white px-4 py-2 rounded">+ Ventana</button>
          <button onClick={()=>addObject("door")} className="bg-black text-white px-4 py-2 rounded">+ Puerta</button>
          <button onClick={()=>addObject("shower")} className="bg-black text-white px-4 py-2 rounded">+ Baño</button>
        </div>

        {/* Controls */}
        {activeObj && (
          <div className="grid md:grid-cols-5 gap-4 mb-6 text-sm">
            <input type="range" min="0.5" max="2" step="0.1" value={activeObj.scale} onChange={e=>updateObject(active,{scale:+e.target.value})}/>
            <input type="range" min="-180" max="180" value={activeObj.rotation} onChange={e=>updateObject(active,{rotation:+e.target.value})}/>
            <input type="range" min="0.1" max="1" step="0.1" value={activeObj.opacity} onChange={e=>updateObject(active,{opacity:+e.target.value})}/>
            <input type="number" value={activeObj.realWidth} onChange={e=>updateObject(active,{realWidth:+e.target.value})} placeholder="cm" className="border px-2"/>
            <button onClick={()=>setObjects(objects.filter(o=>o.id!==active))} className="bg-red-500 text-white px-3 rounded">Eliminar</button>
          </div>
        )}

        {/* Canvas */}
        <div className="flex justify-center">
          {userImage && (
            <div id="canvas-area" className="relative">
              <img src={userImage} className="max-h-[600px] rounded-xl" />

              {objects.map(obj=>{
                const scaleFactor = obj.realWidth / wallWidth;
                return (
                  <motion.img
                    key={obj.id}
                    src={presets[obj.type]}
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

        {/* Export */}
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