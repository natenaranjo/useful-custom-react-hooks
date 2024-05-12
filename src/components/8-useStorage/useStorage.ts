import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key: unknown, defaultValue: unknown) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key: unknown, defaultValue: unknown) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key: unknown, defaultValue: unknown, storageObject: any) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);

    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
