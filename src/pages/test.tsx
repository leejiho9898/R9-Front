import * as React from "react";
import Box from "@mui/material/Box";
import HashTagClick from "~/components/common/HashTagClick";
import { Button, Modal } from "@mui/material";
import useToggle from "~/hooks/useToggle";
import { useSelector } from "react-redux";
import { selectJob } from "~/redux/slices/job-slice";

export default function MultipleSelectChip() {
  const [isModal, onToggleModal] = useToggle();
  const job = useSelector(selectJob);
  return (
    <div>
      <Button onClick={onToggleModal}>asd</Button>
      <HashTagClick isModal={isModal} onToggleModal={onToggleModal} />{" "}
      <Button
        onClick={() => {
          console.log(job.hashtags);
        }}
      >
        asd
      </Button>
    </div>
  );
}
