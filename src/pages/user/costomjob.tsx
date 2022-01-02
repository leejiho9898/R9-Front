import { Pagination, Typography } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import JobCard from "~/components/home/JobCard";
import { useCostomJobEffect } from "~/hooks/job/useCostomJobEffect";
import { selectAuth } from "~/redux/slices/auth-slice";
import { BasicDarkBox } from "~/styles/Boxes";

const CostomJob: NextPage = () => {
  const auth = useSelector(selectAuth);
  const { jobs, totalPage, pageNo, setPageNo } = useCostomJobEffect();
  return (
    <BasicDarkBox>
      <Typography sx={{ textAlign: "center", margin: 2 }} variant="h6">
        {auth.user?.name}님 만을 위한 맞춤일자리
      </Typography>
      <JobCard data={jobs} />
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
    </BasicDarkBox>
  );
};

export default CostomJob;
