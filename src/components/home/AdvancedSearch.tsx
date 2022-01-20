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
import { Box } from "@mui/system";
import { useAdvencedSearchForm } from "~/hooks/search/useAdvencedSearchForm";
import useToggle from "~/hooks/useToggle";
import { PayMentsMethod } from "~/types/enums";
import HashTagSearch from "../common/HashTagSearch";
import { searchJobListAPI } from "~/libs/api/job";

interface AdvancedSearchProps {
  tit: any;
}
useAdvencedSearchForm;
const AdvancedSearch = ({ tit }: AdvancedSearchProps) => {
  const { search, onChangeSearch, onSearch } = useAdvencedSearchForm();
  const { title, payment, workType, period, adress, hashtagIds } = search;
  const [isHashtag, onToggleHashtag] = useToggle();
  return (
    <Paper sx={{ mt: 2, padding: 1 }}>
      <Button onClick={onSearch}>test</Button>
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
            onChange={onChangeSearch}
            value={adress}
          />
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="left" alignItems="center">
          <Typography sx={{ width: "5rem", fontWeight: "bold" }}>
            급여 형태
          </Typography>
          <FormGroup>
            <RadioGroup defaultValue={PayMentsMethod.PERHOUR} name="payment">
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControlLabel
                  label="시급"
                  control={
                    <Radio
                      value={PayMentsMethod.PERHOUR}
                      onChange={onChangeSearch}
                    />
                  }
                />
                <FormControlLabel
                  control={
                    <Radio
                      value={PayMentsMethod.PERDAY}
                      onChange={onChangeSearch}
                    />
                  }
                  label="일급"
                />
                <FormControlLabel
                  control={
                    <Radio
                      value={PayMentsMethod.PERMONTH}
                      onChange={onChangeSearch}
                    />
                  }
                  label="월급"
                />
              </Box>
            </RadioGroup>
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
            onChange={onChangeSearch}
            value={workType}
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
                  control={<Radio value="하루" onChange={onChangeSearch} />}
                />
                <FormControlLabel
                  control={
                    <Radio value="1주일이하" onChange={onChangeSearch} />
                  }
                  label="1주일 이하"
                />
                <FormControlLabel
                  control={
                    <Radio value="1주일~1개월" onChange={onChangeSearch} />
                  }
                  label="1주일~1개월"
                />
                <FormControlLabel
                  control={
                    <Radio value="1개월~3개월" onChange={onChangeSearch} />
                  }
                  label="1개월~3개월"
                />
                <FormControlLabel
                  control={
                    <Radio value="3개월~6개월" onChange={onChangeSearch} />
                  }
                  label="3개월~6개월"
                />
                <FormControlLabel
                  control={
                    <Radio value="6개월~1년" onChange={onChangeSearch} />
                  }
                  label="6개월~1년"
                />
                <FormControlLabel
                  control={<Radio value="1년이상" onChange={onChangeSearch} />}
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
        <HashTagSearch isModal={isHashtag} onToggleModal={onToggleHashtag} />
        <hr />
      </Stack>
    </Paper>
  );
};

export default AdvancedSearch;
