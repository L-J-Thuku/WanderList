import { useParams, Link, useNavigate } from 'react-router-dom';

const BADGE = {
  Wishlist: 'bg-blue-pale text-[#042C53]',
  Planned:  'bg-green-pale text-[#3B6D11]',
  Visited:  'bg-[#042C53] text-green-light',
};

export default function DestinationDetail({ destinations, onDelete }) {
  const { id }      = useParams();
  const navigate    = useNavigate();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-10 text-center gap-4">
        <h2 className="font-cormorant text-[28px] text-[#042C53]">Destination not found</h2>
        <Link to="/destinations" className="text-[11px] tracking-widest uppercase text-blue hover:text-[#042C53] transition-colors">
          ← Back to list
        </Link>
      </div>
    );
  }

  const { name, country, region, status, notes, coverPhoto } = destination;

  function handleDelete() {
    if (window.confirm(`Remove ${name} from your bucket list?`)) {
      onDelete(destination.id);
      navigate('/destinations');
    }
  }

  return (
    <div className="flex flex-col">

      {/* Hero image */}
      <div
        className="h-[340px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${coverPhoto || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80'})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#042C53]/88 via-[#042C53]/20 to-transparent flex flex-col">
          <div className="flex flex-col justify-between h-full px-10 pt-6 pb-7">
            <Link
              to="/destinations"
              className="self-start text-[11px] tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors duration-150"
            >
              ← All Destinations
            </Link>
            <div className="flex items-end justify-between">
              <div>
                <h1 className="font-cormorant text-[52px] font-light text-white leading-[1.1]">
                  {name}
                </h1>
                <p className="text-[11px] tracking-[0.3em] uppercase text-green-light mt-1">
                  {country}{region ? ` · ${region}` : ''}
                </p>
              </div>
              <span className={`text-[9px] tracking-[0.15em] uppercase font-jost font-medium px-3 py-[5px] rounded-sm ${BADGE[status] || BADGE.Wishlist}`}>
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 px-10 py-10 bg-[#F4F8F2] items-start">

        {/* Notes */}
        <div>
          <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase text-blue mb-4">
            Travel Notes
          </p>
          {notes ? (
            <blockquote className="font-cormorant italic text-[20px] text-textmid leading-[1.7] border-l-2 border-green-light pl-5">
              "{notes}"
            </blockquote>
          ) : (
            <p className="text-[13px] text-textmute italic">
              No notes yet. Edit this destination to add some.
            </p>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-3">
          <div className="bg-white border border-border rounded p-5">
            <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase text-blue mb-4">
              Details
            </p>
            <div className="flex flex-col">
              {[
                { label: 'Status',  value: null,    badge: true  },
                { label: 'Country', value: country,  badge: false },
                ...(region ? [{ label: 'Region', value: region, badge: false }] : []),
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex justify-between items-center py-[10px] ${i < arr.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="text-[11px] text-textmute">{row.label}</span>
                  {row.badge ? (
                    <span className={`text-[9px] tracking-[0.15em] uppercase font-jost font-medium px-3 py-[4px] rounded-sm ${BADGE[status] || BADGE.Wishlist}`}>
                      {status}
                    </span>
                  ) : (
                    <span className="text-[13px] font-medium text-[#042C53]">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link
            to={`/destinations/${id}/edit`}
            className="block text-center bg-[#042C53] text-white font-jost text-[11px] tracking-[0.2em] uppercase py-[13px] rounded-sm hover:bg-blue transition-colors duration-200"
          >
            Edit Destination
          </Link>
          <button
            onClick={handleDelete}
            className="w-full text-center bg-white text-[#A32D2D] border border-[#F7C1C1] font-jost text-[11px] tracking-[0.2em] uppercase py-[13px] rounded-sm hover:bg-[#FCEBEB] transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
