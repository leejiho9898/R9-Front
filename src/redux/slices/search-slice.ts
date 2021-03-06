import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayMentsMethod } from "~/types/enums";
import { ISearchState } from "~/types/stores";
import { AppState } from "../store";

const initialState: ISearchState = {
  title: "",
  adress: "",
  payment: PayMentsMethod.NULL,
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
    setSearchEmpty: () => initialState,
  },
});

export const { setSearch, setSearchEmpty } = searchSlice.actions;
export const selectSearch = (state: AppState) => state.search;
