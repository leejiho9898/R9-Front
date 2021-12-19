import React, { useState } from "react";
import { NextPage } from "next";
import { Box, styled } from "@mui/system";
import {
  Typography,
  FormControl,
  TextField,
  Stack,
  Button,
  Grid,
} from "@mui/material";
import JobCard from "~/components/home/JobCard";
import { BasicDarkBox } from "~/styles/Boxes";

import { useJobEffect } from "~/hooks/job/useJobEffect";

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 2,
});

const HASHTAGS = ["돌봄", "주3회", "시니어 일자리", "당일 알바"];

const SearchPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { jobs } = useJobEffect();
  console.log(jobs);
  return (
    <BasicDarkBox>
      {/* 검색창 */}
      <SearchWrapper>
        {/* 검색창 */}
        <Typography mt={4} gutterBottom variant="h6" component="div">
          일자리 검색
        </Typography>
        <FormControl sx={{ width: 400 }}>
          <Stack direction="row" spacing={0.25}>
            <TextField
              sx={{ width: "100%", backgroundColor: "white" }}
              size="small"
              focused
              placeholder="후기를 보고 싶은 일자리를 검색해주세요"
            />
            <Button variant="contained" sx={{ width: "3rem" }}>
              검색
            </Button>
          </Stack>
          <Box>
            <Stack direction="row" spacing={1} justifyContent="center"></Stack>
          </Box>
        </FormControl>
      </SearchWrapper>
      <Typography variant="h6" component="div" textAlign="center">
        맞춤 일자리
      </Typography>
      <JobCard data={jobs} />
    </BasicDarkBox>
  );
};

export default SearchPage;
