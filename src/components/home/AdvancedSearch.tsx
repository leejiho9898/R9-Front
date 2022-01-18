import React from "react";
import {
  TextField,
  Stack,
  Button,
  Typography,
  Paper,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useSearchForm } from "~/hooks/search/useSearchForm";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectSearch } from "~/redux/slices/search-slice";
import { useAdvencedSearchForm } from "~/hooks/search/useAdvencedSearchForm";
import useToggle from "~/hooks/useToggle";
import HashTagClick from "../common/HashTagClick";

interface AdvancedSearchProps {
  tit: any;
}
useAdvencedSearchForm;
const AdvancedSearch = ({ tit }: AdvancedSearchProps) => {
  const search = useSelector(selectSearch);
  const {
    title,
    payment,
    workType,
    period,
    personnel,
    adress,
    age,
    hashtagIds,
  } = search;
  const [isHashtag, onToggleHashtag] = useToggle();
  return (
    <Paper sx={{ mt: 2, padding: 1 }}>
      <Stack spacing={1} p={1.5}>
        <Stack direction="row" justifyContent="left" alignItems="center">
          <Typography sx={{ width: "5rem", fontWeight: "bold" }}>
            주소
          </Typography>
          <TextField
            label="주소를 입력해주세요"
            name="adress"
            variant="filled"
            size="small"
            fullWidth
          />
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="left" alignItems="center">
          <Typography sx={{ width: "5rem", fontWeight: "bold" }}>
            급여 형태
          </Typography>
          <FormGroup>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControlLabel label="시급" control={<Radio value="시급" />} />
              <FormControlLabel control={<Radio value="일급" />} label="일급" />
              <FormControlLabel control={<Radio value="월급" />} label="월급" />
            </Box>
          </FormGroup>
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="left" alignItems="center">
          <Typography sx={{ width: "5rem", fontWeight: "bold" }}>
            근무 형태
          </Typography>
          <TextField
            label="(ex. 홀서빙)"
            name="workType"
            variant="filled"
            size="small"
            fullWidth
          />
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="left" alignItems="center">
          <Typography sx={{ width: "5rem", fontWeight: "bold" }}>
            기간
          </Typography>
          <FormGroup>
            <RadioGroup defaultValue="하루" name="period">
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControlLabel
                  label="하루(1~2일)"
                  control={<Radio value="하루" />}
                />
                <FormControlLabel
                  control={<Radio value="1주일이하" />}
                  label="1주일 이하"
                />
                <FormControlLabel
                  control={<Radio value="1주일~1개월" />}
                  label="1주일~1개월"
                />
                <FormControlLabel
                  control={<Radio value="1개월~3개월" />}
                  label="1개월~3개월"
                />
                <FormControlLabel
                  control={<Radio value="3개월~6개월" />}
                  label="3개월~6개월"
                />
                <FormControlLabel
                  control={<Radio value="6개월~1년" />}
                  label="6개월~1년"
                />
                <FormControlLabel
                  control={<Radio value="1년이상" />}
                  label="1년이상"
                />
              </Box>
            </RadioGroup>
          </FormGroup>
        </Stack>
        <hr />
        <Button variant="text" onClick={onToggleHashtag}>
          핵심 키워드 추가하기
        </Button>
        <HashTagClick isModal={isHashtag} onToggleModal={onToggleHashtag} />
        <hr />
      </Stack>
    </Paper>
  );
};

export default AdvancedSearch;
