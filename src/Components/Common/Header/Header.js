import React from "react";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function HandleClick() {
    navigate(`/`);
  }
  return (
    <>
      <Menu mode="horizontal" theme="dark" breakpoint="md">
        <Menu.Item onClick={HandleClick} key="home">
          Home
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Header;
