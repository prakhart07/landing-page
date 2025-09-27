import React, { useState, useEffect } from "react";
import {
  Users,
  Plus,
  Edit,
  Trash2,
  Eye,
  Home,
  BarChart3,
  FileText,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../Assests/CSS/dashboard.css";

function Dashboard() {
   const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setUsersData([
        { id: 1, name: "Raj Kumar", email: "raj@example.com", phone: "9876543210", status: "Active", role: "User", joinDate: "2024-01-15" },
        { id: 2, name: "Priya Sharma", email: "priya@example.com", phone: "9876543211", status: "Active", role: "User", joinDate: "2024-02-20" },
        { id: 3, name: "Amit Singh", email: "amit@example.com", phone: "9876543212", status: "Inactive", role: "Moderator", joinDate: "2024-01-10" },
        { id: 4, name: "Sunita Patel", email: "sunita@example.com", phone: "9876543213", status: "Active", role: "User", joinDate: "2024-03-05" },
        { id: 5, name: "Vikash Gupta", email: "vikash@example.com", phone: "9876543214", status: "Pending", role: "User", joinDate: "2024-09-20" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || user.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleEditUser = (id) => console.log("Edit user:", id);
  const handleDeleteUser = (id) => setUsersData(usersData.filter(u => u.id !== id));
  const handleToggleStatus = (id) => {
    setUsersData(usersData.map(user =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    ));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return "status-active";
      case "Inactive": return "status-inactive";
      case "Pending": return "status-pending";
      default: return "status-default";
    }
  };

  return (
    <div className="admin-container">
      {/* Main Section */}
      <main className="main">
        {/* Stats */}
        <div className="stats">
          <div className="card">
            <p>Total Users</p>
            <h2>{usersData.length}</h2>
            <Users />
          </div>
          <div className="card">
            <p>Active Users</p>
            <h2>{usersData.filter(u => u.status === "Active").length}</h2>
          </div>
          <div className="card">
            <p>Pending Users</p>
            <h2>{usersData.filter(u => u.status === "Pending").length}</h2>
          </div>
        </div>

        {/* Users Table */}
        <div className="table-container">
          <div className="table-header">
            <h2>User Management</h2>
            <div className="actions">
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <button className="add-btn"><Plus /> Add User</button>
            </div>
          </div>


         
          {loading ? (
            <div className="loader"></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, i) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar" style={{ backgroundColor: `hsl(${i * 137.5}, 50%, 50%)` }}>
                          {user.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p>{user.name}</p>
                          <span>{user.role}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{user.email}</p>
                      <span>{user.phone}</span>
                    </td>
                    <td>
                      <span className={`status-badge ${getStatusClass(user.status)}`}>{user.status}</span>
                    </td>
                    <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => handleEditUser(user.id)} className="action-btn edit"><Edit /></button>
                      <button onClick={() => handleToggleStatus(user.id)} className="action-btn view"><Eye /></button>
                      <button onClick={() => handleDeleteUser(user.id)} className="action-btn delete"><Trash2 /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Quick Actions</h3>
        
        {/* ✅ Dashboard button */}
        <button onClick={() => navigate("/dashboard")}><Home /> Dashboard</button>

       <button onClick={() => navigate("/users")}><Users /> Users</button>


        <button onClick={() => navigate("/Analytics")}><BarChart3 /> Analytics</button>
        <button><FileText /> Reports</button>
        <button><Settings /> Settings</button>

        <h4>Recent Activity</h4>
        <div className="activity">
          <p>New user registered</p>
          <span>2 minutes ago</span>
        </div>
        <div className="activity">
          <p>User profile updated</p>
          <span>5 minutes ago</span>
        </div>
      </aside>
    </div>
  );
}

export default Dashboard;
