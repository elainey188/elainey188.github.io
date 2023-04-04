import React from "react";
import ProfileRender from "./ProfileRender";
import "./home.css";

function MyProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { name, email, location, bio } = user;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      <div className="profile-body">
        <ProfileRender name={name} email={email} location={location} bio={bio} />
      </div>
    </div>
  );
}

export default MyProfile;
