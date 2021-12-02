import React from "react";
import { useRouter } from "next/router";

import { NextPage } from "next";
import { Card, Button } from "@mui/material";
import dynamic from "next/dynamic";
import JobContents from "~/components/job/JobContents";
import useJobDetailEffect from "~/hooks/job/useJobDetailEffect";
import { BasicBox } from "~/styles/Boxes";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/review/ReviewCarousel"),
  { ssr: false }
);

const Detail: NextPage = () => {
  const router = useRouter();

  const { job } = useJobDetailEffect();

  return (
    <BasicBox>
      <Card sx={{ p: 4 }}>
        <JobContents job={job} />
        <br />
        <DynamicComponentWithNoSSR id={job?.writer?.id} />

        <Button
          fullWidth
          onClick={() => router.push("/jobapply")}
          variant="contained"
          color="secondary"
        >
          지원하기
        </Button>
      </Card>
    </BasicBox>
  );
};

export default Detail;
