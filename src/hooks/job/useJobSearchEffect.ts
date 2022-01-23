import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";
import { searchJobAPI } from "~/libs/api/job";
import { ISearchState } from "~/types/stores";
import usePagnation from "../common/usePagnation";

export function useJobSearchEffect(query: ParsedUrlQuery) {
  const {
    totalCount,
    setTotalCount,
    setTotalPage,
    totalPage,
    pageNo,
    setPageNo,
  } = usePagnation();

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await searchJobAPI(pageNo, 10, query);
        setJobs(response.items);
        setTotalCount(response.totalCount);
        setTotalPage(response.totalPage);
      } catch (error) {
        console.log(error, "공고 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [pageNo, query]);

  return { jobs, totalCount, totalPage, pageNo, setPageNo };
}
