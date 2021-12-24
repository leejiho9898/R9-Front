import { useRouter } from "next/router";
import React from "react";
import useInput from "../common/useInput";

const useBizSearchForm = () => {
  const router = useRouter();
  const [search, onChangeSearch] = useInput("");

  const onSearchReview = async () => {
    try {
      router.push(`/jobs/reviews/search?bizname=${search}`);
    } catch (e) {}
  };
  return { search, onChangeSearch, onSearchReview };
};

export default useBizSearchForm;
