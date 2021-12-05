import { styled } from "@mui/styles";
import React from "react";
import ApplyerList from "~/components/apply/ApplyerList";
import { ContainerBox } from "~/styles/Boxes";

const applyer = () => {
  return (
    <ContainerBox>
      <ApplyerList />
    </ContainerBox>
  );
};

export default applyer;
