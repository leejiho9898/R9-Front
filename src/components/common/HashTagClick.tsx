import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import useHashtagsEffect from "~/hooks/hashtag/useHashtagsEffect";
import { Button, Chip, Modal, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectJob, setJob } from "~/redux/slices/job-slice";
import { Hashtags } from "~/types/hashtags";

interface ModalProps {
  onToggleModal: () => void;
  isModal: boolean;
}

const HashTagClick = ({ isModal, onToggleModal }: ModalProps) => {
  const { hashtags, categorys } = useHashtagsEffect();
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>(""); // prop가 전달이 안되서 initial value 설정이 안돼 side effect 사용
  const [selectedHashtag, setSelectedHashtag] = useState<Hashtags[]>([]);

  useEffect(() => {
    setValue(categorys[0]);
  }, [categorys]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    const body = {
      key: "hashtags",
      value: selectedHashtag,
    };
    dispatch(setJob(body));
    onToggleModal();
  };

  return (
    <Modal
      open={isModal}
      onClose={onToggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Paper sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {categorys.map((category, index) => (
                  <Tab key={index} label={category} value={category} />
                ))}
              </TabList>
            </Box>
            {categorys.map((category, i) => (
              <TabPanel key={i} value={category}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {hashtags.map((hashtag, ii) =>
                    hashtag.category == category ? (
                      <Box sx={{ m: 0.5 }} key={ii}>
                        <Chip
                          label={hashtag.name}
                          clickable
                          onClick={async () => {
                            console.log(hashtag.id);
                            if (selectedHashtag.includes(hashtag)) {
                              setSelectedHashtag(
                                selectedHashtag.filter(
                                  (hash) => hash.name !== hashtag.name
                                )
                              );
                            } else {
                              setSelectedHashtag([
                                ...selectedHashtag.concat(hashtag),
                              ]);
                            }
                          }}
                        />
                      </Box>
                    ) : null
                  )}
                </Box>
              </TabPanel>
            ))}
            <Typography align="left" variant="subtitle1">
              선택된 핵심 키워드
            </Typography>
            {selectedHashtag.map((hashtag) => (
              <Chip
                key={hashtag.id}
                label={hashtag.name}
                sx={{ margin: 1 }}
                onDelete={() => {
                  setSelectedHashtag(
                    selectedHashtag.filter((hash) => hash.name !== hashtag.name)
                  );
                }}
              />
            ))}
          </TabContext>
          <br />
        </Paper>
        <Box sx={{ textAlign: "center", marginTop: 1 }}>
          <Button variant="contained" onClick={onSubmit}>
            확인
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default HashTagClick;
