import React from "react";
import JobHistoryList from "~/components/job/JobHistoryList";
import { BasicDarkBox } from "~/styles/Boxes";

const JobHistory = () => {
  return (
    <BasicDarkBox>
      <JobHistoryList />
    </BasicDarkBox>
  );
};

export default JobHistory;
