import {
  Button,
  Pagination,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useReviewEffect from "~/hooks/reviews/useReviewsEffect";
import { Review } from "~/types/review";

interface ReviewDetailProps {
  id: string | string[] | undefined;
}

const ReviewDetail = ({ id }: ReviewDetailProps) => {
  const router = useRouter();

  const { reviews, totalPage, pageNo, setPageNo } = useReviewEffect(id);
  console.log(pageNo);
  return (
    <>
      <Typography align="center" variant="h4" sx={{ marginBottom: 3 }}>
        {reviews[0]?.biz?.bizName}
        <Button
          variant="contained"
          sx={{ float: "right", marginTop: 3 }}
          onClick={() => router.push(`/jobs/reviews/post/${id}`)}
        >
          후기 작성
        </Button>
      </Typography>

      {reviews &&
        reviews.map((review: Review, index) => (
          <Paper sx={{ paddingLeft: 3, paddingRight: 3 }}>
            <Stack
              spacing={2}
              py={3}
              borderBottom="1px solid #929191"
              key={index}
            >
              <Typography align="left" variant="h6">
                {review.title}
              </Typography>
              <Box sx={{ textAlign: "left" }}>
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="space-between"
                >
                  <Rating
                    name="text-feedback"
                    value={review.rating}
                    readOnly
                    precision={1}
                    size="medium"
                  />
                  <div>
                    <Typography mr="10px" fontWeight="bold">
                      {review.writer?.name}
                    </Typography>
                    <Typography color="gray">
                      기간 : {moment(review.endDate).format("YY/MM/DD")} ~
                      {moment(review.startDate).format("YY/MM/DD")}
                    </Typography>
                  </div>
                </Stack>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100px",
                  border: "1px solid rgb(192,192,192)",
                  borderRadius: "5px",
                }}
              >
                <Typography sx={{ padding: "15px" }}>
                  {review.content}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        ))}
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

export default ReviewDetail;
