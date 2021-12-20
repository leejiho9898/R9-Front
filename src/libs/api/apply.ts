import { client } from ".";
const url = {
  APPLYS: "/applys",
};

/** 지원서 작성 */
export const createApplyAPI = async (body: {
  job: number;
  moreDetail: string;
}) => {
  const response = await client.post(url.APPLYS, body);
  return response.data;
};

/** 내 지원서 목록 보기 */
export const findMyApplysAPI = async () => {
  const response = await client.get(url.APPLYS);
  return response.data;
};

/** 지원서 삭제하기*/
export const deleteApplyById = async (id: number) => {
  const response = await client.delete(`${url.APPLYS}/${id}`);
  return response.data;
};

/** 특정 지원서 불러오기*/
export const findApplyByIdAPI = async (id: number) => {
  const response = await client.get(`${url.APPLYS}/${id}`);
  return response.data;
};
