import { useRouter } from "next/router";
import React from "react";
import { deleteApplyById } from "~/libs/api/apply";
import { useMyApplysEffect } from "./useMyApplysEffect";

export default function useHandleApply() {
  const router = useRouter();
  /** 지원 취소 */
  const deleteApply = async (id: number) => {
    try {
      await deleteApplyById(id);
      alert("지원을 취소 하였습니다.");
      router.reload();
    } catch (error) {
      alert("지원 취소에 실패 하였습니다.");
      console.log(error);
    }
  };

  return { deleteApply };
}
