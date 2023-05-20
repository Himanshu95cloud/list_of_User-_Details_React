import React from "react";
import UserInfo from "./Pages/Userinfo";
import UserList from "./Pages/UserList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Common/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<UserList />}></Route>
            <Route
              path="UserInfo"
              element={<Navigate to="/" replace={true} />}
            ></Route>
            <Route path="UserInfo/:id" element={<UserInfo />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
