import React, { useState } from "react";
import "../Assests/CSS/dashboard.css";

function Dashboard() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210"
  });

  const [isEditing, setIsEditing] = useState(false); // ✅ track edit mode
  const [formData, setFormData] = useState(profile); // ✅ temporary form state

  // handle input change in edit form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData); // save changes
    setIsEditing(false);  // exit edit mode
  };

  const handleCancel = () => {
    setFormData(profile); // reset form data
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure to delete your profile?")) {
      setProfile({ name: "", email: "", phone: "" });
      setFormData({ name: "", email: "", phone: "" });
      setIsEditing(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <h3>Profile Details</h3>

        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <div className="profile-buttons">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="profile-details">
            <p><strong>Name:</strong> {profile.name || "N/A"}</p>
            <p><strong>Email:</strong> {profile.email || "N/A"}</p>
            <p><strong>Phone:</strong> {profile.phone || "N/A"}</p>

            <div className="profile-buttons">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
              <button className="delete-btn" onClick={handleDelete}>Delete Profile</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
