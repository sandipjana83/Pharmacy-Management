import { useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  Download,
  IndianRupee,
  Package,
  RefreshCw,
} from "lucide-react";

import "../styles/reports.css";
function ReportTable(){
  const [period, setPeriod] = useState("Last 6 Months");
  console.log(period);
  return (
    <>
          <section className="reports-header">
          <div>
            <h1>Reports & Analytics</h1>
            <p>Make informed decisions using real-time inventory insights.</p>
          </div>

          <div className="report-actions">
            <select value={period} onChange={(event) => setPeriod(event.target.value)}>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>

            <button className="report-outline-button">
              <Download size={18} />
              Export PDF
            </button>

            <button className="report-primary-button">
              <BarChart3 size={18} />
              Generate Report
            </button>
          </div>
        </section>

        <section className="report-stats">
          <article className="report-stat-card mint">
            <span className="report-stat-icon">
              <IndianRupee size={25} />
            </span>
            <div>
              <p>Total Inventory Value</p>
              <h2>₹4.8L</h2>
              <small className="positive">▲ +12%</small>
              <span>vs. previous 6 months</span>
            </div>
          </article>

          <article className="report-stat-card blue">
            <span className="report-stat-icon">
              <RefreshCw size={25} />
            </span>
            <div>
              <p>Stock Turnover</p>
              <h2>5.2x</h2>
              <small className="positive">▲ +8%</small>
              <span>vs. previous 6 months</span>
            </div>
          </article>

          <article className="report-stat-card red">
            <span className="report-stat-icon">
              <AlertTriangle size={25} />
            </span>
            <div>
              <p>Expiry Risk Value</p>
              <h2>₹12,500</h2>
              <small className="negative">▲ +18%</small>
              <span>vs. previous 6 months</span>
            </div>
          </article>

          <article className="report-stat-card amber">
            <span className="report-stat-icon">
              <Package size={25} />
            </span>
            <div>
              <p>Low-stock Items</p>
              <h2>34</h2>
              <small>— 0%</small>
              <span>vs. previous 6 months</span>
            </div>
          </article>
        </section>

    </>
  );
}
export default ReportTable;