import { Dispatch, useEffect, useState } from "react";
import { findBizReviews } from "~/libs/api/reviews";

export default function useReviewEffect(bizId: any) {
  const [reviews, setReviews] = useState<any[]>([]);
  /** 총 아이템 수 */
  const [totalCount, setTotalCount] = useState(0);
  /** 패아자 수 */
  const [totalPage, setTotalPage] = useState(0);
  /** 현재 페이지 */
  const [pageNo, setPageNo] = useState(1);

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
