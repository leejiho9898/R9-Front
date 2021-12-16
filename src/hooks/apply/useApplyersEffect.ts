import React, { useEffect, useState } from "react";
import { findMyApplysAPI } from "~/libs/api/apply";
import { Applys } from "~/types/applys";

export function useApplyersEffect() {
  const [applyers, setApplyers] = useState<Applys[]>([]);
  useEffect(() => {
    const getData = async () => {
      const applyers = await findMyApplysAPI();
      setApplyers(applyers);
    };
    getData();
  }, [setApplyers]);

  return { applyers };
}

export default useApplyersEffect;
