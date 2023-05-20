import React, { useEffect } from "react";
import "./UserBox.scss";
import { getUserList } from "../../../ApiCalls/ApiCalls";
import { Pagination, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserList,
  setTotalCount,
  setPage,
} from "../../../Redux/UserData/Reducer";

function UserBox() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userData.userList);
  const page = useSelector((state) => state.userData.page);
  const totalCount = useSelector((state) => state.userData.totalCount);

  const navigate = useNavigate();
  useEffect(() => {
    getUserList(page)
      .then((response) => {
        dispatch(setUserList(response?.data?.data));
        dispatch(setTotalCount(response?.data?.total));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleSelection = (item) => {
    if (userList.length > 0) {
      navigate(`/UserInfo/${item}`);
    }
  };

  const handlePagination = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="userBox">
      <h1>User List</h1>
      {userList.length > 0 ? (
        <>
          {userList.map((item) => (
            <div key={item?.id}>
              <div
                onClick={(value) => handleSelection(item?.id)}
                className="userCard"
              >
                <div className="avtarBox">
                  <img className="imgclass" src={item?.avatar} alt="Avtar" />
                </div>
                <div className="userTable">
                  <span>
                    {" "}
                    <strong>First Name : </strong> {item?.first_name}
                  </span>
                  <span>
                    {" "}
                    <strong>Last Name : </strong> {item?.last_name}
                  </span>{" "}
                  <span>
                    {" "}
                    <strong> Email Id : </strong> {item?.email}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Skeleton paragraph={{ rows: 8 }} />
      )}

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
