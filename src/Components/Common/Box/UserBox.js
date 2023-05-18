import React, { useEffect, useState } from "react";
import "./UserBox.scss";
import { getUserList } from "../../../ApiCalls/ApiCalls";
import { Pagination } from "antd";

function UserBox() {
  const [userList, setUsersList] = useState([]);
  useEffect(() => {
    getUserList()
      .then((response) => {
        setUsersList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        // swal(error);
      });
  }, []);

  const handleSelection = (item) => {
    console.log("The link was clicked.", item);
  };
  return (
    <div className="userBox">
      <h1>User List</h1>
      {userList.map((item) => (
        <div key={item?.id}>
          <div
            onClick={(value) => handleSelection(item.id)}
            className="userCard"
          >
            <div className="avtarBox">
              <img className="imgclass" src={item.avatar} alt="Avtar" />
            </div>
            <div className="userTable">
              <span>
                {" "}
                <strong>First Name : </strong> {item.first_name}
              </span>
              <span>
                {" "}
                <strong>Last Name : </strong> {item.last_name}
              </span>{" "}
              <span>
                {" "}
                <strong> Email Id : </strong> {item.email}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div style={{ padding: "20px", marginTop: "10px" }}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default UserBox;
