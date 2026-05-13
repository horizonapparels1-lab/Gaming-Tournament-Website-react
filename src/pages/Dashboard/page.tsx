import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Types ───────────────────────────────────────────────── */
type BarData = { heights: number[]; values: string[] };

/* ── Chart data ──────────────────────────────────────────── */
const qtyData: BarData = { heights: [60, 85, 40, 70, 95], values: ['120', '170', '80', '140', '190'] };
const valData: BarData = { heights: [95, 70, 30, 50, 40], values: ['$47.8K', '$33.8K', '$11.9K', '$13.9K', '$11.2K'] };
const barLabels = ['Monitors', 'Keyboards', 'Mice', 'Headsets', 'Mousepads'];

/* ── Shared input helpers ────────────────────────────────── */
const inputCls = "w-full px-4 py-3.5 rounded-lg text-base bg-[#080810] text-[#f0f0ff] outline-none transition-all duration-300";
const inputStyle = { border: '2px solid #2a2a4a', fontFamily: "'Inter', sans-serif" };
const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { e.target.style.borderColor = '#22d3ee'; };
const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { e.target.style.borderColor = '#2a2a4a'; };

/* ── Modal wrapper ───────────────────────────────────────── */
function Modal({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[200] p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-[600px] rounded-2xl p-[50px] max-h-[90vh] overflow-y-auto"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg text-xl text-[#a0a0cc] transition-all duration-300 hover:text-white"
          style={{ background: 'rgba(255,255,255,0.05)', border: 'none' }}
        >
          &times;
        </button>
        <h2 className="mb-6 text-[1.5rem] text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

/* ── Shared table ────────────────────────────────────────── */
function StockTable({ compact = false }: { compact?: boolean }) {
  const rows = [
    { id: '#001', name: compact ? 'Alienware Monitor'  : 'Alienware 27" Monitor', cat: 'Monitors',  qty: 120, price: '$399', low: false },
    { id: '#002', name: 'SteelSeries Apex Pro',                                   cat: 'Keyboards', qty: 170, price: '$199', low: false },
    { id: '#003', name: 'Logitech G Pro X',                                        cat: 'Mice',      qty: 12,  price: '$149', low: true  },
    { id: '#004', name: 'HyperX Cloud II',                                         cat: 'Headsets',  qty: 140, price: '$99',  low: false },
    { id: '#005', name: 'Corsair MM700 XL',                                        cat: 'Mousepads', qty: 190, price: '$59',  low: false },
  ];
  const headers = compact
    ? ['ID', 'Item Name', 'Category', 'Qty', 'Price']
    : ['ID', 'Item Name', 'Category', 'Quantity', 'Unit Price', 'Status'];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full rounded-2xl overflow-hidden" style={{ borderCollapse: 'collapse', background: '#111127', boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }}>
        <thead style={{ background: 'linear-gradient(135deg, #1a1a3a, #0d0d2a)' }}>
          <tr>
            {headers.map(h => (
              <th key={h} className="px-6 py-5 text-left font-bold text-[0.85rem] uppercase tracking-widest text-cyan-400"
                style={{ fontFamily: "'Orbitron', sans-serif", borderBottom: '2px solid #2a2a4a' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id} className="cursor-pointer transition-all duration-300"
              style={{ background: i % 2 === 0 ? '#111127' : 'rgba(0,0,0,0.2)', borderBottom: i < rows.length - 1 ? '1px solid #2a2a4a' : 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLTableRowElement).style.background = 'linear-gradient(90deg, rgba(124,58,237,0.08), rgba(34,211,238,0.08))'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLTableRowElement).style.background = i % 2 === 0 ? '#111127' : 'rgba(0,0,0,0.2)'; }}
            >
              <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.id}</td>
              <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.name}</td>
              <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.cat}</td>
              <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.qty}</td>
              <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.price}</td>
              {!compact && (
                <td className="px-6 py-[18px] align-middle">
                  <span
                    className="px-3 py-1 rounded-full text-[0.8rem] font-bold"
                    style={r.low
                      ? { background: 'rgba(244,63,94,0.15)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.3)' }
                      : { background: 'rgba(34,197,94,0.15)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }
                    }
                  >
                    {r.low ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Dashboard ───────────────────────────────────────────── */
export default function Dashboard() {
  const [activeChart, setActiveChart] = useState<'qty' | 'val'>('qty');
  const [viewModal,   setViewModal]   = useState(false);
  const [insertModal, setInsertModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [newName,     setNewName]     = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newQty,      setNewQty]      = useState('');
  const [newPrice,    setNewPrice]    = useState('');
  const [updId,       setUpdId]       = useState('');
  const [updQty,      setUpdQty]      = useState('');
  const [updPrice,    setUpdPrice]    = useState('');
  const [delId,       setDelId]       = useState('');

  const chartData = activeChart === 'qty' ? qtyData : valData;

  function handleInsert() {
    if (!newName || !newCategory || !newQty || !newPrice) { alert('Please fill in all fields.'); return; }
    alert(`✅ Item "${newName}" (${newCategory}) — Qty: ${newQty}, Price: $${newPrice} has been added!`);
    setInsertModal(false); setNewName(''); setNewCategory(''); setNewQty(''); setNewPrice('');
  }
  function handleUpdate() {
    if (!updId) { alert('Please enter a Stock ID to update.'); return; }
    alert(`✅ Stock record "${updId}" updated — New Qty: ${updQty || 'unchanged'}, New Price: ${updPrice ? '$' + updPrice : 'unchanged'}`);
    setUpdateModal(false); setUpdId(''); setUpdQty(''); setUpdPrice('');
  }
  function handleDelete() {
    if (!delId) { alert('Please enter a Stock ID to delete.'); return; }
    if (window.confirm(`Are you sure you want to permanently delete stock record "${delId}"?`)) {
      alert(`🗑️ Stock record "${delId}" has been deleted.`);
      setDeleteModal(false); setDelId('');
    }
  }

  /* KPI cards config */
  const kpiCards = [
    { icon: '📦', num: '700',  label: 'Total Stock Items', change: '+12% this month',   accent: '#22d3ee', bg: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.2)'  },
    { icon: '⚠️', num: '3',    label: 'Low Stock Alerts',  change: 'Needs restocking',  accent: '#f43f5e', bg: 'rgba(244,63,94,0.08)',   border: 'rgba(244,63,94,0.2)'   },
    { icon: '🗂️', num: '5',    label: 'Categories',        change: 'All monitored',     accent: '#7c3aed', bg: 'rgba(124,58,237,0.08)',  border: 'rgba(124,58,237,0.2)'  },
    { icon: '💰', num: '$48K', label: 'Inventory Value',   change: '+5% this quarter',  accent: '#fbbf24', bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.2)'  },
  ];

  /* Action cards config */
  const actionCards = [
    { icon: '👁️', title: 'View All Stock',   desc: 'Browse the complete inventory of all items in the database.',    label: 'View All Records', onClick: () => setViewModal(true),   accent: '#22d3ee' },
    { icon: '➕', title: 'Insert New Stock', desc: 'Add new equipment items to the inventory database.',              label: 'Add New Item',     onClick: () => setInsertModal(true), accent: '#22c55e' },
    { icon: '✏️', title: 'Update Stock',     desc: 'Modify quantity or details of existing stock records.',           label: 'Update Record',    onClick: () => setUpdateModal(true), accent: '#7c3aed' },
    { icon: '🗑️', title: 'Delete Stock',     desc: 'Remove discontinued or obsolete items from the system.',         label: 'Delete Record',    onClick: () => setDeleteModal(true), accent: '#f43f5e' },
  ];

  const quickLinks = [
    { to: '#',           label: '📤 Export CSV' },
    { to: '#',           label: '📊 Generate Report' },
    { to: '#',           label: '🔔 Stock Alerts' },
    { to: '#',           label: '🗃️ Archive Records' },
    { to: '#',           label: '⚙️ Stock Settings' },
    { to: '#',           label: '📋 Audit Log' },
    { to: '/signup',     label: '🏆 Tournament Teams' },
    { to: '/leaderboard',label: '📈 Leaderboard' },
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      <div className="w-full">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[2.5rem] text-[#f0f0ff] mb-3" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Stock Management Dashboard
          </h1>
          <p className="text-[1.05rem] text-[#a0a0cc]">
            Monitor, manage and control all tournament equipment inventory in one place.
          </p>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {kpiCards.map(({ icon, num, label, change, accent, bg, border }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2 rounded-2xl p-7 transition-all duration-300"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <span className="text-3xl">{icon}</span>
              <span className="font-black text-[2rem]" style={{ fontFamily: "'Orbitron', sans-serif", color: accent }}>{num}</span>
              <span className="text-[0.9rem] text-[#a0a0cc]">{label}</span>
              <span className="text-[0.8rem] text-[#666688]">{change}</span>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {actionCards.map(({ icon, title, desc, label, onClick, accent }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 rounded-2xl p-7 transition-all duration-300"
              style={{ background: '#111127', border: '1px solid #2a2a4a' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a'; }}
            >
              <span className="text-3xl">{icon}</span>
              <h3 className="m-0 text-[1rem] text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h3>
              <p className="m-0 text-[0.85rem] text-[#a0a0cc] flex-1">{desc}</p>
              <button
                onClick={onClick}
                className="btn-shimmer mt-2 px-5 py-2.5 text-[0.9rem] rounded-lg font-bold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)', border: 'none', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(124,58,237,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
              >
                {label}
              </button>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div
          className="rounded-2xl p-8 mb-8"
          style={{ background: '#111127', border: '1px solid #2a2a4a' }}
        >
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-[1.3rem] text-[#f0f0ff] m-0" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Stock Quantity by Category
            </h2>
            <div className="flex gap-2">
              {(['qty', 'val'] as const).map(k => (
                <button
                  key={k}
                  onClick={() => setActiveChart(k)}
                  className="px-4 py-2 text-[0.85rem] rounded-lg font-semibold cursor-pointer transition-all duration-300"
                  style={{
                    background: activeChart === k ? 'linear-gradient(135deg, #7c3aed, #9333ea)' : 'rgba(255,255,255,0.05)',
                    border: activeChart === k ? 'none' : '1px solid #2a2a4a',
                    color: activeChart === k ? '#fff' : '#a0a0cc',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {k === 'qty' ? 'Quantity' : 'Value'}
                </button>
              ))}
            </div>
          </div>

          {/* Bars */}
          <div className="flex items-end justify-around gap-4 h-[200px] px-4">
            {barLabels.map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-2 flex-1">
                <span className="text-[0.8rem] text-cyan-400 font-semibold">{chartData.values[i]}</span>
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${chartData.heights[i]}%`,
                    background: 'linear-gradient(180deg, #7c3aed, #22d3ee)',
                    minHeight: '8px',
                  }}
                />
                <span className="text-[0.75rem] text-[#a0a0cc] text-center">{label}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-4">
            <span className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)' }} />
            <span className="text-[0.85rem] text-[#a0a0cc]">Units in Stock</span>
          </div>
        </div>

        {/* Recent Stock Table */}
        <div
          className="rounded-2xl p-8 mb-8"
          style={{ background: '#111127', border: '1px solid #2a2a4a' }}
        >
          <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
            <h2 className="text-[1.3rem] text-[#f0f0ff] m-0" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Recent Stock Records
            </h2>
            <button
              onClick={() => setViewModal(true)}
              className="btn-shimmer px-[18px] py-2 text-[0.9rem] rounded-lg font-bold text-white cursor-pointer transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)', border: 'none', fontFamily: "'Inter', sans-serif" }}
            >
              View All
            </button>
          </div>
          <StockTable />
        </div>

        {/* Quick Links */}
        <div
          className="rounded-2xl p-8"
          style={{ background: '#111127', border: '1px solid #2a2a4a' }}
        >
          <h2 className="text-[1.3rem] text-[#f0f0ff] mb-5" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Quick Links &amp; Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-[0.9rem] font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid #2a2a4a',
                  color: '#a0a0cc',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#22d3ee';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#2a2a4a';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#a0a0cc';
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MODALS ─────────────────────────────────────────── */}

      {/* View All */}
      {viewModal && (
        <Modal onClose={() => setViewModal(false)} title="All Stock Records">
          <StockTable compact />
        </Modal>
      )}

      {/* Insert */}
      {insertModal && (
        <Modal onClose={() => setInsertModal(false)} title="Insert New Stock Item">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">Item Name</label>
              <input type="text" placeholder="e.g. Razer BlackWidow" value={newName} onChange={e => setNewName(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">Category</label>
              <select value={newCategory} onChange={e => setNewCategory(e.target.value)}
                className="w-full px-4 py-3.5 rounded-lg appearance-none cursor-pointer text-base bg-[#080810] text-[#f0f0ff] outline-none"
                style={inputStyle} onFocus={onFocus} onBlur={onBlur}>
                <option value="">Select category...</option>
                {['Monitors','Keyboards','Mice','Headsets','Mousepads'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">Quantity</label>
              <input type="number" placeholder="e.g. 50" min={1} value={newQty} onChange={e => setNewQty(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">Unit Price ($)</label>
              <input type="number" placeholder="e.g. 199" min={0} value={newPrice} onChange={e => setNewPrice(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="flex gap-3 mt-2">
              <button onClick={handleInsert} className="btn-shimmer flex-1 py-3 rounded-lg font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', border: 'none' }}>Add Item</button>
              <button onClick={() => setInsertModal(false)} className="btn-shimmer flex-1 py-3 rounded-lg font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)', border: 'none' }}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Update */}
      {updateModal && (
        <Modal onClose={() => setUpdateModal(false)} title="Update Stock Record">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">Stock ID</label>
              <input type="text" placeholder="e.g. #001" value={updId} onChange={e => setUpdId(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">New Quantity</label>
              <input type="number" placeholder="e.g. 200" min={0} value={updQty} onChange={e => setUpdQty(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">New Price ($)</label>
              <input type="number" placeholder="e.g. 249" min={0} value={updPrice} onChange={e => setUpdPrice(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div className="flex gap-3 mt-2">
              <button onClick={handleUpdate} className="btn-shimmer flex-1 py-3 rounded-lg font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', border: 'none' }}>Save Changes</button>
              <button onClick={() => setUpdateModal(false)} className="btn-shimmer flex-1 py-3 rounded-lg font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)', border: 'none' }}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete */}
      {deleteModal && (
        <Modal onClose={() => setDeleteModal(false)} title="Delete Stock Record">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[0.95rem] text-[#f0f0ff]">Stock ID to Delete</label>
              <input type="text" placeholder="e.g. #003" value={delId} onChange={e => setDelId(e.target.value)}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <p className="text-[0.95rem] text-[#a0a0cc] m-0">This action is permanent and cannot be undone.</p>
            <div className="flex gap-3 mt-2">
              <button onClick={handleDelete} className="btn-shimmer flex-1 py-3 rounded-lg font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)', border: 'none' }}>Confirm Delete</button>
              <button onClick={() => setDeleteModal(false)} className="btn-shimmer flex-1 py-3 rounded-lg font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)', border: 'none' }}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}
