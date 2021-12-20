import {
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import { Job } from "~/types/job";
import { PayMentsMethod } from "~/types/enums";
import StatusBox from "./StatusBox";

const StyledBox = styled(Paper)(({ theme }) => ({
  paddingTop: 20,
  [theme.breakpoints.down("md")]: {
    paddingTop: 10,
  },
}));

const Cards = styled(Grid)({
  marginTop: 10,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

export interface JobCardProps {
  data: Job[];
}

const JobCard = ({ data }: JobCardProps) => {
  const router = useRouter();

  return (
    <Cards container spacing={3}>
      {data &&
        data.map((item) => (
          <Grid item xs={10} md={6} key={item.id}>
            <StyledBox>
              <Box sx={{ mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      <StatusBox status={item.status} />
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                  {item.writer?.bizName}
                  <br />
                  {item.adress}
                  <br />
                  {item.workType}
                  <br />
                  요일선택: {item.workingDay}
                  <br />
                  {item.payment === PayMentsMethod.PERHOUR
                    ? "시급"
                    : item.payment === PayMentsMethod.PERDAY
                    ? "일급"
                    : "월급"}
                  : {item.wage}
                </Typography>

                <Box pt={1}>
                  <Stack direction="row" spacing={1}>
                    {item &&
                      item.hashtags.map((hashtag, index) => (
                        <Chip key={index} label={hashtag.name} />
                      ))}
                  </Stack>
                </Box>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={() => router.push(`/jobs/${item.id}`)}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ my: 2 }}
                >
                  상세보기
                </Button>
              </Box>
            </StyledBox>
          </Grid>
        ))}
    </Cards>
  );
};

export default JobCard;
