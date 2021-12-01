import { client } from ".";
const url = {
  HASHTAGS: "/hashtags",
};
export const findHashtagsAPI = async () => {
  const response = await client.get(url.HASHTAGS);
  return response.data;
};
