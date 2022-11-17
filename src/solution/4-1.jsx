// ℹ️ Dans une vrai application, chaque composant est dans un fichier différent !
import clsx from "clsx";
import styles from "../styles/Exercise2.module.css";

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

const ShoppingList = () => (
  <div className={clsx(styles["flex-col"])}>
    <h2>Liste de course</h2>
    <div className={styles["shopping-list-items"]}>
      <div className={clsx(styles["shopping-item"], styles["bg-paper"])}>
        <div className={styles.section}>
          <p>Carotte !</p>
          <p className={styles.badge}>12</p>
        </div>
        <div className={styles.section}>
          <input type="checkbox" />
        </div>
      </div>
      <div className={clsx(styles["shopping-item"], styles["bg-paper"])}>
        <div className={styles.section}>
          <p>Patate !</p>
          <p className={styles.badge}>11</p>
        </div>
        <div className={styles.section}>
          <input type="checkbox" />
        </div>
      </div>
      <div className={clsx(styles["shopping-item"], styles["bg-paper"])}>
        <div className={styles.section}>
          <p>Haricot !</p>
          <p className={styles.badge}>54</p>
        </div>
        <div className={styles.section}>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  </div>
);

const Recipes = () => (
  <div className={clsx(styles["flex-col"])}>
    <h2>Liste de recettes à faire</h2>
    <ul className={clsx(styles["flex-col"], styles["gap-2"])}>
      <li className={clsx(styles["flex"], styles["gap-4"])}>
        <span>Tarte à la carotte</span>
        <p className={styles.badge}>11.06.22</p>
      </li>

      <li className={clsx(styles["flex"], styles["gap-4"])}>
        <span>Purée de patate</span>
        <p className={styles.badge}>15.08.23</p>
      </li>

      <li className={clsx(styles["flex"], styles["gap-4"])}>
        <span>Sauce au haricot</span>
        <p className={styles.badge}>22.09.24</p>
      </li>
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
