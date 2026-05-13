export default function Footer() {
  return (
    <footer className="bg-[#042C53] py-10 px-12 mt-auto">
      <div className="flex flex-row items-center justify-between gap-2 text-center">
        <div className="font-[Cinzel_Decorative] text-2xl font-bold text-white tracking-wide">
          W<span className="text-green-light">L</span>
        </div>
        <p className="text-[11px] tracking-widest uppercase text-white/25 mt-1">
          © {new Date().getFullYear()} Wanderlist. Built with React.
        </p>
      </div>
    </footer>
  );
}
