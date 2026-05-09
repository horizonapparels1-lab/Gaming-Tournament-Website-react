import { useState } from 'react';
import { Link } from 'react-router-dom';

type BarData = {
  heights: string[];
  values: string[];
};

const qtyData: BarData = {
  heights: ['h-60', 'h-85', 'h-40', 'h-70', 'h-95'],
  values: ['120', '170', '80', '140', '190'],
};

const valData: BarData = {
  heights: ['h-95', 'h-70', 'h-30', 'h-50', 'h-40'],
  values: ['$47.8K', '$33.8K', '$11.9K', '$13.9K', '$11.2K'],
};

const barLabels = ['Monitors', 'Keyboards', 'Mice', 'Headsets', 'Mousepads'];

export default function Dashboard() {
  const [activeChart, setActiveChart] = useState<'qty' | 'val'>('qty');
  const [viewModal, setViewModal] = useState(false);
  const [insertModal, setInsertModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newQty, setNewQty] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const [updId, setUpdId] = useState('');
  const [updQty, setUpdQty] = useState('');
  const [updPrice, setUpdPrice] = useState('');

  const [delId, setDelId] = useState('');

  const chartData = activeChart === 'qty' ? qtyData : valData;

  function handleInsert() {
    if (!newName || !newCategory || !newQty || !newPrice) {
      alert('Please fill in all fields before adding the item.');
      return;
    }
    alert(`✅ Item "${newName}" (${newCategory}) — Qty: ${newQty}, Price: $${newPrice} has been added!`);
    setInsertModal(false);
    setNewName(''); setNewCategory(''); setNewQty(''); setNewPrice('');
  }

  function handleUpdate() {
    if (!updId) { alert('Please enter a Stock ID to update.'); return; }
    alert(`✅ Stock record "${updId}" updated — New Qty: ${updQty || 'unchanged'}, New Price: ${updPrice ? '$' + updPrice : 'unchanged'}`);
    setUpdateModal(false);
    setUpdId(''); setUpdQty(''); setUpdPrice('');
  }

  function handleDelete() {
    if (!delId) { alert('Please enter a Stock ID to delete.'); return; }
    if (window.confirm(`Are you sure you want to permanently delete stock record "${delId}"?`)) {
      alert(`🗑️ Stock record "${delId}" has been deleted.`);
      setDeleteModal(false);
      setDelId('');
    }
  }

  return (
    <main className="page">
      <div className="dashboard-container">

        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Stock Management Dashboard</h1>
          <p className="dashboard-subtitle">Monitor, manage and control all tournament equipment inventory in one place.</p>
        </div>

        {/* KPI Stats Row */}
        <div className="dash-stats-row">
          <div className="dash-stat-card cyan">
            <span className="dash-stat-icon">📦</span>
            <span className="dash-stat-number">700</span>
            <span className="dash-stat-label">Total Stock Items</span>
            <span className="dash-stat-change">+12% this month</span>
          </div>
          <div className="dash-stat-card pink">
            <span className="dash-stat-icon">⚠️</span>
            <span className="dash-stat-number">3</span>
            <span className="dash-stat-label">Low Stock Alerts</span>
            <span className="dash-stat-change down">Needs restocking</span>
          </div>
          <div className="dash-stat-card purple">
            <span className="dash-stat-icon">🗂️</span>
            <span className="dash-stat-number">5</span>
            <span className="dash-stat-label">Categories</span>
            <span className="dash-stat-change">All monitored</span>
          </div>
          <div className="dash-stat-card gold">
            <span className="dash-stat-icon">💰</span>
            <span className="dash-stat-number">$48K</span>
            <span className="dash-stat-label">Inventory Value</span>
            <span className="dash-stat-change">+5% this quarter</span>
          </div>
        </div>

        {/* Action Cards */}
        <div className="dash-actions-row">
          <div className="dash-action-card view">
            <span className="dash-action-icon">👁️</span>
            <h3 className="dash-action-title">View All Stock</h3>
            <p className="dash-action-desc">Browse the complete inventory of all items in the database.</p>
            <button onClick={() => setViewModal(true)}>View All Records</button>
          </div>
          <div className="dash-action-card insert">
            <span className="dash-action-icon">➕</span>
            <h3 className="dash-action-title">Insert New Stock</h3>
            <p className="dash-action-desc">Add new equipment items to the inventory database.</p>
            <button onClick={() => setInsertModal(true)}>Add New Item</button>
          </div>
          <div className="dash-action-card update">
            <span className="dash-action-icon">✏️</span>
            <h3 className="dash-action-title">Update Stock</h3>
            <p className="dash-action-desc">Modify quantity or details of existing stock records.</p>
            <button onClick={() => setUpdateModal(true)}>Update Record</button>
          </div>
          <div className="dash-action-card delete">
            <span className="dash-action-icon">🗑️</span>
            <h3 className="dash-action-title">Delete Stock</h3>
            <p className="dash-action-desc">Remove discontinued or obsolete items from the system.</p>
            <button onClick={() => setDeleteModal(true)}>Delete Record</button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Stock Quantity by Category</h2>
            <div className="chart-controls">
              <button
                className={`chart-btn${activeChart === 'qty' ? ' active' : ''}`}
                onClick={() => setActiveChart('qty')}
              >
                Quantity
              </button>
              <button
                className={`chart-btn${activeChart === 'val' ? ' active' : ''}`}
                onClick={() => setActiveChart('val')}
              >
                Value
              </button>
            </div>
          </div>

          <div className="bar-chart-wrap">
            {barLabels.map((label, i) => (
              <div className="bar-item" key={label}>
                <div className={`bar-fill ${chartData.heights[i]}`}>
                  <span className="bar-val">{chartData.values[i]}</span>
                </div>
                <span className="bar-lbl">{label}</span>
              </div>
            ))}
          </div>

          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-dot"></span>
              <span>Units in Stock</span>
            </div>
          </div>
        </div>

        {/* Recent Stock Table */}
        <div className="dash-table-section">
          <div className="dash-table-header">
            <h2 className="dash-table-title">Recent Stock Records</h2>
            <button className="sm-button" onClick={() => setViewModal(true)}>View All</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Item Name</th><th>Category</th><th>Quantity</th><th>Unit Price</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>#001</td><td>Alienware 27" Monitor</td><td>Monitors</td><td>120</td><td>$399</td><td><span className="badge-ok">In Stock</span></td></tr>
                <tr><td>#002</td><td>SteelSeries Apex Pro</td><td>Keyboards</td><td>170</td><td>$199</td><td><span className="badge-ok">In Stock</span></td></tr>
                <tr><td>#003</td><td>Logitech G Pro X</td><td>Mice</td><td>12</td><td>$149</td><td><span className="badge-low">Low Stock</span></td></tr>
                <tr><td>#004</td><td>HyperX Cloud II</td><td>Headsets</td><td>140</td><td>$99</td><td><span className="badge-ok">In Stock</span></td></tr>
                <tr><td>#005</td><td>Corsair MM700 XL</td><td>Mousepads</td><td>190</td><td>$59</td><td><span className="badge-ok">In Stock</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links */}
        <div className="dash-links-section">
          <h2 className="dash-links-title">Quick Links &amp; Tools</h2>
          <div className="dash-links-grid">
            <Link to="#" className="dash-link-btn">📤 Export CSV</Link>
            <Link to="#" className="dash-link-btn">📊 Generate Report</Link>
            <Link to="#" className="dash-link-btn">🔔 Stock Alerts</Link>
            <Link to="#" className="dash-link-btn">🗃️ Archive Records</Link>
            <Link to="#" className="dash-link-btn">⚙️ Stock Settings</Link>
            <Link to="#" className="dash-link-btn">📋 Audit Log</Link>
            <Link to="/signup" className="dash-link-btn">🏆 Tournament Teams</Link>
            <Link to="/leaderboard" className="dash-link-btn">📈 Leaderboard</Link>
          </div>
        </div>

      </div>

      {/* VIEW ALL MODAL */}
      {viewModal && (
        <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setViewModal(false); }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setViewModal(false)}>&times;</button>
            <h2 className="modal-title">All Stock Records</h2>
            <div className="modal-table-wrap">
              <table>
                <thead><tr><th>ID</th><th>Item Name</th><th>Category</th><th>Qty</th><th>Price</th></tr></thead>
                <tbody>
                  <tr><td>#001</td><td>Alienware Monitor</td><td>Monitors</td><td>120</td><td>$399</td></tr>
                  <tr><td>#002</td><td>SteelSeries Apex Pro</td><td>Keyboards</td><td>170</td><td>$199</td></tr>
                  <tr><td>#003</td><td>Logitech G Pro X</td><td>Mice</td><td>12</td><td>$149</td></tr>
                  <tr><td>#004</td><td>HyperX Cloud II</td><td>Headsets</td><td>140</td><td>$99</td></tr>
                  <tr><td>#005</td><td>Corsair MM700 XL</td><td>Mousepads</td><td>190</td><td>$59</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* INSERT MODAL */}
      {insertModal && (
        <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setInsertModal(false); }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setInsertModal(false)}>&times;</button>
            <h2 className="modal-title">Insert New Stock Item</h2>
            <div className="modal-form">
              <div>
                <label htmlFor="new-item-name">Item Name</label>
                <input type="text" id="new-item-name" placeholder="e.g. Razer BlackWidow" value={newName} onChange={e => setNewName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="new-category">Category</label>
                <div className="select-container">
                  <select id="new-category" value={newCategory} onChange={e => setNewCategory(e.target.value)}>
                    <option value="">Select category...</option>
                    <option>Monitors</option><option>Keyboards</option><option>Mice</option><option>Headsets</option><option>Mousepads</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="new-qty">Quantity</label>
                <input type="number" id="new-qty" placeholder="e.g. 50" min={1} value={newQty} onChange={e => setNewQty(e.target.value)} />
              </div>
              <div>
                <label htmlFor="new-price">Unit Price ($)</label>
                <input type="number" id="new-price" placeholder="e.g. 199" min={0} value={newPrice} onChange={e => setNewPrice(e.target.value)} />
              </div>
              <div className="modal-actions">
                <button className="btn-success" onClick={handleInsert}>Add Item</button>
                <button className="btn-danger" onClick={() => setInsertModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* UPDATE MODAL */}
      {updateModal && (
        <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setUpdateModal(false); }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setUpdateModal(false)}>&times;</button>
            <h2 className="modal-title">Update Stock Record</h2>
            <div className="modal-form">
              <div>
                <label htmlFor="upd-id">Stock ID</label>
                <input type="text" id="upd-id" placeholder="e.g. #001" value={updId} onChange={e => setUpdId(e.target.value)} />
              </div>
              <div>
                <label htmlFor="upd-qty">New Quantity</label>
                <input type="number" id="upd-qty" placeholder="e.g. 200" min={0} value={updQty} onChange={e => setUpdQty(e.target.value)} />
              </div>
              <div>
                <label htmlFor="upd-price">New Price ($)</label>
                <input type="number" id="upd-price" placeholder="e.g. 249" min={0} value={updPrice} onChange={e => setUpdPrice(e.target.value)} />
              </div>
              <div className="modal-actions">
                <button className="btn-success" onClick={handleUpdate}>Save Changes</button>
                <button className="btn-danger" onClick={() => setUpdateModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteModal && (
        <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setDeleteModal(false); }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setDeleteModal(false)}>&times;</button>
            <h2 className="modal-title">Delete Stock Record</h2>
            <div className="modal-form">
              <div>
                <label htmlFor="del-id">Stock ID to Delete</label>
                <input type="text" id="del-id" placeholder="e.g. #003" value={delId} onChange={e => setDelId(e.target.value)} />
              </div>
              <p>This action is permanent and cannot be undone.</p>
              <div className="modal-actions">
                <button className="btn-danger" onClick={handleDelete}>Confirm Delete</button>
                <button onClick={() => setDeleteModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
