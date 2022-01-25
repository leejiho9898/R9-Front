import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

/** 페이지를 벗어날때 redux를 비우는 함수 */
const useResetReduxState = (actionFunction: {
  payload: undefined;
  type: string;
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actionFunction);
    };
  }, []);
};

export default useResetReduxState;
