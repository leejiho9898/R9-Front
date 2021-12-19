import React, { useEffect, useState } from "react";
import { findJobsAPI } from "~/libs/api/job";
import { Job } from "~/types/job";

export function useJobEffect() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const jobs = await findJobsAPI();
      console.log(jobs);
      setJobs(jobs.items);
    };
    getData();
  }, [setJobs]);

  return { jobs };
}
