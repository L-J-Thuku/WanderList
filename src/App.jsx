import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Destinations from './pages/destinations';
import DestinationDetail from './pages/destination-detail';
import AddDestination from './pages/add-destination';
import EditDestination from './pages/edit-destination';

export default function App() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // READ
  useEffect(() => {
    fetch('http://localhost:3000/destinations')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setDestinations)
      .catch(() => setError('Could not connect to the server. Is json-server running on port 3000?'))
      .finally(() => setLoading(false));
  }, []);

  // CREATE
  async function handleAdd(formData) {
    const res = await fetch('http://localhost:3000/destinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to add');
    const newDest = await res.json();
    setDestinations((prev) => [...prev, newDest]);
  }

  // UPDATE
  async function handleEdit(formData) {
    const res = await fetch(`${'http://localhost:3000/destinations'}/${formData.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to update');
    const updated = await res.json();
    setDestinations((prev) => prev.map((d) => (d.id === updated.id ? updated : d)));
  }

  // DELETE
  async function handleDelete(id) {
    const res = await fetch(`${'http://localhost:3000/destinations'}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete');
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <span className="font-cinzel text-[28px] font-bold text-[#042C53] tracking-wide">
          W<span className="text-green">L</span>
        </span>
        <p className="font-cormorant italic text-textmute text-[16px]">
          Loading your destinations…
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen px-10 text-center">
        <div>
          <p className="font-cinzel text-[13px] tracking-[0.2em] text-[#A32D2D] mb-3">
            CONNECTION ERROR
          </p>
          <p className="text-textmute max-w-md leading-relaxed">{error}</p>
          <code className="block mt-4 bg-green-pale text-[#3B6D11] px-4 py-2 rounded text-[13px]">
            json-server --watch db.json --port 5000
          </code>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"
              element={<Home destinations={destinations} onDelete={handleDelete} />} />
            <Route path="/destinations"
              element={<Destinations destinations={destinations} onDelete={handleDelete} />} />
            <Route path="/destinations/:id"
              element={<DestinationDetail destinations={destinations} onDelete={handleDelete} />} />
            <Route path="/destinations/:id/edit"
              element={<EditDestination destinations={destinations} onEdit={handleEdit} />} />
            <Route path="/add"
              element={<AddDestination onAdd={handleAdd} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
