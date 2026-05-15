import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const linkBase =
    'text-[11px] tracking-[0.2em] uppercase font-medium pb-0.75 border-b-[1.5px]';
  const linkActive = 'text-blue border-green';
  const linkIdle   = 'text-[#6b8fa8] border-transparent hover:text-[#042C53]';

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-17 bg-[#FAFCFE]/95 backdrop-blur-sm border-b border-[rgba(24,95,165,0.13)]">
      <Link to="/" className="font-[Cinzel_Decorative] text-2xl font-bold text-[#042C53] tracking-wide">
        W<span className="text-[#3B6D11] font-[Cinzel_Decorative]">L</span>
      </Link>

      <div className="flex gap-9 font-[Playfair_Display_SC]">
        <Link
          to="/"
          className={`${linkBase} ${pathname === '/' ? linkActive : linkIdle}`}
        >
          Home
        </Link>
        <Link
          to="/destinations"
          className={`${linkBase} ${pathname.startsWith('/destinations') ? linkActive : linkIdle}`}
        >
          Destinations
        </Link>
      </div>

      <Link
        to="/add"
        className="bg-[#042C53] text-white font-[Display_Playfair_SC] text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 rounded-sm"
      >
        + Add Destination
      </Link>
    </nav>
  );
}
