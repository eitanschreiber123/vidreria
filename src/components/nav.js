import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <Link href="/" ><h1 className="font-bold text-xl tracking-wide">VIDRIAL</h1></Link>
      <div className="flex gap-8 text-sm font-medium">
        {[{text:"Servicios",link:'/services'},{text:"Proyectos",link:'/projects'},{text:"Cotizar",link:'/cotizar'}].map((item,i)=>(
          <Link key={i} href={item.link} className="relative group">
            {item.text}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default Navbar