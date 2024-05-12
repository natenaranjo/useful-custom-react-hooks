import { SetStateAction, useCallback, useEffect, useState } from "react";

export default function useAsync(
  callback: { (): Promise<string>; (): Promise<SetStateAction<undefined>> },
  dependencies = []
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemorized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);

  return { loading, error, value };
}
