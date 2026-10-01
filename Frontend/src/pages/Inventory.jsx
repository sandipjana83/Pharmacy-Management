import React from "react";
import '../styles/inventory.css';
function Inventory()
{
    return(
        <>
        <div id="inventory-dashboard">

    <div id="heading-container">
        <div>
            <h1>Inventory Management</h1>
            <p>Track medicines, batches, stock and expiry dates.</p>
        </div>

        <div id="action-buttons">
            <button>Add Medicine</button>
            <button>Upload File</button>
        </div>
    </div>

    <div id="quick-stat-container">
        <div className="stat-card" id="total-items">Total Items</div>
        <div className="stat-card" id="low-stock">Low Stock</div>
        <div className="stat-card" id="expiring-soon">Expiring Soon</div>
        <div className="stat-card" id="inventory-value">Inventory Value</div>
    </div>

    <div id="main-content">

        <div id="left-section">

            <div id="filter-bar">
                Search | Category | Status | Expiry
            </div>

            <div id="inventory-container">
                Inventory Table
            </div>

        </div>

        <div id="right-section">

            <div id="batch-details">
                Batch Details
            </div>

            <div id="stock-trend">
                Stock Trend Chart
            </div>

            <div id="recommendation-box">
                Recommendation
            </div>

        </div>

    </div>

</div>

        </>
    )
};

export default Inventory;