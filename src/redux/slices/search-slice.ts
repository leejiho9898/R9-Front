import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayMentsMethod } from "~/types/enums";
import { ISearchState } from "~/types/stores";
import { AppState } from "../store";

const initialState: ISearchState = {
  title: "",
  adress: "",
  payment: PayMentsMethod.PERHOUR,
  workType: "",
  period: "",
  hashtagIds: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (
      state: any,
      { payload: { key, value } }: PayloadAction<any>
    ) => {
      state[key] = value;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearch = (state: AppState) => state.search;
