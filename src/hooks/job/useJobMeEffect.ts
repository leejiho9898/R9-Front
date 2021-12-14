import React, { useEffect, useState } from "react";
import { findJobsMeAPI } from "~/libs/api/job";
import { Job } from "~/types/job";

export function useJobMeEffect() {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    const getData = async () => {
      const jobs = await findJobsMeAPI();
      setJobs(jobs);
    };
    getData();
  }, [setJobs]);

  return { jobs };
}
