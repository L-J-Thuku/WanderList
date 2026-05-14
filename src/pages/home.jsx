import { Link } from 'react-router-dom';
import DestinationCard from '../components/destination-form';
import DestinationList from '../components/destination-list';

export default function Home({ destinations, onDelete }) {
  const recent = destinations.slice(0, 3);
  const totalVisited = destinations.filter((d) => d.status === 'Visited').length;
  const totalWishlist = destinations.filter((d) => d.status === 'Wishlist').length;

  return (
    <div className="flex flex-col">
      <section
        className="min-h-140 flex items-center justify-center text-center px-10 py-16"
        style={{
          background: `linear-gradient(to bottom, rgba(4,44,83,0.5) 0%, rgba(4,44,83,0.18) 60%, rgba(234,243,222,0.4) 100%),
            url('src/assets/simon-english-48nerZQCHgo-unsplash.jpg') center/cover no-repeat`,
        }}
      >
        <div className="max-w-xl">
          <p className="font-[Display_Playfair_SC] text-[10px] tracking-[0.45em] uppercase text-green-light mb-5">
            Your journey begins here
          </p>
          <h1 className="font-[Playfair_Display] text-[62px] font-light text-white leading-[1.1] mb-5">
            Collect the World,<br />
            <em className="italic text-green-light">One Dream at a Time</em>
          </h1>
          <p className="font-[Playfair_Display] text-[14px] text-white/70 tracking-wide font-light mb-9 leading-relaxed">
            A curated bucket list for the endlessly curious traveller
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/add"
              className="text-white font-[Inter] text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm bg-[#3B6D11] hover:-translate-y-px transition-all duration-200">
              Start Your List
            </Link>
            <Link to="/destinations"
              className="bg-transparent text-white border border-white/50 font-[Inter] text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm hover:bg-white/10 hover:border-white transition-all duration-200">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
