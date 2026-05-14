import { useState } from 'react';
import SearchFilter from '../components/search-filter';
import DestinationList from '../components/destination-list';

export default function Destinations({ destinations, onDelete }) {
  const [search, setSearch] = useState('');
  const [activeStatus, setActiveStatus] = useState('All');

  const filtered = destinations.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = activeStatus === 'All' || d.status === activeStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-[calc(100vh-68px)]">
      <div className="relative overflow-hidden bg-[#042C53] px-10 pt-10 pb-9">
        <div className="relative z-10">
          <p className="font-[Playfair_Display_SC] text-[10px] tracking-[0.35em] uppercase text-green-mid mb-3">
            Your collection
          </p>
          <h1 className="font-[Playfair_Display] text-[44px] font-light text-white leading-[1.15]">
            My Bucket List
          </h1>
          <p className="text-[12px] tracking-widest uppercase text-white/35 mt-3 font-[Playfair_Display_SC]">
            {filtered.length} {filtered.length === 1 ? 'destination' : 'destinations'}
            {activeStatus !== 'All' ? ` · ${activeStatus}` : ''}
          </p>
        </div>
      </div>

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        activeStatus={activeStatus}
        onStatusChange={setActiveStatus}
      />

      <DestinationList destinations={filtered} onDelete={onDelete} />
    </div>
  );
}
