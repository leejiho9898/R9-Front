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
      useHashtags: user.useHashtags ? user.useHashtags : [],
      address: {
        postalCode: user.address
          ? user.address.postalCode
            ? user.address.postalCode
            : ""
          : "",
        state: user.address
          ? user.address.state
            ? user.address.state
            : ""
          : "",
        city: user.address ? (user.address.city ? user.address.city : "") : "",
        roadAddress: user.address
          ? user.address.roadAddress
            ? user.address.roadAddress
            : ""
          : "",
      },
    },
  });

  // defaultValues ??????
  useEffect(() => {
    if (user.useHashtags) {
      setHashTag(user.useHashtags);
    }
  }, []);

  useDidMountEffect(() => {
    setValue("useHashtags", hashTag);
    console.log("??????");
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
        enqueueSnackbar("??? ????????? ?????????????????????.", {
          variant: "info",
        });
      })
      .catch((error) => {
        enqueueSnackbar(
          error.data.message || "????????? ?????? ????????? ??????????????????.",
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
            ??? ??????
          </Typography>
          <Stack spacing={2} component="form" onSubmit={onSubmit}>
            <Typography variant="h6">?????? ??????</Typography>
            <Controller
              control={control}
              name="role"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl size="small" fullWidth disabled>
                  <InputLabel id="role">????????? ??????</InputLabel>
                  <Select
                    labelId="role"
                    value={value || ""}
                    label="????????? ??????"
                    error={!!error}
                    onChange={onChange}
                  >
                    <MenuItem value={Role.USER}>?????? ?????????</MenuItem>
                    <MenuItem value={Role.BUSINESS}>?????? ?????????</MenuItem>
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
                  label="?????????"
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
                  label="????????????"
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
                  label="???????????? ?????????"
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
              <Typography>????????? ?????????</Typography>
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
                ?????? ????????? ?????? (??????)
              </Button>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                ??????
              </Button>
            </Box>
          </Stack>
          <Stack spacing={2} component="form">
            <Typography variant="h6">?????? ??????</Typography>
            <Controller
              control={control}
              name="name"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="??????"
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
                  <InputLabel id="gender">??????</InputLabel>
                  <Select
                    labelId="gender"
                    value={value || ""}
                    label="??????"
                    error={!!error}
                    onChange={onChange}
                  >
                    <MenuItem value={Gender.MALE}>??????</MenuItem>
                    <MenuItem value={Gender.FEMALE}>??????</MenuItem>
                    <MenuItem value={Gender.OTHER}>??????</MenuItem>
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
                  label="????????????"
                  mask="____.__.__"
                  inputFormat="yyyy.MM.DD"
                  toolbarFormat="yyyy.MM.DD"
                  okText="??????"
                  cancelText="??????"
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
                    label="?????? ??????"
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
                ?????? ??????
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
                  label="?????? ??????"
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
                ??????
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
