import { Link } from 'react-router-dom';
import DestinationCard from '../components/destination-form';
import DestinationList from '../components/destination-list';

export default function Home({ destinations, onDelete }) {
  const recent = destinations.slice(0, 3);
  const totalVisited = destinations.filter((d) => d.status === 'Visited').length;
  const totalWishlist = destinations.filter((d) => d.status === 'Wishlist').length;

  return (
    <div className="flex flex-col">
      {/* Hero */}
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
              className="text-white font-jost text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm bg-[#3B6D11] hover:-translate-y-px transition-all duration-200">
              Start Your List
            </Link>
            <Link to="/destinations"
              className="bg-transparent text-white border border-white/50 font-jost text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm hover:bg-white/10 hover:border-white transition-all duration-200">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Recent destinations */}
      {destinations.length > 0 ? (
        <section className="px-10 py-12 bg-[#F4F8F2]">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-[Display_Playfair] text-[34px] text-[#042C53]">
              <em className="text-green">Recent Destinations</em>
            </h2>
            <Link to="/destinations"
              className="text-[11px] tracking-[0.2em] uppercase text-blue border-b border-blue-light pb-0.5 hover:text-[#042C53] transition-colors duration-150">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} onDelete={onDelete} />
            ))}
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center py-20 px-10 text-center bg-[#F4F8F2]">
          <h2 className="font-[Inter] text-[32px] text-[#042C53] mb-3">
            Your bucket list is empty
          </h2>
          <p className="font-[Inter] text-[14px] text-[#6b8fa8] max-w-sm leading-relaxed mb-6">
            Add your first dream destination and start building your travel story.
          </p>
          <Link to="/add"
            className="text-white font-[Inter] text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm bg-[#3B6D11] transition-colors duration-200">
            + Add Your First Destination
          </Link>
        </section>
      )}
    </div>
  );
}
