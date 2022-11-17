import clsx from "clsx";
import styles from "../styles/Exercise2.module.css";

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

const SHOPPING_LIST = [
  { name: "Carotte", quantity: 12 },
  { name: "Patate", quantity: 11 },
  { name: "Haricot", quantity: 54 },
];

const ShoppingItem = (item) => (
  <div className={clsx(styles["shopping-item"], styles["bg-paper"])}>
    <div className={styles.section}>
      <p>{item.name}</p>
      <p className={styles.badge}>{item.quantity}</p>
    </div>
    <div className={styles.section}>
      <input type="checkbox" />
    </div>
  </div>
);

const ShoppingList = () => (
  <div className={clsx(styles["flex-col"])}>
    <h2>Liste de course</h2>
    <div className={styles["shopping-list-items"]}>
      {SHOPPING_LIST.map((item) => (
        <ShoppingItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const RECIPIES = [
  { name: "Tarte à la carotte", date: "11.06.22" },
  { name: "Purée de patate", date: "15.08.23" },
  { name: "Sauce au haricot", date: "22.09.24" },
];

const RecipeItem = (recipe) => (
  <li className={clsx(styles["flex"], styles["gap-4"])}>
    <span>{recipe.name}</span>
    <p className={styles.badge}>{recipe.date}</p>
  </li>
);

const Recipes = () => (
  <div className={clsx(styles["flex-col"])}>
    <h2>Liste de recette à faire</h2>
    <ul className={clsx(styles["flex-col"], styles["gap-2"])}>
      {RECIPIES.map((recipe) => (
        <RecipeItem key={recipe.name} {...recipe} />
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer>
    <p>Create by BeginReact.dev</p>
  </footer>
);

const App = () => {
  return (
    <div className={clsx(styles["container"])}>
      <Header />
      <hr />
      <ShoppingList />
      <hr />
      <Recipes />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
