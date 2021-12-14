import { styled } from "@mui/styles";
import React from "react";
import ApplyerList from "~/components/apply/ApplyerList";
import { BasicBox } from "~/styles/Boxes";

const applyer = () => {
  return (
    <BasicBox>
      <ApplyerList />
    </BasicBox>
  );
};

export default applyer;
