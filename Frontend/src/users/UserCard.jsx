import "../styles/user.css"
import {
  Clock3,
 
  Mail,

  Pencil,
  ShieldCheck,

} from "lucide-react";
function UserCard({ selectedUser }) {
  return (
    <>
            <aside className="user-details-card">
        <div className="details-header">
          <h2>User Details</h2>

          <button className="edit-user-button">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="selected-user-profile">
          <span className="selected-user-avatar">
            {selectedUser.initials}
          </span>

          <div>
            <h3>{selectedUser.name}</h3>
            <span
              className={`role-badge ${selectedUser.role
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {selectedUser.role}
            </span>
          </div>
        </div>

        <div className="details-list">
          <div className="detail-row">
            <Mail size={18} />
            <div>
              <span>Email Address</span>
              <strong>{selectedUser.email}</strong>
            </div>
          </div>

          <div className="detail-row">
            <ShieldCheck size={18} />
            <div>
              <span>Access Level</span>
              <strong>{selectedUser.access}</strong>
            </div>
          </div>

          <div className="detail-row">
            <Clock3 size={18} />
            <div>
              <span>Last Active</span>
              <strong>{selectedUser.lastActive}</strong>
            </div>
          </div>
        </div>

        <div className="user-status-section">
          <span>Account Status</span>
          <span className={`status-badge ${selectedUser.status.toLowerCase()}`}>
            {selectedUser.status}
          </span>
        </div>

        <button className="reset-password-button">
          Send Password Reset
        </button>
</aside>
    </>
  );
}
 export default UserCard;