import { useRouter } from "next/router";
import React from "react";
import { createApplyAPI } from "~/libs/api/apply";
import useInput from "../common/useInput";

export const useApplyForm = (job: any) => {
  const router = useRouter();
  const jobid: number = +job;
  console.log(typeof jobid);
  const [state, onChangeState] = useInput("");

  const onSubmit = async () => {
    const body: { job: number; moreDetail: string } = {
      job: jobid,
      moreDetail: state,
    };
    await createApplyAPI(body);
    router.push("/apply/history");
  };
  return { state, onChangeState, onSubmit };
};
