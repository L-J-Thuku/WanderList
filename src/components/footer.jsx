import { Copyright } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#042C53] py-8 px-12 mt-auto">
      <div className="flex flex-row items-center justify-between gap-2 text-center">
        <div className="font-[Cinzel_Decorative] text-2xl font-bold text-white/60 tracking-wide">
          <span>WL</span>
        </div>
        <p className="flex text-[11px] gap-1 font-[Inter] tracking-widest uppercase text-white/60 mt-1">
          Images by
          <a href="https://unsplash.com/">
            <span>Unsplash</span>
          </a>
        </p>
        <p className="flex flex-row text-[11px] font-[Inter] tracking-widest uppercase text-white/60 mt-1">
          <Copyright className='flex items-center size-3 mr-1.5'/> 
          {new Date().getFullYear()} WanderList. Built with React.
        </p>
      </div>
    </footer>
  );
}
