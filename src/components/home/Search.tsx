import React from "react";
import { TextField, Stack, Button } from "@mui/material";
import { useSearchForm } from "~/hooks/search/useSearchForm";

const Search = () => {
  const { search, onChangeSearch, onSearch } = useSearchForm();

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
        value={search}
        onChange={onChangeSearch}
      />
      <Button variant="contained" sx={{ width: "3rem" }} onClick={onSearch}>
        검색
      </Button>
    </Stack>
  );
};

export default Search;
