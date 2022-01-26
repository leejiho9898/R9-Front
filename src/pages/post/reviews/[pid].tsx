import React from "react";
import { Card, Container, styled } from "@mui/material";
import ReviewPostEditor from "src/components/review/ReviewPostEditor";
import { BasicDarkBox } from "~/styles/Boxes";

const ReviewPostPage = () => {
  return (
    <>
      <BasicDarkBox>
        <Card sx={{ p: 4 }}>
          <ReviewPostEditor />
        </Card>
      </BasicDarkBox>
    </>
  );
};

export default ReviewPostPage;
