import React from "react";
import { Card, Container, styled } from "@mui/material";
import ReviewPostEditor from "src/components/review/ReviewPostEditor";
import { BasicBox } from "~/styles/Boxes";

const ReviewPostPage = () => {
  return (
    <>
      <BasicBox>
        <Card sx={{ p: 4 }}>
          <ReviewPostEditor />
        </Card>
      </BasicBox>
    </>
  );
};

export default ReviewPostPage;
