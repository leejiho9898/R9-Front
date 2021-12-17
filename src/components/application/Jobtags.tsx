import React from "react";
import { Typography, Box, Stack, Chip } from "@mui/material";
import { styled } from "@mui/system";
import { Hashtags } from "~/types/hashtags";

export interface JobTagsProps {
  title: string;
  type: any;
}

const StyledChip = styled(Chip)({
  width: 90,
  margin: 1.5,
});

export const JobTags = ({ title, type }: JobTagsProps) => {
  return (
    <Box m={2}>
      <Typography align="center" gutterBottom variant="subtitle2">
        {title}
      </Typography>
      <Box sx={{ flexDirection: "row-reverse" }}>
        {/* 클릭 이벤트 넣기 */}
        {type &&
          type.map((item: Hashtags, index: number) => (
            <StyledChip key={index} label={item.name} />
          ))}
      </Box>
    </Box>
  );
};
