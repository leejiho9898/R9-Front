import { CheckBoxOutlined, Person } from "@mui/icons-material";
import { Card, Typography, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
const ProfileImage = styled(IconButton)({
  width: "20px",
  height: "20px",
  background: "#796f6f",
  borderRadius: "50",
  padding: 30,
  color: "#fff",
  marginTop: "10px",
});

export interface ApplyerListItem {
  name: string;
}
export const ApplyerInfos: ApplyerListItem[] = [
  { name: "지원 내역" },
  { name: "지원일" },
  { name: "핵심 키워드" },
  { name: "추가사항" },
];
const ApplyerList = () => {
  return (
    <>
      <Typography align="center" variant="h5" py={2}>
        지원자 목록
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
          <Box sx={{ textAlign: "center", marginRight: 1 }}>
            <ProfileImage>
              <Person fontSize="large" />
            </ProfileImage>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              지원자 정보
              <br />
            </Typography>
            <CheckBoxOutlined />
          </Box>
          <Box sx={{ width: "auto" }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              홍길동 (65세)
            </Typography>

            <Box p={1} sx={{ textAlign: "left" }}>
              {ApplyerInfos.map((ApplyerInfo: ApplyerListItem, index) => (
                <Stack direction="row" spacing={1} key={index}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                    {ApplyerInfo.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    어쩌구 저쩌구 ㅋㅋ
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default ApplyerList;
