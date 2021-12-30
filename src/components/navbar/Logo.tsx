import React from "react";
import { useRouter } from "next/router";
import { R9whtie } from "~/assets/img";
import Image from "next/image";
import { Box } from "@mui/system";

export const Logo = () => {
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push("/")}
      sx={{ cursor: "pointer", width: "4rem"}}
    >
      <Image src={R9whtie} alt="신규 일자리" />
    </Box>

    // <Animation onClick={() => router.push("/")} sx={{ cursor: "pointer" }} />
  );
};
