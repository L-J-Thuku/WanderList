import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const linkBase =
    'text-[11px] tracking-[0.2em] uppercase font-medium pb-[3px] border-b-[1.5px] transition-colors duration-200';
  const linkActive = 'text-blue border-green';
  const linkIdle   = 'text-[#6b8fa8] border-transparent hover:text-[#042C53]';

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-17 bg-[#FAFCFE]/95 backdrop-blur-sm border-b border-[rgba(24,95,165,0.13)]">

      {/* Logo */}
      <Link to="/" className="font-cinzel text-2xl font-bold text-[#042C53] tracking-wide">
        W<span className="text-green">L</span>
      </Link>

      {/* Nav links */}
      <div className="flex gap-9">
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

      {/* CTA */}
      <Link
        to="/add"
        className="bg-[#042C53] text-white font-jost text-[11px] tracking-[0.2em] uppercase px-6 py-[10px] rounded-sm transition-all duration-200 hover:bg-blue hover:-translate-y-px"
      >
        + Add Destination
      </Link>
    </nav>
  );
}
