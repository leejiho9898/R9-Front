import React, { useEffect, useState } from "react";
import { findJobsMeAPI } from "~/libs/api/job";
import { Job } from "~/types/job";

export function useJobMeEffect() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      const jobs = await findJobsMeAPI();
      setJobs(jobs);
    };
    getData();
  }, [setJobs, render, setRender]);

  return { jobs, render, setRender };
}
