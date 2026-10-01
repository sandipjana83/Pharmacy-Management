import {
  Bot,
  Boxes,
  FileUp,
  LayoutDashboard,
  Settings,
  TriangleAlert,
  Users,
  BarChart3,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import '../../styles/sidebar.css';

const menuItems = [
  { label: "Overview", path: "/dashboard", icon: LayoutDashboard },
  { label: "Inventory", path: "/inventory", icon: Boxes },
  { label: "Reports", path: "/reports", icon: BarChart3 },
  { label: "AI Assistant", path: "/chatbot", icon: Bot },
  { label: "Users", path: "/users", icon: Users },
  { label: "Settings", path: "/settings", icon: Settings },
];

function Sidebar({isOpen}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar-logo">
        <span className="logo-icon">✚</span>

        <div>
          <h2>
            MediStock <span>AI</span>
          </h2>
          <p>Smarter Pharmacy. Healthier Tomorrow.</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(({ label, path, icon: Icon }) => {
          const isActive = location.pathname === path;

          return (
            <button
              key={path}
              type="button"
              className={`sidebar-link ${isActive ? "active" : ""}`}
              onClick={() => navigate(path)}
            >
              <Icon size={22} strokeWidth={2} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-line" />
        <p>Better inventory.</p>
        <p>Safer communities.</p>
      </div>
    </aside>
  );
}

export default Sidebar;