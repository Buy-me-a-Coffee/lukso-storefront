import { configureStore } from '@reduxjs/toolkit';
import nftMintedSliceReducer from '../state/nftMintedSlice';
import authenticatedSliceReducer from '../state/authenticatedSlice';

const store = configureStore({
  reducer: {
    nftMinted: nftMintedSliceReducer,
    authenticated: authenticatedSliceReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;