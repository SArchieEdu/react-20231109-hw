import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";
import { useCallback } from "react";
import { useState } from "react";

export function useMakeRequest(thunk) {
  const [request, setRequest] = useState();

  const requestStatus = useSelector((state) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(
    (...params) => {
      setRequest(dispatch(thunk(...params)));
    },
    [dispatch, thunk]
  );

  return [requestStatus, makeRequest];
}
