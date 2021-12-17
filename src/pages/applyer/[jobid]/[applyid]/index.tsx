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
  Modal,
} from "@mui/material";

import { styled } from "@mui/system";
import { JobTags } from "~/components/application/Jobtags";
import { ContainerBox } from "~/styles/Boxes";
import useApplyerEffect from "~/hooks/apply/useApplyerEffect";
import { useRouter } from "next/router";
import { Gender } from "~/types/user";
import useToggle from "~/hooks/useToggle";

const ProfileImage = styled(IconButton)({
  padding: 30,
  color: "#fff",
});

// 지원자 사장님에게 보낸 지원서

// 타입정의 해야함
const JobApplyPage2: NextPage = () => {
  const router = useRouter();
  const { applyid } = router.query;
  const [isModal, onToggleModal] = useToggle();
  const { apply } = useApplyerEffect(applyid);
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
            성별 :{apply?.user.gender === Gender.MALE ? "남성" : "여성"}
          </Typography>

          {/* 태그 */}
          <Box sx={{ mt: 1 }}>
            {apply?.user.useHashtags?.length === 0 ? (
              <Typography variant="subtitle2">
                해당 유저는 핵심 키워드를 입력하지 않았습니다.
              </Typography>
            ) : (
              <JobTags
                title="지원자 핵심 키워드"
                type={apply?.user.useHashtags}
              />
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
            <Typography
              sx={{
                padding: 1,
                border: "1px solid #d5d3d3",
                borderRadius: "10px",
              }}
            >
              {apply?.moreDetail}
            </Typography>
          </Box>
        </Stack>
        <Box m={2}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            onClick={onToggleModal}
          >
            연락하기
          </Button>
          <Modal
            open={isModal}
            onClose={onToggleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                메일주소 : {apply?.user.email}
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Card>
    </ContainerBox>
  );
};

export default JobApplyPage2;
