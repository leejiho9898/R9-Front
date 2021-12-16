import React, { useEffect, useState } from "react";
import { findApplyByIdAPI } from "~/libs/api/apply";
import { Applys } from "~/types/applys";

export function useApplyerEffect(id: any) {
  const [apply, setApply] = useState<Applys>();
  useEffect(() => {
    const getData = async () => {
      const apply = await findApplyByIdAPI(id);
      setApply(apply);
    };
    getData();
  }, [setApply]);

  return { apply };
}

export default useApplyerEffect;
