import React from "react";
import { useRouter } from "next/router";
import ReviewDetail from "src/components/review/ReviewDetail";
import { BasicBox } from "~/styles/Boxes";

const ReviewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <BasicBox>
        <ReviewDetail id={id} />
      </BasicBox>
    </>
  );
};

export default ReviewPage;
