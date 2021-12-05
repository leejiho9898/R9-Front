import { Card, Typography, Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
export interface ApplyerHistoryListItem {
  name: string;
}
export const ApplyerHistoryLists: ApplyerHistoryListItem[] = [
  { name: "지원내역" },
  { name: "지원일" },
  { name: "게재상태" },
];
const ApplyHistoryList = () => {
  return (
    <>
      <Typography align="center" variant="h5" py={2}>
        지원 내역
      </Typography>
      <Card
        sx={{
          p: 1.5,
          border: "1px solid #d5d3d3",
          marginBottom: 2,
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* 지원자 정보 */}
          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              홍길동 (65세)
            </Typography>
            <Box p={1} sx={{ textAlign: "left" }}>
              {ApplyerHistoryLists.map(
                (ApplyerHistoryList: ApplyerHistoryListItem, index) => (
                  <Stack direction="row" spacing={1} key={index}>
                    <Typography
                      sx={{
                        width: "6rem",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      {ApplyerHistoryList.name} :
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      어쩌구 저쩌구 ㅋㅋ 어쩌구 저쩌구 ㅋㅋ 어쩌구 저쩌구 ㅋㅋ
                    </Typography>
                  </Stack>
                )
              )}
            </Box>
            <Button sx={{ float: "right" }} variant="outlined">
              지원 취소
            </Button>
          </Box>
        </Stack>
      </Card>
      <Card
        sx={{
          p: 1.5,
          border: "1px solid #d5d3d3",
          marginBottom: 2,
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* 지원자 정보 */}
          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              홍길동 (65세)
            </Typography>
            <Box p={1} sx={{ textAlign: "left" }}>
              {ApplyerHistoryLists.map(
                (ApplyerHistoryList: ApplyerHistoryListItem, index) => (
                  <Stack direction="row" spacing={1} key={index}>
                    <Typography
                      sx={{
                        width: "6rem",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      {ApplyerHistoryList.name} :
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      어쩌구 저쩌구 ㅋㅋ 어쩌구 저쩌구 ㅋㅋ 어쩌구 저쩌구 ㅋㅋ
                    </Typography>
                  </Stack>
                )
              )}
            </Box>
            <Button sx={{ float: "right" }} variant="outlined">
              지원 취소
            </Button>
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default ApplyHistoryList;
