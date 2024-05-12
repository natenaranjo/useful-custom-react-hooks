import { useState } from "react";
import useStatWithHistory from "./useStateWithHistory";

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStatWithHistory(1);
  const [name, setName] = useState("Kyle");

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button
        onClick={() => setCount((currentCount: number) => currentCount * 2)}
      >
        Double
      </button>
      <button
        onClick={() => setCount((currentCount: number) => currentCount + 1)}
      >
        Increment
      </button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go To Index 2</button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
}
