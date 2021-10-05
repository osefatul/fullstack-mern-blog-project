import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  //So what are the actions for redux we want to deploy. when we click on the channel we need to enter the room. how we do that? we basically get the channel id and push it to the store.
  reducers: {
    //This is how we can dispatch loginFailure in the login page: ------>    dispatch(login(data))
    //then the data is assigned to the "user"
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    credentialsFetched: (state, action) => {
      state.isFetching = true;
    },
    loginFailure: (state, action) => {
      //This is how we can dispatch loginFailure in the login page: ------>    dispatch(loginFailure())
      state.error = true;
    },
  },
});

export const { login, logout, credentialsFetched, loginFailure } =
  userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.error;
export const selectFetch = (state) => state.user.isFetching;

export default userSlice.reducer;
