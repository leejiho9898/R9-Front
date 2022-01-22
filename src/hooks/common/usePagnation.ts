import React, { useState } from "react";

const usePagnation = () => {
  /** 총 아이템 수 */
  const [totalCount, setTotalCount] = useState(0);
  /** 패아자 수 */
  const [totalPage, setTotalPage] = useState(0);
  /** 현재 페이지 */
  const [pageNo, setPageNo] = useState(1);

  return {
    totalCount,
    setTotalCount,
    setTotalPage,
    totalPage,
    pageNo,
    setPageNo,
  };
};

export default usePagnation;
