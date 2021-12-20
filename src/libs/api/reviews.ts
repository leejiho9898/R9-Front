import { IReviewState } from "~/types/stores";
import { client } from ".";

/** 리뷰 목록 조회 */
export const findReviews = async () => {
  const response = await client.get("/reviews");
  return response.data;
};

/** 리뷰 등록 */
export const createReview = async (review: IReviewState) => {
  const response = await client.post("/reviews", review);
  return response.data;
};

/** 리뷰 목록 조회 */
export const findBizReviews = async (bizId: any, pageNo: number) => {
  const response = await client.get(
    `/reviews/search/${bizId}?pageNo=${pageNo}&pageSize=10`
  );
  return response.data;
};
