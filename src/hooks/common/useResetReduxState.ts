import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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
