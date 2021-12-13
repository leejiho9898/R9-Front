import { Card, Typography, Stack, Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React from "react";
import useHandleApply from "~/hooks/apply/useHandleApply";
import { useMyApplysEffect } from "~/hooks/apply/useMyApplysEffect";
import { TypoAns, TypoQue } from "~/styles/Boxes";
import { JobStatus } from "~/types/enums";
export interface ApplyerHistoryListItem {
  name: string;
}
const ApplyHistoryList = () => {
  const { applys } = useMyApplysEffect();
  console.log(applys);
  const { deleteApply } = useHandleApply();
  return (
    <>
      <Typography align="center" variant="h5" py={2}>
        지원 내역
      </Typography>
      {applys.map((apply) => (
        <Card
          sx={{
            p: 1.5,
            border: "1px solid #d5d3d3",
            marginBottom: 2,
          }}
          key={apply.id}
        >
          <Stack direction="row" spacing={2} justifyContent="center">
            {/* 지원자 정보 */}
            <Box sx={{ width: "100%" }}>
              <Typography gutterBottom variant="subtitle2" component="div">
                <Link
                  href={`/jobs/${apply.job.id}`}
                  underline="hover"
                  color="inherit"
                >
                  {apply.job.title}
                </Link>{" "}
                ({moment(apply.createdAt).format("YYYY-MM-DD")} 지원)
              </Typography>
              <Box p={1} sx={{ textAlign: "left" }}>
                <Stack direction="row" spacing={1}>
                  <TypoQue>지원 추가정보 :</TypoQue>
                  <TypoAns>{apply.moreDetail}</TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>담당 업무 :</TypoQue>
                  <TypoAns>{apply.job.workType}</TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>게재상태 :</TypoQue>
                  <TypoAns>
                    {apply.job.status === JobStatus.ACTIVATE
                      ? "모집중"
                      : apply.job.status === JobStatus.INACTIVATE
                      ? "모집완료"
                      : "모집중지"}
                  </TypoAns>
                </Stack>
              </Box>

              <Button
                sx={{ float: "right" }}
                variant="outlined"
                onClick={() => {
                  deleteApply(apply.id);
                }}
              >
                지원 취소
              </Button>
            </Box>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export default ApplyHistoryList;
