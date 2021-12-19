import React, { useEffect, useState } from "react";
import { searchJobAPI } from "~/libs/api/job";

export function useJobSearchEffect(query: any) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const jobs = await searchJobAPI(query);
      console.log(jobs);
      setJobs(jobs);
    };
    getData();
  }, [setJobs]);

  return { jobs };
}
