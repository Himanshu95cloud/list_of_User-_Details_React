import React from "react";
import { Menu } from "antd";
// import "antd/dist/antd.css";

const Header = () => {
  return (
    <Menu mode="horizontal" theme="dark" breakpoint="md">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="destinations">Destinations</Menu.Item>
      <Menu.Item key="blog">Blog</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
  );
};

export default Header;
