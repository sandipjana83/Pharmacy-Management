import { useMemo, useState } from "react";
import {
  Filter,
  MoreVertical,
  ShieldCheck,
  Store,
  UserRound,
  Users,
} from "lucide-react";
import UserForm from "../users/UserForm";
import UserCard from "../users/UserCard";
import "../styles/user.css"

const users = [
  {
    id: 1,
    name: "Dr. Rahul Mehta",
    email: "rahul@medicarepharmacy.in",
    role: "Admin",
    access: "Full Access",
    lastActive: "Active now",
    status: "Active",
    initials: "DR",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@medicarepharmacy.in",
    role: "Store Manager",
    access: "Inventory & Reports",
    lastActive: "12 min ago",
    status: "Active",
    initials: "PS",
  },
  {
    id: 3,
    name: "Arjun Patel",
    email: "arjun@medicarepharmacy.in",
    role: "Pharmacist",
    access: "View & Chatbot",
    lastActive: "1 hour ago",
    status: "Active",
    initials: "AP",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha@medicarepharmacy.in",
    role: "Pharmacist",
    access: "View & Chatbot",
    lastActive: "Yesterday",
    status: "Invited",
    initials: "NS",
  },
  {
    id: 5,
    name: "Mohan Das",
    email: "mohan@medicarepharmacy.in",
    role: "Store Manager",
    access: "Inventory & Reports",
    lastActive: "2 days ago",
    status: "Inactive",
    initials: "MD",
  },
];

function User() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
        const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "All Roles" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All Status" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, roleFilter, statusFilter]);

  return (
    <div className="users-page">

      <main className="users-content">
        
        <UserForm />
        <section className="user-stats">
          <article className="stat-card total-users">
            <span className="stat-icon blue">
              <Users size={24} />
            </span>
            <div>
              <p>Total Users</p>
              <h2>18</h2>
            </div>
          </article>

          <article className="stat-card admins">
            <span className="stat-icon sky">
              <ShieldCheck size={24} />
            </span>
            <div>
              <p>Admins</p>
              <h2>2</h2>
            </div>
          </article>

          <article className="stat-card store-managers">
            <span className="stat-icon green">
              <Store size={24} />
            </span>
            <div>
              <p>Store Managers</p>
              <h2>5</h2>
            </div>
          </article>

          <article className="stat-card pharmacists">
            <span className="stat-icon purple">
              <UserRound size={24} />
            </span>
            <div>
              <p>Pharmacists & Staff</p>
              <h2>11</h2>
            </div>
          </article>
        </section>

        <section className="users-grid">
          <div className="users-table-card">
            <div className="users-filters">
              <input
                type="search"
                placeholder="Search name or email..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <select
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
              >
                <option>All Roles</option>
                <option>Admin</option>
                <option>Store Manager</option>
                <option>Pharmacist</option>
              </select>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Invited</option>
                <option>Inactive</option>
              </select>

              <button className="filter-button">
                <Filter size={18} />
                Filter
              </button>
            </div>

            <div className="table-scroll">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Access</th>
                    <th>Last Active</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                    key={user.id}
                    className={selectedUser.id === user.id ? "selected-user-row" : ""}
                    onClick={() => setSelectedUser(user)}
                  >
                      <td>
                        <div className="user-cell">
                          <span className="user-avatar">{user.initials}</span>
                          <strong>{user.name}</strong>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`role-badge ${user.role
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td>{user.email}</td>
                      <td>{user.access}</td>

                      <td>
                        <span className="last-active">
                          <i
                            className={
                              user.lastActive === "Active now" ? "online" : ""
                            }
                          />
                          {user.lastActive}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status-badge ${user.status.toLowerCase()}`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td>
                        <button className="more-button" aria-label="User actions"
                         onClick={(event) => event.stopPropagation()}
                        >
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <footer className="table-footer">
              <span>Showing {filteredUsers.length} of 18 users</span>
              <div className="pagination">
                <button>‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>›</button>
              </div>
            </footer>
          </div>

          
          <UserCard selectedUser={selectedUser} />

        </section>
      </main>
    </div>
  );
}

export default User;