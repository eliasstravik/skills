import { useEffect, useState } from "react";

const initialItems = [
  { id: 1, title: "Confirm launch owner", age: 9, next: "Ask Mina for a decision" },
  { id: 2, title: "Publish migration guide", age: 6, next: "Review the final code sample" },
];
const storageKey = "driftboard-items";

export function App() {
  const [items, setItems] = useState(() => {
    const storedItems = window.localStorage.getItem(storageKey);
    return storedItems ? JSON.parse(storedItems) : initialItems;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  function restart(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <main>
      <h1>Work waiting for a restart</h1>
      {items.map((item) => (
        <article key={item.id}>
          <strong>{item.title}</strong>
          <p>Waiting {item.age} days · {item.next}</p>
          <button onClick={() => restart(item.id)}>Mark restarted</button>
        </article>
      ))}
    </main>
  );
}
