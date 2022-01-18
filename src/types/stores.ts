import { Gender, JobStatus, PayMentsMethod } from "./enums";
import { User } from "./user";

export interface AuthState {
  user: User | null;
}

export interface IJobState {
  title: string;
  deadline: Date;
  detail: string;
  personnel: number;
  age: number;
  workType: string;
  adress: string;
  payment: PayMentsMethod;
  workingDay: string[];
  startTime: string;
  endTime: string;
  wage: number;
  status: JobStatus;
  period: string;
  gender: Gender;
  sectors: string;
  hashtags: any[];
}

export interface IReviewState {
  title: string;
  startDate: Date;
  endDate: Date;
  content: string;
  rating: number;
  bizId: string;
}

export interface IApplyState {
  user: User | null;
  title: string;
  job: IJobState;
  moreDetail: string;
}

export interface ISearchState {
  title: string;
  adress: string;
  payment: PayMentsMethod;
  workType: string;
  period: string;
  personnel: string;
  age: string;
  hashtagIds: string;
}
