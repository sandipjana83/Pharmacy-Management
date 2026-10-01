import Inventory from "./Inventory";
function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-content">
          <Inventory />
        </div>
      </div>
    </>
  );
}
export default Dashboard;