import clsx from "clsx";
import styles from "../styles/Exercise2.module.css";

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

const shoppingItems = [
  { name: "Carotte", quantity: 12 },
  { name: "Patate", quantity: 11 },
  { name: "Haricot", quantity: 54 },
];

const Badge = ({ children }) => <p className={styles.badge}>{children}</p>;

const ShoppingItem = (item) => (
  <div className={clsx(styles["shopping-item"], styles["bg-paper"])}>
    <div className={styles.section}>
      <p>{item.name}</p>
      <Badge>{item.quantity}</Badge>
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
      {shoppingItems.map((item) => (
        <ShoppingItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const recipes = [
  { name: "Tarte à la carotte", date: "11.06.22" },
  { name: "Purée de patate", date: "15.08.23" },
  { name: "Sauce au haricot", date: "22.09.24" },
];

const RecipeItem = (recipe) => (
  <li className={clsx(styles["flex"], styles["gap-4"])}>
    <span>{recipe.name}</span>
    <Badge>{recipe.date}</Badge>
  </li>
);

const Recipes = () => (
  <div className="flex flex-col gap-4">
    <h2>Liste de recette à faire</h2>
    <ul className={clsx(styles["flex-col"], styles["gap-2"])}>
      {recipes.map((recipe) => (
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
