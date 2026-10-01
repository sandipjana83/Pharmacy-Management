
import { Bell, ChevronDown, Home,Menu,PanelLeftClose} from "lucide-react";
import { useState } from "react";
import SearchBar from "../common/SearchBar";
import { useLocation,useNavigate} from "react-router-dom";
import Button from "../common/Button";
import '../../styles/navbar.css';

function Navbar({userName = "Dr. Rahul Mehta",
  userRole="admin",sidebarOpen, onSidebarToggle }) {
  const titles = ["dr", "mr", "mrs", "ms", "prof"];
  const initials = userName
    .replace(/\./g, " ") 
    .split(/\s+/)    
    .filter(name => name && !titles.includes(name.toLowerCase()))
    .map(name => name[0].toUpperCase())
    .join("")
    .slice(0, 2);

    const location = useLocation();
    const pageTitles = {
      "/dashboard": "Dashboard",
      "/inventory": "Inventory",
      "/reports": "Reports",
      "/ai-assistant": "AI Assistant",
      "/users": "User Management",
      "/settings": "Settings",
      "/login": "Login",
    };

    const pageTitle = pageTitles[location.pathname] || "Dashboard";
    const navigate = useNavigate();
    const [user,setUser]=useState(false); // Replace with actual user state from context or props
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className={`navbar ${sidebarOpen ? "" : "sidebar-closed"}`}>
      <button
      type="button"
      className="sidebar-toggle-button"
      onClick={onSidebarToggle}
      aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
    >
      {sidebarOpen ? <PanelLeftClose size={22} /> : <Menu size={22} />}
    </button>
      <div className="navbar-breadcrumb">
        <Home size={19} strokeWidth={2.2} onClick={()=>navigate("/dashboard")}/>
        <span className="breadcrumb-divider">›</span>
        <span className="breadcrumb-current">{pageTitle}</span>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSearch={(searchValue) => {
        console.log("Searching:", searchValue);
    // Filter medicines or call your API here
      }}
        placeholder="Search medicines, batches, reports..."
      />

      <div className="navbar-right">
        <button className="notification-button" aria-label="Notifications">
          <Bell size={22} />
          <span className="notification-count">3</span>
        </button>

        <div className="profile-divider" />
        {user ?(
             <button className="profile-button" aria-label="Open profile menu">
          <div className="profile-avatar">{initials}</div>

          <div className="profile-details">
            <span className="profile-name">{userName}</span>
            <span className="profile-role">{userRole}</span>
          </div>

          {<ChevronDown className="profile-chevron" size={19} />}
        </button>
        ):(
          <Button isLoading={false}
          onClick={() =>navigate("/login")}
          >Login</Button>
        )}
     
      </div>
    </header>
  );
}

export default Navbar;