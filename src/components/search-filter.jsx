const STATUS_OPTIONS = ['All', 'Wishlist', 'Visited'];

export default function SearchFilter({ search, onSearchChange, activeStatus, onStatusChange }) {
  return (
    <div className="flex items-center gap-3 px-10 py-4.5 bg-white border-b border-[rgba(24,95,165,0.13)] flex-wrap">

      {/* Search box */}
      <div className="flex items-center gap-2 flex-1 min-w-[200px] bg-[#F4F8F2] border border-[rgba(24,95,165,0.13)] rounded-sm px-4 h-10 focus-within:border-blue-mid focus-within:bg-white transition-colors duration-200">
        <svg className="w-4 h-4 text-[#6b8fa8] shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M13.5 13.5L17 17" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-[13px] text-[#0c1f2e] placeholder:text-[#6b8fa8] placeholder:italic placeholder:text-[12px] font-jost"
        />
        {search && (
          <button
            onClick={() => onSearchChange('')}
            className="text-[11px] text-[#6b8fa8] hover:text-[#042C53] transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter chips */}
      <div className="flex gap-2">
        {STATUS_OPTIONS.map((status) => (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={`font-jost text-[10px] tracking-[0.15em] uppercase font-medium px-4 py-2 rounded-sm border transition-all duration-200 ${
              activeStatus === status
                ? 'bg-[#042C53] text-white border-[#042C53]'
                : 'bg-white text-[#6b8fa8] border-[rgba(24,95,165,0.13)] hover:border-blue-light hover:text-[#042C53]'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}
