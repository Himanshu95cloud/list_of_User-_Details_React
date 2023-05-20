import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userList",
  initialState: {
    userList: [],
    page: 1,
    totalCount: 0,
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});
export const { setUserList, setPage, setTotalCount } = userSlice.actions;

export default userSlice.reducer;
