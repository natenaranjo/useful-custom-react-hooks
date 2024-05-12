import useArray from "./useArray";

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(10)}>Add 10</button>
      <button onClick={() => update(1, 20)}>Change second element to 20</button>
      <button onClick={() => remove(3)}>Remove fourth element</button>
      <button onClick={() => filter((n: number) => n < 5)}>
        Keep numbers less than 5
      </button>
      <button onClick={() => set([1, 2, 3])}>Set to 1, 2, 3</button>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
}
