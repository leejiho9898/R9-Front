import { useRouter } from "next/router";
import React from "react";
import { switchJobStatus } from "~/libs/api/job";

export const useJobHandle = () => {
  const router = useRouter();

  const onSwichJobStatus = async (id: number) => {
    console.log("asd");
    try {
      console.log("asd");
      await switchJobStatus(id);
      router.reload();
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  };
  return { onSwichJobStatus };
};
