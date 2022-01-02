import React, { useEffect, useState } from "react";
import { findCostomJobsAPI } from "~/libs/api/job";

export function useCostomJobEffect() {
  const [jobs, setJobs] = useState<any[]>([]);
  /** 총 아이템 수 */
  const [totalCount, setTotalCount] = useState(0);
  /** 패아자 수 */
  const [totalPage, setTotalPage] = useState(0);
  /** 현재 페이지 */
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await findCostomJobsAPI(pageNo);
        console.log(response);
        if (!response) {
          throw new Error("맞춤 공고가 없습니다.");
        }
        setJobs(response.items);
        setTotalCount(response.totalCount);
        setTotalPage(response.totalPage);
      } catch (error) {
        console.log(error, "맞춤 공고를 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [pageNo]);

  return { jobs, totalCount, totalPage, pageNo, setPageNo };
}
