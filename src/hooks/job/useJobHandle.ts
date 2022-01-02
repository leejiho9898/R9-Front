import { useRouter } from "next/router";
import React from "react";
import { switchJobStatus } from "~/libs/api/job";

export const useJobHandle = () => {
  const onSwichJobStatus = async (
    id: number,
    setRender: React.Dispatch<React.SetStateAction<boolean>>,
    render: boolean
  ) => {
    try {
      await switchJobStatus(id);
      setRender(!render);
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  };
  return { onSwichJobStatus };
};
