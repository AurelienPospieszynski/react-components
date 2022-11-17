import { useEffect, useState } from "react";

const vegetables = ["carrot", "tomato", "cucumber", "pepper"];

const Item = ({ item }) => <input value={item} />;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Demo = () => {
  const [items, setItems] = useState(vegetables);

  useEffect(() => {
    const interval = setInterval(() => {
      // shuffle items
      setItems((previous) => [...shuffle(previous)]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Without key</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "4px",
        }}
      >
        {items.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Item item={item} />
        ))}
      </div>
      <h2>With key index</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "4px",
        }}
      >
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
      <h2>With unique key</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "4px",
        }}
      >
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Demo;
