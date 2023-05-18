import React from "react";
import UserInfo from "./Pages/Userinfo";
import UserList from "./Pages/UserList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "antd/es/card/Card";

function App() {
  return (
    <BrowserRouter>
      <Card className="App">
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/yourposts" element={<UserInfo />}></Route>
        </Routes>
      </Card>
    </BrowserRouter>
  );
}

export default App;
