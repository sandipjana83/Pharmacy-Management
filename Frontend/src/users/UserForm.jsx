import {Download, Plus} from "lucide-react";
import "../styles/user.css"
function UserForm() {

  return (
    <section className="users-heading">
          <div>
            <h1>User Management</h1>
            <p>Manage staff access, roles and permissions.</p>
          </div>

          <div className="users-actions">
            <button className="outline-button">
              <Download size={18} />
              Export Users
            </button>

            <button className="primary-button">
              <Plus size={18} />
              Add User
            </button>
          </div>
        </section>
  );
}
export default UserForm;