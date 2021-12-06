import { client } from ".";
const url = {
  APPLYS: "/applys",
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
