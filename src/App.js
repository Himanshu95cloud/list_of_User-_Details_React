import React from "react";
import UserInfo from "./Pages/Userinfo";
import UserList from "./Pages/UserList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "antd/es/card/Card";
import Header from "./Components/Common/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Card className="App">
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/UserInfo" element={<UserInfo />}></Route>
        </Routes>
      </Card>
    </BrowserRouter>
  );
}

export default App;
