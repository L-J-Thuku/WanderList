import DestinationCard from './destination-card';

export default function DestinationList({ destinations, onDelete }) {
  if (destinations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
        <h2 className="font-[Playfair_Display] text-[28px] text-[#042C53] mb-2">No destinations found</h2>
        <p className="font-[Inter] text-[14px] text-[#6b8fa8] max-w-sm leading-relaxed">
          Try adjusting your search or filter, or add a new destination.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-8 pb-12">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} onDelete={onDelete} />
      ))}
    </div>
  );
}
