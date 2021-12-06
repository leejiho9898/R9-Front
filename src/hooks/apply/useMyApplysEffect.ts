import React, { useEffect, useState } from "react";
import { findMyApplysAPI } from "~/libs/api/apply";
import { Applys } from "~/types/applys";

export function useMyApplysEffect() {
  const [applys, setApplys] = useState<Applys[]>([]);
  useEffect(() => {
    const getData = async () => {
      const applys = await findMyApplysAPI();
      setApplys(applys);
    };
    getData();
  }, [setApplys]);

  return { applys };
}
