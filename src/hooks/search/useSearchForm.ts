import { useRouter } from "next/router";
import React from "react";
import useInput from "../common/useInput";

export const useSearchForm = () => {
  const router = useRouter();

  const [search, onChangeSearch] = useInput("");

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length === 0) return false;
    router.push(`/search?title=${search}`);
  };
  return { search, onChangeSearch, onSearch };
};
