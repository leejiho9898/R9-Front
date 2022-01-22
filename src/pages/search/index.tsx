import React from "react";
import { NextPage } from "next";
import { Button, Pagination, Typography } from "@mui/material";
import JobCard from "~/components/home/JobCard";
import { BasicDarkBox } from "~/styles/Boxes";
import { useRouter } from "next/router";
import { useJobSearchEffect } from "~/hooks/job/useJobSearchEffect";
import AdvancedSearch from "~/components/home/AdvancedSearch";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { jobs, totalPage, pageNo, setPageNo } = useJobSearchEffect(
    router.query
  );
  return (
    <>
      <BasicDarkBox>
        <Typography sx={{ textAlign: "center", margin: 2 }} variant="h6">
          일자리 검색
        </Typography>
        <AdvancedSearch />
        <JobCard data={jobs} />
      </BasicDarkBox>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", mt: 5 }}
        count={totalPage}
        page={pageNo}
        color="primary"
        onChange={(e: React.ChangeEvent<unknown>, value: number) => {
          setPageNo(value);
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }}
      />
    </>
  );
};

export default SearchPage;
