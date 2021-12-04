import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { NextPage } from "next";
import useHashtagsEffect from "~/hooks/hashtag/useHashtagsEffect";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Chip } from "@mui/material";

const test: NextPage = () => {
  const { hashtags, largeCategorys, classificationCategory } =
    useHashtagsEffect();

  const [value, setValue] = useState(largeCategorys[0]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const category1 = classificationCategory(largeCategorys[0]);
  console.log(category1);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {largeCategorys.map((largeCategory, index) => (
              <Tab key={index} label={largeCategory} value={largeCategory} />
            ))}
          </TabList>
        </Box>
        <TabPanel value={largeCategorys[0]}>
          {category1.map((ctgy, index) => (
            <div>
              <Chip key={index} label={ctgy.smallCategory} />
              {ctgy.name}
            </div>
          ))}
        </TabPanel>
        <TabPanel value={largeCategorys[1]}>Item Two</TabPanel>
        <TabPanel value={largeCategorys[2]}>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};
export default test;
