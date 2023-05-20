import React, { useEffect, useState } from "react";
import "./UserBox.scss";
import { getUserList } from "../../../ApiCalls/ApiCalls";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

function UserBox() {
  const [userList, setUsersList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  useEffect(() => {
    getUserList(page)
      .then((response) => {
        setUsersList(response.data.data);
        setTotalCount(response.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleSelection = (item) => {
    navigate(`/UserInfo/${item}`);
    console.log("The link was clicked.", item);
  };

  const handlePagination = (page) => {
    setPage(page);
    console.log("page", page);
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
        <Pagination
          pageSize={5}
          onChange={(page) => handlePagination(page)}
          defaultCurrent={page}
          total={totalCount}
        />
      </div>
    </div>
  );
}

export default UserBox;
