import { Job } from "./job";
import { User } from "./user";

export interface Applys {
  id: number;
  job: Job;
  moreDetail: string;
  user: User;
  createdAt: Date;
}
