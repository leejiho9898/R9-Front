import { Person } from "@mui/icons-material";
import {
  Button,
  Card,
  TextField,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
import { CheckBoxOutlined } from "@mui/icons-material";
const ProfileImage = styled(IconButton)({
  background: "#796f6f",
  borderRadius: "50",
  padding: 30,
  color: "#fff",
});

const ApplyerList = () => {
  return (
    <>
      <Card sx={{ p: 2, border: "1px solid #d5d3d3" }}>
        <Stack direction="row">
          {/* 지원자 정보 */}
          <Box>
            <ProfileImage>
              <Person fontSize="large" />
            </ProfileImage>
            <Typography
              variant="body2"
              sx={{ display: "flex", justifyItems: "center" }}
            >
              지원자 정보 보기 <CheckBoxOutlined fontSize="small" />
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="subtitle1" component="div">
              홍길동 (65세)
            </Typography>

            <Box p={2} sx={{ width: "80%", textAlign: "left" }}>
              <Stack direction="row">
                <Typography variant="subtitle2">지원 내역 :</Typography>
                <Typography>어쩌구 저쩌구 ㅋㅋ</Typography>
              </Stack>
              <Typography variant="subtitle2">지원일</Typography>
              <Typography variant="subtitle2">지원자 핵심 키워드 :</Typography>
              <Typography variant="subtitle2">추가 사항:</Typography>
            </Box>
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default ApplyerList;
