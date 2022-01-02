import React from "react";
import { NextPage } from "next";
import JobPostEditor from "~/components/job/JobPostEditor";
import { BasicBox } from "~/styles/Boxes";

const PostPage: NextPage = () => {
  return (
    <>
      <BasicBox>
        <JobPostEditor isEdit={false} />
      </BasicBox>
    </>
  );
};

export default PostPage;
