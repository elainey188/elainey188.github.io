import React, { useState, useEffect } from "react";
import ProfileRender from "./ProfileRender";
import "./home.css";

function MyProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <h4>Please log in to view your profile.</h4>;
  }

  const { name, email, location, bio, phone } = user;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      <div className="profile-body">
        <ProfileRender name={name} email={email} location={location} bio={bio} phone={phone} />
      </div>
    </div>
  );
}

export default MyProfile;
