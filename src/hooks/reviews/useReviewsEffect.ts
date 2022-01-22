import { Dispatch, useEffect, useState } from "react";
import { findBizReviews } from "~/libs/api/reviews";
import usePagnation from "../common/usePagnation";

export default function useReviewEffect(bizId: any) {
  const {
    totalCount,
    setTotalCount,
    setTotalPage,
    totalPage,
    pageNo,
    setPageNo,
  } = usePagnation();
  const [reviews, setReviews] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await findBizReviews(bizId, pageNo);
        if (!reviews) {
          throw new Error("리뷰가 없습니다.");
        }
        setReviews(response.items);
        setTotalCount(response.totalCount);
        setTotalPage(response.totalPage);
      } catch (error) {
        console.log(error, "리뷰 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [pageNo]);

  return { reviews, totalCount, totalPage, pageNo, setPageNo };
}
