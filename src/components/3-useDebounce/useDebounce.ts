import { useEffect } from "react";
import useTimeOut from "../useTimeout/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeOut(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
