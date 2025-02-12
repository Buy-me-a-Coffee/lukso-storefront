import { createSlice } from "@reduxjs/toolkit";

export interface NftState {
  nftMinted: boolean;
}

const initialState: NftState = {
  nftMinted: false,
};

const nftMintedSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setNftMinted: (state, action) => {
      state.nftMinted = action.payload;
    },
  },
});

export const { setNftMinted } = nftMintedSlice.actions;

export default nftMintedSlice.reducer;
