import axios from "axios";
import { IJobState } from "src/types/stores";
import { client } from ".";

const url = {
  JOBS: "/jobs",
};

/** 공고 생성 */
export const createJobAPI = async (job: IJobState) => {
  const response = await client.post(url.JOBS, job);
  return response.data;
};

/** 공고 리스트 호출 */
export const findJobsAPI = async () => {
  const resposne = await client.get(`${url.JOBS}?pageNo=1&pageSize=10`);
  return resposne.data;
};

/** 내 공고 리스트 호출 */
export const findJobsMeAPI = async () => {
  const resposne = await client.get(`${url.JOBS}/me`);
  return resposne.data;
};

/** 내 맞춤 공고 리스트 호출 */
export const findCostomJobsAPI = async (pageNo: number) => {
  const response = await client.get(
    `${url.JOBS}/custom?pageNo=${pageNo}&pageSize=10`
  );
  return response.data;
};


/** 특정 ID 가진 공고 호출 */
export const findJobByIdAPI = async (id: any) => {
  const resposne = await client.get(`${url.JOBS}/${id}`);
  return resposne.data;
};

/** 공고 삭제 */
export const deleteJobAPI = async (id: number) => {
  await client.delete(`${url.JOBS}/${id}`);
};

/** 공고 업데이트 */
export const updateJobAPI = async (id: number) => {
  await client.patch(`${url.JOBS}/${id}`);
};

/** 공고 상태 업데이트 */
export const switchJobStatus = async (id: number) => {
  await client.patch(`${url.JOBS}/status/${id}`);
};

/** 공고 검색 */
export const searchJobAPI = async (title: string) => {
  const resposne = await client.get(`${url.JOBS}/search?title=${title}`);
  return resposne.data;
};
