import React from "react";
import { NextPage } from "next";
import {
  Typography,
  IconButton,
  Box,
  Card,
  TextField,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { styled } from "@mui/system";
import { JobTags } from "~/components/application/Jobtags";
import { useSelector } from "react-redux";
import { selectAuth } from "~/redux/slices/auth-slice";
import { useRouter } from "next/router";
import { Gender } from "~/types/user";
import { useApplyForm } from "~/hooks/apply/useApplyForm";

const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 10,
});

const ProfileImage = styled(IconButton)({
  borderRadius: "50",
  padding: 30,
  color: "#fff",
});

const JobApplyPage: NextPage = () => {
  
  const router = useRouter();
  const { jobid } = router.query;
  const auth = useSelector(selectAuth);

  const { state, onChangeState, onSubmit } = useApplyForm(jobid);
  const { user } = auth;
  return (
    <ContainerBox>
      <Card sx={{ p: 4 }}>
        <Box>
          <Box>
            <ProfileImage>
              <Avatar
                sx={{ width: 80, height: 80 }}
                alt="profile"
                src={user?.profileImage}
              />
            </ProfileImage>
            <Typography mt={2} gutterBottom variant="subtitle2" component="div">
              {user?.name}
            </Typography>
          </Box>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body2">
              주소 : {user?.address?.roadAddress}
            </Typography>
            <Typography variant="body2">
              생년월일 : {user?.dateOfBirth}
            </Typography>
            <Typography variant="body2">
              성별 :{user?.gender === Gender.MALE ? "남성" : "여성"}
            </Typography>
            <Typography variant="body2">이메일 : {user?.email}</Typography>
          </Box>
          {/* 태그 */}
          <Box sx={{ mt: 1 }}>
            {user?.useHashtags?.length === 0 ? (
              <Typography variant="subtitle2">
                해당 유저는 핵심 키워드를 입력하지 않았습니다.
              </Typography>
            ) : (
              <JobTags title="지원자 핵심 키워드" type={user?.useHashtags} />
            )}
          </Box>

          <Box py={2}>
            <Typography
              align="center"
              gutterBottom
              variant="subtitle2"
              component="div"
            >
              추가사항
            </Typography>
            <TextField
              multiline
              rows={2}
              fullWidth
              value={state}
              onChange={onChangeState}
            />
          </Box>
          <Box m={2}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              onClick={onSubmit}
            >
              지원하기
            </Button>
          </Box>
        </Box>
      </Card>
    </ContainerBox>
  );
};

export default JobApplyPage;
