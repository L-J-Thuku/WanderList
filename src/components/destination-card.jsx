import { Link } from 'react-router-dom';

const BADGE = {
  Wishlist: 'bg-blue-pale text-[#3B6D11]',
  Visited:  'bg-[#042C53] text-green-light',
};

export default function DestinationCard({ destination, onDelete }) {
  const { id, name, country, region, status, notes, coverPhoto } = destination;

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Remove ${name} from your bucket list?`)) {
      onDelete(id);
    }
  }

  return (
    <Link
      to={`/destinations/${id}`}
      className="block bg-white border border-[rgba(24,95,165,0.13)] rounded overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 group"
    >
      {/* Image */}
      <div
        className="h-44 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${coverPhoto || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'})`,
        }}
      >
        <span className={`absolute top-3 right-3 text-[9px] tracking-[0.15em] uppercase font-jost font-medium px-3 py-1.25 rounded-sm ${BADGE[status] || BADGE.Wishlist}`}>
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="px-5 pt-4.5] pb-4">
        <h3 className="font-cormorant text-[22px] font-medium text-[#042C53] leading-tight">
          {name}
        </h3>
        <p className="text-[11px] tracking-[0.15em] uppercase text-[#6b8fa8] mt-[3px]">
          {country}{region ? ` · ${region}` : ''}
        </p>
        {notes && (
          <p className="font-cormorant italic text-[15px] text-[#2a4a6b] leading-relaxed mt-[10px] line-clamp-2">
            "{notes}"
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-[14px]">
          <Link
            to={`/destinations/${id}/edit`}
            onClick={(e) => e.stopPropagation()}
            className="font-jost text-[10px] tracking-[0.15em] uppercase px-[14px] py-[6px] rounded-sm border border-[rgba(24,95,165,0.13)] text-[#2a4a6b] bg-white hover:border-blue-light hover:text-blue hover:bg-blue-pale transition-all duration-150"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="font-jost text-[10px] tracking-[0.15em] uppercase px-[14px] py-[6px] rounded-sm border border-[#F7C1C1] text-[#A32D2D] bg-white hover:bg-[#FCEBEB] transition-all duration-150"
          >
            Delete
          </button>
        </div>
      </div>
    </Link>
  );
}
