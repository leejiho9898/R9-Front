import React, { useState } from "react";
import { NextPage } from "next";
import { Box, styled } from "@mui/system";
import {
  Typography,
  FormControl,
  TextField,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import JobCard from "~/components/home/JobCard";
import { BasicBox } from "~/styles/Boxes";

export interface Data {
  id: number;
  location: string;
  companyName: string;
  companyCategory: string;
  role: string;
  workDay: string[];
  workStartTime: string;
  workFinishTime: string;
  calutatePayBy: string;
  payRate: number;
  hashtags: string[];
}

export const data: Data[] = [
  {
    id: 1,
    location: "성남시 분당구",
    companyName: "이마트24 서현점",
    companyCategory: "편의점",
    role: "파트타임",
    workDay: ["월", "수", "금"],
    workStartTime: "10:00",
    workFinishTime: "16:00",
    calutatePayBy: "시급",
    payRate: 8720,
    hashtags: ["주3일", "급구"],
  },
  {
    id: 2,
    location: "서울 동작구",
    companyName: "부산어묵 노량진점",
    companyCategory: "일반음식점",
    role: "단기알바",
    workDay: ["요일협의"],
    workStartTime: "18:00",
    workFinishTime: "23:00",
    calutatePayBy: "시급",
    payRate: 11000,
    hashtags: ["평일", "시급"],
  },
  {
    id: 3,
    location: "안산시 상록구",
    companyName: "닥엔돈스",
    companyCategory: "일반음식점",
    role: "파트타임",
    workDay: ["스케쥴 협의"],
    workStartTime: "",
    workFinishTime: "",
    calutatePayBy: "시급",
    payRate: 10000,
    hashtags: ["주3일", "급구"],
  },
  {
    id: 4,
    location: "서울 종로구",
    companyName: "인크루트알바콜",
    companyCategory: "음성수집",
    role: "단기알바",
    workDay: ["평일"],
    workStartTime: "09:00",
    workFinishTime: "18:00",
    calutatePayBy: "건별",
    payRate: 200,
    hashtags: ["평일", "급구"],
  },
];

const ContainerBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
  marginBottom: 2,
});

const StyledStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
});

const HASHTAGS = ["돌봄", "주3회", "시니어 일자리", "당일 알바"];

const HomePage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BasicBox>
      {/* 검색창 */}
      <SearchWrapper>
        {/* 검색창 */}
        <Typography mt={4} gutterBottom variant="h6" component="div">
          일자리 검색
        </Typography>
        <FormControl sx={{ width: 400 }}>
          <Stack direction="row" justifyContent="space-between" spacing={0.25}>
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
      <JobCard data={data} />
    </BasicBox>
  );
};

export default HomePage;
