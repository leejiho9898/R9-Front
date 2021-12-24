import { useEffect, useState } from "react";
import { getSearchBusinesses } from "~/libs/api/users";
import { User } from "~/types/user";

export default function useBizSearchEffect(bizname: any) {

  const [businesses, setBusinesses] = useState<User[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const businesses = await getSearchBusinesses(bizname);
        setBusinesses(businesses);
      } catch (error) {
        alert("스케쥴 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, []);



  return { businesses, setBusinesses };
}
