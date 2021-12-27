import { Typography } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "~/redux/slices/auth-slice";
import { BasicDarkBox } from "~/styles/Boxes";

const CostomJob: NextPage = () => {
  const auth = useSelector(selectAuth);
  return (
    <BasicDarkBox>
      <Typography sx={{ textAlign: "center", margin: 2 }} variant="h6">
        {auth.user?.name}님 만을 위한 맞춤일자리
      </Typography>
      {/* <JobCard data={jobs} /> */}
    </BasicDarkBox>
  );
};

export default CostomJob;
