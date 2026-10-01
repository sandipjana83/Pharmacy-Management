import { useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  Download,
  IndianRupee,
  Package,
  RefreshCw,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ReportTable from "../reports/ReportTable";
import "../styles/reports.css";

const inventoryTrend = [
  { month: "Oct 2024", value: 280000 },
  { month: "Nov 2024", value: 315000 },
  { month: "Dec 2024", value: 348000 },
  { month: "Jan 2025", value: 390000 },
  { month: "Feb 2025", value: 445000 },
  { month: "Mar 2025", value: 480000 },
];

const categories = [
  { name: "Analgesics", value: 32, amount: "₹1,53,600", color: "#1687f9" },
  { name: "Antibiotics", value: 24, amount: "₹1,15,200", color: "#12a8b8" },
  { name: "Antihistamines", value: 18, amount: "₹86,400", color: "#67d9bf" },
  { name: "Gastrointestinal", value: 14, amount: "₹67,200", color: "#9c8bf0" },
  { name: "Others", value: 12, amount: "₹57,600", color: "#cbd5e1" },
];

const expiryData = [
  { label: "Expired", count: 8, percentage: 6, color: "#ef6257" },
  { label: "0 - 30 Days", count: 22, percentage: 28, color: "#f9ba3e" },
  { label: "31 - 60 Days", count: 19, percentage: 24, color: "#43c6bd" },
  { label: "61 - 90 Days", count: 12, percentage: 16, color: "#9ae5d4" },
];

const topMedicines = [
  { rank: 1, name: "Paracetamol 500mg", quantity: "5,200", value: "₹1,04,000", trend: "+15%" },
  { rank: 2, name: "Amoxicillin 250mg", quantity: "3,800", value: "₹76,000", trend: "+10%" },
  { rank: 3, name: "Cetirizine 10mg", quantity: "2,900", value: "₹43,500", trend: "+8%" },
  { rank: 4, name: "Metformin 500mg", quantity: "2,400", value: "₹36,000", trend: "-6%" },
];

function formatRupees(value) {
  return `₹${(value / 100000).toFixed(1)}L`;
}

function Reports() {
  return (
    <div className="reports-page">

      <main className="reports-content">
        
        <ReportTable/>
        <section className="reports-grid top-grid">
          <article className="report-card trend-card">
            <div className="report-card-header">
              <div>
                <BarChart3 size={22} />
                <h2>Inventory Value Trend</h2>
              </div>
              <span className="chart-key">
                <i /> Inventory Value
              </span>
            </div>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={inventoryTrend}>
                  <defs>
                    <linearGradient id="inventoryGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.28} />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>

                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: "#64748b" }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    tickFormatter={formatRupees}
                    tick={{ fontSize: 12, fill: "#64748b" }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    formatter={(value) => [`₹${value.toLocaleString("en-IN")}`, "Inventory Value"]}
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    fill="url(#inventoryGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="report-card category-card">
            <div className="report-card-header">
              <div>
                <Package size={22} />
                <h2>Inventory by Category</h2>
              </div>
            </div>

            <div className="category-content">
              <div className="pie-wrapper">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={categories}
                      dataKey="value"
                      innerRadius={60}
                      outerRadius={92}
                      paddingAngle={2}
                    >
                      {categories.map((category) => (
                        <Cell key={category.name} fill={category.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="pie-total">
                  <strong>₹4.8L</strong>
                  <span>Total Value</span>
                </div>
              </div>

              <div className="category-list">
                {categories.map((category) => (
                  <div className="category-row" key={category.name}>
                    <i style={{ background: category.color }} />
                    <span>{category.name}</span>
                    <strong>{category.value}%</strong>
                    <small>{category.amount}</small>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="reports-grid bottom-grid">
          <article className="report-card expiry-card">
            <div className="report-card-header">
              <div>
                <AlertTriangle size={22} />
                <h2>Expiry Analysis</h2>
              </div>
            </div>

            <div className="expiry-list">
              {expiryData.map((item) => (
                <div className="expiry-row" key={item.label}>
                  <span>{item.label}</span>

                  <div className="expiry-progress">
                    <div
                      style={{
                        width: `${item.percentage}%`,
                        background: item.color,
                      }}
                    />
                  </div>

                  <small>{item.count} items</small>
                  <strong>{item.percentage}%</strong>
                </div>
              ))}
            </div>

            <div className="expiry-warning">
              <AlertTriangle size={22} />
              <div>
                <strong>Expiry risk increased by 18% this month.</strong>
                <span>Review 3 batches now.</span>
              </div>

              <button>View Expiry Alerts →</button>
            </div>
          </article>

          <article className="report-card medicine-card">
            <div className="report-card-header">
              <div>
                <BarChart3 size={22} />
                <h2>Top Medicines by Value</h2>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="medicine-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Medicine Name</th>
                    <th>Quantity</th>
                    <th>Total Value</th>
                    <th>Trend (6M)</th>
                  </tr>
                </thead>

                <tbody>
                  {topMedicines.map((medicine) => (
                    <tr key={medicine.rank}>
                      <td>{medicine.rank}</td>
                      <td>{medicine.name}</td>
                      <td>{medicine.quantity}</td>
                      <td>{medicine.value}</td>
                      <td className={medicine.trend.startsWith("+") ? "trend-up" : "trend-down"}>
                        {medicine.trend.startsWith("+") ? "▲" : "▼"} {medicine.trend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Reports;