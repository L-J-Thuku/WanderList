export default function Footer() {
  return (
    <footer className="bg-[#042C53] py-10 px-12 mt-auto">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="font-cinzel text-2xl font-bold text-white tracking-wide">
          W<span className="text-green-light">L</span>
        </div>
        <p className="font-cormorant italic text-base text-white/50">
          Collect the world, one dream at a time.
        </p>
        <p className="text-[11px] tracking-widest uppercase text-white/25 mt-1">
          © {new Date().getFullYear()} Wanderlist. Built with React.
        </p>
      </div>
    </footer>
  );
}
