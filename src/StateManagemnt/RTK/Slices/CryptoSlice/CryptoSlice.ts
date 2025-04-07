// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Redux

// Handlers
import { I_ReduxAsyncBasicType } from "../../Handlers/ReduxAsyncHelperHandlers";
import {
  setIsDone,
  setIsError,
  setIsPending,
} from "../../Handlers/ReduxAsyncHelperHandlers";
// Handlers

// Models
import {
  T_SendingDataForGettingCryptoBlocks,
  T_WithAPIKey,
} from "../../../../Models/__SendingData__/Crypto/SendingDataForCryptos";
import { I_CryptoBlock } from "../../../../Models/Crypto/CryptoInterfaces";
// Models

// Services
import { getAllCryptoBlocksService } from "../../../../Services/Crypto/Get/getAllCryptoBlocksService";
// Services

const initialState: {
  allCryptoDates: I_ReduxAsyncBasicType & {
    data: I_CryptoBlock[];
  };
} = {
  allCryptoDates: {
    data: [],
    isDone: false,
    isError: false,
    isPending: true,
  },
};

export const getAsyncCryptoList = createAsyncThunk(
  "crypto/getAllCryptoList",
  async (_data: T_WithAPIKey<T_SendingDataForGettingCryptoBlocks>) => {
    try {
      const { data } = await getAllCryptoBlocksService(_data);
      return data.result;
    } catch (err) {
      console.log(err);
      // custom error handling !
      throw err;
    }
  }
);

export const CryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncCryptoList.pending, (state, action) => {
      setIsPending(state.allCryptoDates);
    });
    builder.addCase(getAsyncCryptoList.fulfilled, (state, action) => {
      setIsDone(state.allCryptoDates);
      state.allCryptoDates.data = action.payload;
    });
    builder.addCase(getAsyncCryptoList.rejected, (state, action) => {
      setIsError(state.allCryptoDates);
    });
    //
    //
    //
    //
    //
    //
  },
});
