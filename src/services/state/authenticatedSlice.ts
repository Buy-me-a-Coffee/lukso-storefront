import { createSlice } from "@reduxjs/toolkit";

export interface AuthenticatedState {
  isAuthenticated: boolean;
}

const initialState: AuthenticatedState = {
  isAuthenticated: false,
};

const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = authenticatedSlice.actions;

export default authenticatedSlice.reducer;
