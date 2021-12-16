import { NextPage } from "next";
import {
  Typography,
  IconButton,
  Box,
  Card,
  TextField,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

import { styled } from "@mui/system";
import { JobTags } from "~/components/application/Jobtags";
import { ContainerBox } from "~/styles/Boxes";
import useApplyerEffect from "~/hooks/apply/useApplyerEffect";
import { useRouter } from "next/router";
import { Gender } from "~/types/user";

const ProfileImage = styled(IconButton)({
  padding: 30,
  color: "#fff",
});

// 지원자 사장님에게 보낸 지원서
const hashtages1 = ["문서 작업", "매장 관리", "운전 가능"];

// 타입정의 해야함
const JobApplyPage2: NextPage = () => {
  const router = useRouter();
  const { applyid } = router.query;
  console.log(applyid);
  const { apply } = useApplyerEffect(applyid);
  console.log(apply);
  return (
    <ContainerBox>
      <Card sx={{ p: 4, textAlign: "center" }}>
        {/* 지원자 정보 */}
        <Box>
          <ProfileImage>
            <Avatar
              sx={{ width: 80, height: 80 }}
              alt="profile"
              src={apply?.user.profileImage}
            />
          </ProfileImage>
          <Typography mt={2} gutterBottom variant="subtitle2" component="div">
            {apply?.user.name}
          </Typography>
        </Box>
        <Stack spacing={1}>
          <Typography variant="body1">주소 : {apply?.user.address}</Typography>
          <Typography variant="body1">
            생년월일 :{apply?.user.dateOfBirth}
          </Typography>
          <Typography variant="body1">
            메일주소 : {apply?.user.email}
          </Typography>
          <Typography variant="body1">
            성별 :{apply?.user.gender === Gender.MALE ? "남성" : "여성"}
          </Typography>
        </Stack>
        {/* 태그 */}
        <Box>
          {apply?.user.useHashtags === undefined ? (
            <Typography variant="body1">
              해당 유저는 핵심 키워드를 입력하지 않았습니다.
            </Typography>
          ) : (
            <JobTags title="지원자 핵심 키워드" type={hashtages1} />
          )}
        </Box>

        <Box px={2}>
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
            placeholder="세부사항 기입했음"
          />
        </Box>
        <Box m={2}>
          <Button fullWidth variant="contained" color="secondary" size="large">
            연락하기
          </Button>
        </Box>
      </Card>
    </ContainerBox>
  );
};

export default JobApplyPage2;
