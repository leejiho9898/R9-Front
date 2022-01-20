import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchJobListAPI } from "~/libs/api/job";
import { selectSearch, setSearch } from "~/redux/slices/search-slice";
import { ISearchState } from "~/types/stores";

export const useAdvencedSearchForm = () => {
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
    console.log(search);
  };

  const onSearch = async () => {
    await searchJobListAPI(1, 1, search);
  };
  return { search, onChangeSearch, onSearch };
};
