import React from "react";
import "./Register.scss";
import RegisterSVG from "../../svg/RegisterSVG";

const Register = ({ successUser }) => {
  return (
    <div className={`register ${successUser ? "show" : ""}`}>
      <div className="register-container container">
        <div className="register-title">
          <p className="title">User successfully registered</p>
        </div>
        <div className="register-svg">
          <RegisterSVG />
        </div>
      </div>
    </div>
  );
};

export default Register;
