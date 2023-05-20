import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserData/Reducer";

export default configureStore({
  reducer: {
    userData: UserReducer,
  },
});
