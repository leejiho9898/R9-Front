import React from "react";
import { TextField, Stack, Button } from "@mui/material";
import { useSearchForm } from "~/hooks/search/useSearchForm";
import { useAdvencedSearchForm } from "~/hooks/search/useAdvencedSearchForm";

const Search = () => {
  const { search, onChangeSearch, onSearch } = useAdvencedSearchForm();

  return (
    <Stack direction="row" spacing={0.25} mt="5" justifyContent="center">
      <TextField
        sx={{
          width: "80%",
          backgroundColor: "white",
          borderRadius: 10,
        }}
        size="small"
        focused
        placeholder="아르바이트를 검색해주세요"
        value={search.title}
        onChange={onChangeSearch}
        name="title"
      />
      <Button variant="contained" sx={{ width: "3rem" }} onClick={onSearch}>
        검색
      </Button>
    </Stack>
  );
};

export default Search;
