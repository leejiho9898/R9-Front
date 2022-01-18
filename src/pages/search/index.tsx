import React from "react";
import { NextPage } from "next";
import { Typography } from "@mui/material";
import JobCard from "~/components/home/JobCard";
import { BasicDarkBox } from "~/styles/Boxes";

import Search from "~/components/home/Search";
import { useRouter } from "next/router";
import { useJobSearchEffect } from "~/hooks/job/useJobSearchEffect";
import AdvancedSearch from "~/components/home/AdvancedSearch";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;
  const { jobs } = useJobSearchEffect(title);
  console.log(jobs);
  return (
    <BasicDarkBox>
      <Typography sx={{ textAlign: "center", margin: 2 }} variant="h6">
        일자리 검색
      </Typography>
      <Search />
      <AdvancedSearch tit={title} />
      <JobCard data={jobs} />
    </BasicDarkBox>
  );
};

export default SearchPage;
