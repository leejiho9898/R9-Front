import { useEffect, useState } from "react";
import { findBizReviews } from "~/libs/api/reviews";

export default function useReviewEffect(bizId: any) {
  const [reviews, setReviews] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const reviews = await findBizReviews(bizId);
        if (!reviews) {
          throw new Error("리뷰가 없습니다.");
        }
        setReviews(reviews);
      } catch (error) {
        console.log(error, "리뷰 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [setReviews]);

  return { reviews, setReviews };
}
