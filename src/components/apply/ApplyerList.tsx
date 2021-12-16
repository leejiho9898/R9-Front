import { Person } from "@mui/icons-material";
import {
  Card,
  Typography,
  IconButton,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
import useApplyersEffect from "~/hooks/apply/useApplyersEffect";
import { TypoAns, TypoQue } from "~/styles/Boxes";
import moment from "moment";
import { useRouter } from "next/router";
const ProfileImage = styled(IconButton)({
  width: "20px",
  height: "20px",

  padding: 30,
  color: "#fff",
  marginTop: "10px",
});

const ApplyerList = () => {
  const { applyers } = useApplyersEffect();
  const router = useRouter();
  const { jobid } = router.query;

  console.log(jobid);
  return (
    <>
      <Typography align="center" variant="h5" py={2}>
        지원자 목록
      </Typography>
      {applyers.map((applyer) => (
        <Card
          sx={{
            p: 1.5,
            border: "1px solid #d5d3d3",
            marginBottom: 2,
          }}
          key={applyer.id}
        >
          <Stack direction="row" spacing={2} ml={0.5}>
            {/* 지원자 정보 */}
            <Box sx={{ textAlign: "center", marginRight: 1 }}>
              <ProfileImage>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="profile"
                  src={applyer.user.profileImage}
                />
              </ProfileImage>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              ></Typography>
              <br />
              <Button
                variant="outlined"
                href={`/applyer/${jobid}/${applyer.id}`}
              >
                지원자 정보
              </Button>
            </Box>
            <Box sx={{ width: "auto" }}>
              <Typography gutterBottom variant="subtitle2" component="div">
                {applyer.user.name} (
                {moment(applyer.createdAt).format("YYYY-MM-DD")} 지원)
              </Typography>

              <Box p={1} sx={{ textAlign: "left" }}>
                <Stack direction="row" spacing={1}>
                  <TypoQue>추가정보 :</TypoQue>
                  <TypoAns>{applyer.moreDetail}</TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>주소 :</TypoQue>
                  <TypoAns>{applyer.user.address}</TypoAns>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <TypoQue>생년월일 :</TypoQue>
                  <TypoAns>
                    {moment(applyer.user.dateOfBirth).format("YYYY-MM-DD")}
                  </TypoAns>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export default ApplyerList;
