import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { Gender, JobStatus, PayMentsMethod } from "src/types/enums";
import { IJobState } from "src/types/stores";
import { AppState } from "../store";

const initialState: IJobState = {
  title: "",
  deadline: new Date(),
  detail: "",
  personnel: 0,
  age: 50,
  workType: "",
  adress: "",
  payment: PayMentsMethod.PERHOUR,
  workingDay: [],
  startTime: "07:30",
  endTime: "07:30",
  wage: 8750,
  status: JobStatus.ACTIVATE,
  period: "하루",
  gender: Gender.ANY,
  sectors: "",
  hashtags: [],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJob: (state: any, { payload: { key, value } }: PayloadAction<any>) => {
      state[key] = value;
    },
    setJobNumber: (
      state: any,
      { payload: { key, value } }: PayloadAction<{ key: string; value: number }>
    ) => {
      state[key] = value;
    },
  },
});

export const { setJob, setJobNumber } = jobSlice.actions;
export const selectJob = (state: AppState) => state.job;
