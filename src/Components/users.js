import React, { useState, useEffect } from "react";
import { Edit, Trash2, Eye, Plus } from "lucide-react";
import "../Assests/CSS/dashboard.css";

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "9876543210", role: "User", status: "Active", joinDate: "2024-01-15", history: ["Logged in", "Updated profile"] },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9123456780", role: "Admin", status: "Inactive", joinDate: "2024-02-10", history: ["Logged in", "Deleted a user"] },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "9988776655", role: "User", status: "Pending", joinDate: "2024-03-05", history: ["Registered"] }
];

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    setUsers(initialUsers);
  }, []);

  const getStatusClass = (status) => {
    switch(status){
      case "Active": return "status-active";
      case "Inactive": return "status-inactive";
      case "Pending": return "status-pending";
      default: return "";
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || user.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleView = (user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setShowEditModal(true);
  };

  const handleAddUser = () => {
    setFormData({ name: "", email: "", phone: "", role: "User", status: "Active", joinDate: new Date().toISOString().split("T")[0], history: [] });
    setShowAddModal(true);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);

  const handleSave = () => {
    const { name, email, phone, role, status, joinDate, id } = formData;
    if(!name || !email || !phone || !role || !status || !joinDate){
      alert("Please fill all fields");
      return;
    }
    if(!isValidEmail(email)){ alert("Invalid email format"); return; }
    if(!isValidPhone(phone)){ alert("Phone number must be 10 digits"); return; }

    if(showEditModal){
      setUsers(users.map(u => u.id === id ? formData : u));
      setShowEditModal(false);
    } else if(showAddModal){
      const newUser = { ...formData, id: users.length ? users[users.length-1].id + 1 : 1 };
      setUsers([...users, newUser]);
      setShowAddModal(false);
    }
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this user?")){
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="users-page-container">
      <h1>Users</h1>
      <div className="users-controls">
        <input type="text" placeholder="Search by name or email..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-input" />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="status-filter">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
        <button className="add-btn styled-btn" onClick={handleAddUser}><Plus /> Add User</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Role</th><th>Status</th><th>Join Date</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="table-row">
                <td onClick={()=>handleView(user)}>{user.name}</td>
                <td onClick={()=>handleView(user)}>{user.email}</td>
                <td onClick={()=>handleView(user)}>{user.phone}</td>
                <td>{user.role}</td>
                <td><span className={`status-badge ${getStatusClass(user.status)}`}>{user.status}</span></td>
                <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                <td>
                  <button className="action-btn edit" onClick={e=>{e.stopPropagation(); handleEdit(user);}}><Edit /></button>
                  <button className="action-btn view" onClick={e=>{e.stopPropagation(); handleView(user);}}><Eye /></button>
                  <button className="action-btn delete" onClick={e=>{e.stopPropagation(); handleDelete(user.id);}}><Trash2 /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {showViewModal && selectedUser && (
        <div className="modal">
          <div className="modal-content large-modal view-modal">
            <button className="close-btn" onClick={()=>setShowViewModal(false)}>X</button>
            <h2>{selectedUser.name}</h2>
            <div className="user-detail-grid">
              <div className="detail-item"><strong>Email:</strong> {selectedUser.email}</div>
              <div className="detail-item"><strong>Phone:</strong> {selectedUser.phone}</div>
              <div className="detail-item"><strong>Role:</strong> {selectedUser.role}</div>
              <div className="detail-item"><strong>Status:</strong> <span className={`status-badge ${getStatusClass(selectedUser.status)}`}>{selectedUser.status}</span></div>
              <div className="detail-item"><strong>Joined:</strong> {new Date(selectedUser.joinDate).toLocaleDateString()}</div>
              <div className="detail-item full-width">
                <strong>Activity/History:</strong>
                <ul>
                  {selectedUser.history.map((act,i)=><li key={i}>{act}</li>)}
                </ul>
              </div>
            </div>
            <button className="edit-btn styled-btn" onClick={() => { setShowViewModal(false); handleEdit(selectedUser); }}>Edit User</button>
          </div>
        </div>
      )}

      {/* Edit/Add Modal */}
      {(showEditModal || showAddModal) && (
        <div className="modal">
          <div className="modal-content large-modal">
            <button className="close-btn" onClick={()=>{setShowEditModal(false); setShowAddModal(false);}}>X</button>
            <h2>{showEditModal ? "Edit User" : "Add User"}</h2>
            <div className="edit-form">
              <label>Name:</label>
              <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} placeholder="Enter full name" />

              <label>Email:</label>
              <input type="email" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} placeholder="Enter email" />

              <label>Phone:</label>
              <input type="text" value={formData.phone} onChange={e=>setFormData({...formData, phone:e.target.value})} placeholder="10-digit number" />

              <label>Role:</label>
              <select value={formData.role} onChange={e=>setFormData({...formData, role:e.target.value})}>
                <option>User</option>
                <option>Admin</option>
              </select>

              <label>Status:</label>
              <select value={formData.status} onChange={e=>setFormData({...formData, status:e.target.value})}>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>

              <label>Join Date:</label>
              <input type="date" value={formData.joinDate} onChange={e=>setFormData({...formData, joinDate:e.target.value})} />

              <button className="save-btn styled-btn" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
