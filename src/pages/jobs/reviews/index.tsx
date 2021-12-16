import React from "react";
import ReviewList from "~/components/review/ReviewList";
import MiniSearch from "~/components/home/MiniSearch";
import { Typography } from "@mui/material";
import { BasicBox } from "~/styles/Boxes";

const ReviewPage = () => {
  return (
    <BasicBox>
      <Typography align="center" variant="h4" component="div">
        후기
      </Typography>

      <MiniSearch />
      <ReviewList />
    </BasicBox>
  );
};

export default ReviewPage;
