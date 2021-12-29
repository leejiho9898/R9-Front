import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MobileDatePicker } from "@mui/lab";
import { useSnackbar } from "notistack";
import { Controller } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";
import { useToggle } from "~/hooks/useToggle";
import { useEditProfileForm } from "~/hooks/forms/useEditProfileForm";
import { Gender, Role } from "~/types/user";
import {
  usePatchUserMeMutation,
  usePostUploadMutation,
} from "~/redux/services/api";
import { selectAuth } from "~/redux/slices/auth-slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BasicBox } from "~/styles/Boxes";
import HashTagSignin from "~/components/common/HashTagSignin";
import { Hashtags } from "~/types/hashtags";
import { useDidMountEffect } from "~/hooks/common/useDidMountEffect";

const MyInfoPage: NextPage = () => {
  const auth = useSelector(selectAuth);
  const user = auth.user!;
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isModal, toggleModal] = useToggle();
  const [isHashModal, onToggleHashModal] = useToggle();
  const [hashTag, setHashTag] = useState<Hashtags[]>([]);
  const { handleSubmit, control, setValue, register } = useEditProfileForm({
    defaultValues: {
      role: user.role,
      name: user.name,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      useHashtags: user.useHashtags,
      address: {
        postalCode: user.address.postalCode,
        state: user.address.state,
        city: user.address.city,
        roadAddress: user.address.roadAddress,
      },
    },
  });

  // defaultValues 설정
  useEffect(() => {
    if (user.useHashtags) {
      setHashTag(user.useHashtags);
    }
  }, []);

  useDidMountEffect(() => {
    setValue("useHashtags", hashTag);
    console.log("바뀜");
  }, hashTag);
  const [patchUserMeMutation, { isLoading }] = usePatchUserMeMutation();
  const [postUploadMutatuin] = usePostUploadMutation();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    if (isLoading) {
      return;
    }
    if (data.profileImage) {
      const formBody = new FormData();
      formBody.append("file", data.profileImage[0]);
      await postUploadMutatuin(formBody)
        .unwrap()
        .then((res) => {
          data.profileImage = res.Location;
        });
    }
    patchUserMeMutation({ data })
      .unwrap()
      .then(() => {
        enqueueSnackbar("내 정보가 변경되었습니다.", {
          variant: "info",
        });
      })
      .catch((error) => {
        enqueueSnackbar(
          error.data.message || "예기치 못한 에러가 발생했습니다.",
          {
            variant: "error",
          }
        );
      });
    router.push("/");
  });

  return (
    <>
      <BasicBox>
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            내 정보
          </Typography>
          <Stack spacing={2} component="form" onSubmit={onSubmit}>
            <Typography variant="h6">계정 정보</Typography>
            <Controller
              control={control}
              name="role"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl size="small" fullWidth disabled>
                  <InputLabel id="role">사용자 유형</InputLabel>
                  <Select
                    labelId="role"
                    value={value || ""}
                    label="사용자 유형"
                    error={!!error}
                    onChange={onChange}
                  >
                    <MenuItem value={Role.USER}>일반 사용자</MenuItem>
                    <MenuItem value={Role.BUSINESS}>기업 사용자</MenuItem>
                  </Select>
                  <FormHelperText error>{error?.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="email"
                  label="이메일"
                  fullWidth
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                  disabled
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="password"
                  label="비밀번호"
                  fullWidth
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="password"
                  label="비밀번호 재확인"
                  fullWidth
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                />
              )}
            />
            <Stack spacing={1}>
              <Typography>프로필 이미지</Typography>
              <input
                {...register("profileImage")}
                accept="image/*"
                type="file"
              />
            </Stack>
            <Box
              sx={{
                textAlign: "center",
                marginTop: 1,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {hashTag.map((tag) => (
                <Chip key={tag.id} label={tag.name} sx={{ margin: 1 }} />
              ))}
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                onClick={onToggleHashModal}
                sx={{ minWidth: "30%" }}
              >
                핵심 키워드 입력 (선택)
              </Button>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                수정
              </Button>
            </Box>
          </Stack>
          <Stack spacing={2} component="form">
            <Typography variant="h6">개인 정보</Typography>
            <Controller
              control={control}
              name="name"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="이름"
                  fullWidth
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                  disabled
                />
              )}
            />
            <Controller
              control={control}
              name="gender"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl size="small" fullWidth disabled>
                  <InputLabel id="gender">성별</InputLabel>
                  <Select
                    labelId="gender"
                    value={value || ""}
                    label="성별"
                    error={!!error}
                    onChange={onChange}
                  >
                    <MenuItem value={Gender.MALE}>남성</MenuItem>
                    <MenuItem value={Gender.FEMALE}>여성</MenuItem>
                    <MenuItem value={Gender.OTHER}>기타</MenuItem>
                  </Select>
                  <FormHelperText error>{error?.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field: { onChange, value } }) => (
                <MobileDatePicker
                  label="생년월일"
                  mask="____.__.__"
                  inputFormat="yyyy.MM.DD"
                  toolbarFormat="yyyy.MM.DD"
                  okText="확인"
                  cancelText="취소"
                  value={value}
                  onChange={onChange}
                  disabled
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                />
              )}
            />
            <Stack direction="row" spacing={1}>
              <Controller
                control={control}
                name="address.postalCode"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type="text"
                    label="우편 번호"
                    fullWidth
                    size="small"
                    value={value || ""}
                    error={!!error}
                    helperText={error?.message}
                    onChange={onChange}
                    disabled
                  />
                )}
              />
              <Button
                variant="outlined"
                onClick={toggleModal}
                sx={{ minWidth: "30%" }}
              >
                주소 검색
              </Button>
            </Stack>
            <Controller
              control={control}
              name="address.roadAddress"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="상세 주소"
                  fullWidth
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                  disabled
                />
              )}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                수정
              </Button>
            </Box>
          </Stack>
        </Stack>
      </BasicBox>
      <Modal open={isModal} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95%",
          }}
        >
          <DaumPostcode
            onComplete={(data) => {
              setValue("address.postalCode", data.zonecode);
              setValue("address.state", data.sido);
              setValue("address.city", data.sigungu);
              setValue("address.roadAddress", data.roadAddress);
              toggleModal();
            }}
          />
        </Box>
      </Modal>
      <HashTagSignin
        isModal={isHashModal}
        onToggleModal={onToggleHashModal}
        setHashTag={setHashTag}
      />
    </>
  );
};

export default MyInfoPage;
