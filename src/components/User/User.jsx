import React from "react";
import "./User.scss";

const User = ({ user }) => {
  return (
    <div className="user-item">
      <div className="user-item-image">
        <img src={user.photo} alt="user" />
      </div>
      <div className="user-item-name">
        <p className="description">{user.name}</p>
      </div>
      <div className="user-item-position">
        <p className="description">{user.position}</p>
      </div>
      <div className="user-item-email">
        <p className="description">{user.email}</p>
      </div>
      <div className="user-item-phone">
        <p className="description">{user.phone}</p>
      </div>
    </div>
  );
};

export default User;
