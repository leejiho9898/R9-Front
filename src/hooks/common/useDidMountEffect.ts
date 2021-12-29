import React, { useEffect, useRef, useState } from "react";

/** 첫 랜더링때 실행 안되는 useEffect */
export const useDidMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};
