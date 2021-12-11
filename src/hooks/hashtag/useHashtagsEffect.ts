import { useEffect, useState } from "react";
import { findCategorysAPI, findHashtagsAPI } from "~/libs/api/hashtag";
import { Hashtags } from "~/types/hashtags";

export default function useHashtagsEffect() {
  const [hashtags, setHashtags] = useState<Hashtags[]>([]);
  const [categorys, setCategorys] = useState<string[]>([]);
  useEffect(() => {
    const getData = async () => {
      const hashtags = await findHashtagsAPI();
      const categorys = await findCategorysAPI();
      setHashtags(hashtags);

      setCategorys(categorys.data);
    };
    getData();
  }, []);

  return { hashtags, categorys };
}
