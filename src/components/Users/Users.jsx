import React from "react";
import "./Users.scss";
import User from "../User/User";

const Users = ({ setPage, page, showButton, data }) => {
  const handleButtonEvent = () => {
    setPage(page + 1);
  };
  return (
    <div className="users">
      <div className="users-container container">
        <div className="users-title">
          <p className="title">Working with GET request</p>
        </div>
        <div className="users-items">
          {data && data.length && data.map((user, index) => <User user={user} key={index} />)}
        </div>
        {showButton && (
          <div className="users-button">
            <button className="button" onClick={handleButtonEvent}>
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
