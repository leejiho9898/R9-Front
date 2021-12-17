import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
  Select,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const SortBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: 20,
});

const SortButton = styled(FormControl)({
  minWidth: 100,
  minHeight: 5,
  fontSize: 10,
  marginRight: 5,
});

const SortButtons = () => {
  return (
    <SortBox>
      {/* 아이콘이 미묘하게 라인 안맞음 */}
      <Typography variant="h6" component="div">
        맞춤 일자리
      </Typography>
    </SortBox>
  );
};

export default SortButtons;
