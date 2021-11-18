import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobStatus, PayMentsMethod } from "src/types/enums"; // IDK
import { IJobState } from "src/types/stores";
import { AppState } from "../store";

const initialState: IJobState = {
  writer: null,
  title: "",
  deadline: new Date(),
  detail: "",
  personnel: 0,
  age: 50,
  workType: "",
  adress: "",
  payment: PayMentsMethod.PERHOUR,
  workingDay: [],
  startTime: new Date(),
  endTime: new Date(),
  wage: 8750,
  status: JobStatus.ACTIVATE,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    // setJobs: (state: any, { payload: { key, value } }: PayloadAction<any>) => { // key, value..!
    //   state[key] = value;
    // },
    addJobs: (state: any,{payload}: PayloadAction<any>) =>{
        state.job = payload;
    }
  },
});

export const { addJobs } = jobSlice.actions;
export const getAllJobs =(state: AppState) => state.jobs; // 여기 확인부탁! state.slicename.property..!
// export const selectJob = (state: AppState) => state.job; 
export default jobSlice.reducer;

