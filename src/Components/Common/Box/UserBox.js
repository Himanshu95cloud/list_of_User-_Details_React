import React from "react";
import "./UserBox.scss";

function UserBox() {
  return (
    <div className="userBox">
      <div>
        <img className="imgclass" src={} alt="Avtar" />
      </div>
      <div>
        <p> First Name</p>
        <p> Last Name</p>
      </div>
      <div>
        <p> Email id</p>
      </div>
    </div>
  );
}

export default UserBox;
