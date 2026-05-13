import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EMPTY_FORM = {
  name: '',
  country: '',
  region: '',
  status: 'Wishlist',
  notes: '',
  coverPhoto: '',
};

const STATUS_OPTIONS  = ['Wishlist', 'Visited'];
const REGION_OPTIONS  = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Middle East'];

const BADGE = {
  Wishlist: 'bg-blue-pale text-[#3B6D11]',
  Visited:  'bg-[#042C53] text-green-light',
};

const inputBase =
  'w-full bg-white border border-[rgba(24,95,165,0.13)] rounded-sm px-[14px] py-[10px] text-[13px] text-[#0c1f2e] font-jost focus:outline-none focus:border-blue-mid focus:ring-2 focus:ring-blue-mid/10';

const labelBase =
  'font-cinzel text-[9px] tracking-[0.25em] uppercase text-[#6b8fa8] block mb-[6px]';

export default function DestinationForm({ onSubmit, existingData }) {
  const [form, setForm]       = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const navigate = useNavigate();
  const { id }   = useParams();
  const isEdit   = Boolean(id);

  useEffect(() => {
    if (existingData) setForm(existingData);
  }, [existingData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.country.trim()) {
      setError('Destination name and country are required.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await onSubmit(form);
      navigate('/destinations');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 px-12 py-12 max-w-5xl mx-auto items-start font-[Inter]">

      {/* Form */}
      <div>
        <p className="font-[Playfair_Display_SC] text-[10px] tracking-[0.35em] uppercase text-green mb-3">
          {isEdit ? 'Edit destination' : 'New destination'}
        </p>
        <h1 className="font-[Playfair_Display] text-[38px] font-light text-[#042C53] leading-[1.15] mb-2">
          {isEdit ? <>Update <em className="italic text-green">Your Journey</em></> : <>Add to Your <em className="italic text-green">Bucket List</em></>}
        </h1>
        <p className="text-[13px] text-[#6b8fa8] leading-relaxed mb-8 font-[Playfair_Display]">
          {isEdit
            ? 'Update the details for this destination.'
            : "Save a place you're dreaming of, planning to visit, or have already explored."}
        </p>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {error && (
            <div className="bg-[#FCEBEB] border border-[#F7C1C1] rounded-sm px-4 py-2.5 text-[13px] text-[#A32D2D]">
              {error}
            </div>
          )}

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelBase} htmlFor="name">Destination name *</label>
              <input id="name" name="name" type="text" placeholder="e.g. Amalfi Coast"
                value={form.name} onChange={handleChange} className={inputBase} required />
            </div>
            <div>
              <label className={labelBase} htmlFor="country">Country *</label>
              <input id="country" name="country" type="text" placeholder="e.g. Italy"
                value={form.country} onChange={handleChange} className={inputBase} required />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelBase} htmlFor="region">Region</label>
              <select id="region" name="region" value={form.region} onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer`}>
                <option value="">Select region...</option>
                {REGION_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className={labelBase} htmlFor="status">Status</label>
              <select id="status" name="status" value={form.status} onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer`}>
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Cover photo */}
          <div>
            <label className={labelBase} htmlFor="coverPhoto">Cover photo URL</label>
            <input id="coverPhoto" name="coverPhoto" type="url"
              placeholder="https://images.unsplash.com/..."
              value={form.coverPhoto} onChange={handleChange} className={inputBase} />
          </div>

          {/* Notes */}
          <div>
            <label className={labelBase} htmlFor="notes">Travel notes</label>
            <textarea id="notes" name="notes" rows={4}
              placeholder="What do you want to see, do, or remember about this place?"
              value={form.notes} onChange={handleChange}
              className={`${inputBase} resize-y min-h-25`} />
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => navigate(-1)}
              className="font-[Inter] text-[11px] tracking-[0.2em] uppercase px-6 py-3.5 rounded-sm border border-[rgba(24,95,165,0.13)] text-[#2a4a6b] bg-white hover:border-[#042C53] hover:text-[#042C53] transition-all duration-200">
              Cancel
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 font-[Inter] text-[11px] tracking-[0.2em] uppercase py-3.5 rounded-sm bg-green text-white bg-[#3B6D11] hover:-translate-y-px transition-all duration-200">
              {loading ? 'Saving...' : isEdit ? 'Update Destination' : 'Save to Bucket List'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
