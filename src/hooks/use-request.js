import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";
import { useEffect } from "react";
import { useState } from "react";

export function useRequest(thunk, ...params) {
  const [request, setRequest] = useState();

  const requestStatus = useSelector((state) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setRequest(dispatch(thunk(...params)));

    return () => {
      request.current.abort();
      request.current = null;
    };
  }, [...params, thunk]);

  return requestStatus;
}
