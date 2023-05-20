import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../ApiCalls/ApiCalls";
import "./UserDetails.scss";
import { Skeleton } from "antd";

function UserDetails() {
  const params = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (params?.id) {
      getUserDetails(params?.id)
        .then((response) => {
          setUserDetails(response?.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params?.id]);

  return (
    <div className="user_details">
      <h2>User Details</h2>

      <div className="user_card">
        {userDetails?.email ? (
          <>
            <div className="Userinfo">
              <img className="imgclass" src={userDetails?.avatar} alt="Avtar" />
            </div>
            <div className="userTable">
              <p>
                {" "}
                <strong>First Name : </strong> {userDetails?.first_name}
              </p>
              <p>
                {" "}
                <strong>Last Name : </strong> {userDetails?.last_name}
              </p>{" "}
              <p>
                {" "}
                <strong> Email Id : </strong> {userDetails?.email}
              </p>
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}

export default UserDetails;
