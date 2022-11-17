// TODO : Delete this line
// Faire un screen avant après avec CleanShopX

import { useState } from "react";
import styles from "../styles/Exercise2.module.css";

const ShoppingListData = [
  { id: 1, name: "Milk", quantity: 2, checked: false },
  { id: 2, name: "Eggs", quantity: 12, checked: true },
  { id: 3, name: "Bread", quantity: 1, checked: false },
  { id: 4, name: "Apple", quantity: 99, checked: false },
];

const ItemsToAdd = ["banana", "apple", "orange", "pear", "grape", "strawberry"];

const ShoppingItem = ({ name, quantity, checked, onRemove }) => {
  const [stateName] = useState(name);

  return (
    <div className={styles["shopping-item"]}>
      <div className={styles.section}>
        <p>{stateName}</p>
        <p className={styles.badge}>{quantity}</p>
      </div>
      <div className={styles.section}>
        <button onClick={onRemove}>Remove</button>
        <input type="checkbox" defaultChecked={checked} />
      </div>
    </div>
  );
};

const ShoppingList = ({ children }) => {
  const [items, setItems] = useState(ShoppingListData);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={styles["shopping-list"]}>
      <button
        onClick={() => {
          setItems([
            ...items,
            {
              id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
              name: ItemsToAdd[Math.floor(Math.random() * ItemsToAdd.length)],
              quantity: Math.round(Math.random() * 100),
              checked: false,
            },
          ]);
        }}
      >
        Add an items
      </button>

      <div className={styles["shopping-list-items"]}>
        {children(items, removeItem)}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>No key</h2>
      <ShoppingList>
        {(items, removeItem) => (
          <>
            {items.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <ShoppingItem
                name={item.name}
                quantity={item.quantity}
                checked={item.checked}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </>
        )}
      </ShoppingList>

      <h2 style={{ marginTop: 64 }}>Key</h2>
      <ShoppingList>
        {(items, removeItem) => (
          <>
            {items.map((item) => (
              <ShoppingItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                checked={item.checked}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </>
        )}
      </ShoppingList>
    </div>
  );
};

export default App;
