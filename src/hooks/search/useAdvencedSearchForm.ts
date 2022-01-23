import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "~/redux/slices/search-slice";

export const useAdvencedSearchForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const onChangeSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    const body = {
      key: name,
      value,
    };
    dispatch(setSearch(body));
  };

  const onSearch = async () => {
    const { adress, hashtagIds, payment, period, title, workType } = search;
    router.push(
      `/search?pageNo=1&pageSize=10&title=${title}&adress=${adress}&payment=${payment}&workType=${workType}&hashtagIds=${hashtagIds}&period=${period}`
    );
  };
  return { search, onChangeSearch, onSearch };
};
