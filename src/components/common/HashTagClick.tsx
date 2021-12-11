import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import useHashtagsEffect from "~/hooks/hashtag/useHashtagsEffect";
import { Chip, Paper } from "@mui/material";

interface HashTagClickProps {
  callBack: () => void;
}
const HashTagClick = ({ callBack }: HashTagClickProps) => {
  const { hashtags, categorys } = useHashtagsEffect();

  const [value, setValue] = useState<string>(""); // prop가 전달이 안되서 initial value 설정이 안돼 side effect 사용

  useEffect(() => {
    setValue(categorys[0]);
  }, [categorys]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {categorys.map((category, index) => (
              <Tab key={index} label={category} value={category} />
            ))}
          </TabList>
        </Box>
        {categorys.map((category, i) => (
          <TabPanel key={i} value={category}>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              {hashtags.map((hashtag, ii) =>
                hashtag.category == category ? (
                  <Box sx={{ m: 0.5 }}>
                    <Chip key={ii} label={hashtag.name} onClick={callBack} />
                  </Box>
                ) : null
              )}
            </Box>
          </TabPanel>
        ))}
      </TabContext>
    </Paper>
  );
};

export default HashTagClick;
