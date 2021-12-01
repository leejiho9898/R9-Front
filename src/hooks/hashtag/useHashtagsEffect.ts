import { useEffect, useState } from "react";
import { findHashtagsAPI } from "~/libs/api/hashtag";
import { Hashtags } from "~/types/hashtags";

export default function useHashtagsEffect() {
  const [hashtags, setHashtags] = useState<Hashtags[]>([]);
  const largeCategorys = ["업직종별", "지역별", "근무기간별"];
  useEffect(() => {
    const getData = async () => {
      const job = await findHashtagsAPI();
      setHashtags(job);
    };
    getData();
  }, [setHashtags]);

  const classificationCategory = (category: string) => {
    const tags = hashtags.filter(
      (hashtag) => hashtag.largeCategory === category
    );
    return tags;
  };

  return { hashtags, largeCategorys, classificationCategory };
}
