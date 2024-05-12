import { useState } from "react";

export default function useArray(defaultValue: number[]) {
  const [array, setArray] = useState(defaultValue);

  function push(element: number) {
    setArray((a) => [...a, element]);
  }

  function filter(
    callback: (value: number, index: number, array: number[]) => value is number
  ) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number | undefined, newElement: number) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function remove(index: number | undefined) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
