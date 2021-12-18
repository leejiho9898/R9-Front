import { SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJobAPI, deleteJobAPI } from "src/libs/api/job";
import { selectJob, setJob, setJobNumber } from "src/redux/slices/job-slice";
import { Gender, PayMentsMethod } from "src/types/enums";

export default function useJobForm() {
  const dispatch = useDispatch();
  const job = useSelector(selectJob);
  const [weekDay, setWeekgDay] = useState<string[]>([]);

  const map: Record<string, number> = {
    월: 1,
    화: 2,
    수: 3,
    목: 4,
    금: 5,
    토: 6,
    일: 7,
  };

  const onChangeString = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<PayMentsMethod | Gender>
  ) => {
    const { value, name } = e.target;
    const body = {
      key: name,
      value,
    };
    dispatch(setJob(body));
    console.log(job);
  };

  const onChangeNumber = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<PayMentsMethod | Gender>
  ) => {
    const { value, name } = e.target;
    const body = {
      key: name,
      value: Number(value),
    };
    dispatch(setJobNumber(body));
    console.log(job);
  };

  const onChangeHashtags = (e: any) => {
    const { value, name } = e.target;
    const body = {
      key: name,
      value,
    };
    dispatch(setJob(body));
    console.log(job);
  };

  const onChangeAdress = (
    adress1: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    const body = {
      key: "adress",
      value: `${adress1} ${value}`,
    };
    dispatch(setJob(body));
  };

  const onChangeWorkingDay = async (e: React.ChangeEvent<HTMLInputElement>) => {
    /** 일주일 순서에 상관없이 입력받고 순서대로 출력함 */
    const { checked, id } = e.target;
    if (checked) {
      setWeekgDay([...weekDay.concat(id)]);
    } else if (!checked && weekDay.includes(id)) {
      setWeekgDay(weekDay.filter((week) => week !== id));
    }

    weekDay.sort((a, b) => {
      return map[a] - map[b];
    });

    const body = {
      key: "workingDay",
      value: weekDay,
    };
    dispatch(setJob(body));
  };

  /** 공고 생성 */
  const onCreateJob = async () => {
    try {
      await createJobAPI(job);
    } catch (error) {
      alert("공고 작성에 실패했습니다");
      console.log(error);
    }
  };

  const onDeleteJob = async (id: number) => {
    try {
      await deleteJobAPI(id);
    } catch (error) {
      alert("공고 삭제에 실패했습니다");
    }
  };

  return {
    onChangeString,
    onChangeNumber,
    onChangeAdress,
    onChangeWorkingDay,
    onChangeHashtags,
    onCreateJob,
    onDeleteJob,
  };
}
