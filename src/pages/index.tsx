import React from "react";
import { NextPage } from "next";
import { Box, styled } from "@mui/system";
import { Typography, TextField, Stack, Button, Link } from "@mui/material";
import { BasicDarkBox } from "~/styles/Boxes";
import Image from "next/image";
import { useSearchForm } from "~/hooks/search/useSearchForm";
import { customjob, newjob } from "~/assets/img";
import Search from "~/components/home/Search";

const HomePage: NextPage = () => {
  const { search, onChangeSearch, onSearch } = useSearchForm();
  return (
    <Box sx={{ width: "100%" }}>
      <BasicDarkBox>
        <Typography
          mt={4}
          gutterBottom
          variant="h4"
          component="div"
          textAlign="left"
          display="flex"
        >
          찾
          <Box sx={{ height: "3rem", backgroundColor: "rgb(252,233,109)" }}>
            으시는
          </Box>
          <>&nbsp;&nbsp;</>
          <br />
          <Box
            sx={{
              height: "3rem",
              color: "rgb(142, 252, 186)",
              backgroundColor: "rgb(82,108,241)",
            }}
          >
            아르바이트
          </Box>
          가 있으세요?
        </Typography>
        <Search />

        <Box
          mt={5}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Link underline="none" href="/">
            <Box sx={{ border: "1px solid #d5d3d3", width: "300px" }}>
              <Image src={newjob} alt="신규 일자리" />
            </Box>
          </Link>
          <Link underline="none" href="/">
            <Box sx={{ border: "1px solid #d5d3d3", width: "300px" }}>
              <Image src={customjob} alt="맞춤 일자리" />
            </Box>
          </Link>
        </Box>
      </BasicDarkBox>
    </Box>
  );
};

export default HomePage;
