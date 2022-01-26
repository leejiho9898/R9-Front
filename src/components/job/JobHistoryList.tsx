import { Card, Typography, Stack, Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React from "react";
import { useJobHandle } from "~/hooks/job/useJobHandle";
import { useJobMeEffect } from "~/hooks/job/useJobMeEffect";
import { TypoAns, TypoQue } from "~/styles/Boxes";
import { JobStatus } from "~/types/enums";
export interface ApplyerHistoryListItem {
  name: string;
}
const JobHistoryList = () => {
  const { jobs, setRender, render } = useJobMeEffect();
  const { onSwichJobStatus } = useJobHandle();
  console.log(jobs);
  return (
    <>
      <Typography align="center" variant="h5" py={2}>
        내 공고 목록
      </Typography>
      {jobs.map((job) => (
        <Card
          sx={{
            p: 1.5,
            border: "1px solid #d5d3d3",
            marginBottom: 2,
          }}
          key={job.id}
        >
          <Stack direction="row" spacing={2} justifyContent="center">
            {/* 공고 정보 */}
            <Box sx={{ width: "100%" }}>
              <Typography gutterBottom variant="subtitle2" component="div">
                <Link href={`/jobs/${job.id}`} underline="hover" color="inherit">
                  제목 : {job.title}
                </Link>
              </Typography>
              <Box p={1} sx={{ textAlign: "left" }}>
                <Stack direction="row" spacing={1}>
                  <TypoQue>작성일 : </TypoQue>
                  <TypoAns>{moment(job.createAt).format("YYYY-MM-DD")}</TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>근무 요일 : </TypoQue>
                  <TypoAns>{job.workingDay}</TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>근무시간 : </TypoQue>
                  <TypoAns>
                    {job.startTime}~{job.endTime}
                  </TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>게재상태 :</TypoQue>
                  <TypoAns>
                    {job.status === JobStatus.ACTIVATE
                      ? "모집중"
                      : job.status === JobStatus.INACTIVATE
                      ? "모집완료"
                      : "모집중지"}
                  </TypoAns>
                </Stack>
              </Box>
              <Stack direction="row" spacing={1} sx={{ float: "right" }}>
                <Button variant="contained" href={`/applyer/${job.id}`}>
                  지원자 목록
                </Button>
                {job.status === JobStatus.ACTIVATE ? (
                  <Button
                    variant="contained"
                    onClick={() => onSwichJobStatus(job.id, setRender, render)}
                  >
                    모집 완료
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    onClick={() => onSwichJobStatus(job.id, setRender, render)}
                  >
                    다시 모집
                  </Button>
                )}
              </Stack>
            </Box>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export default JobHistoryList;
