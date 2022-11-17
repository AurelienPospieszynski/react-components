import clsx from 'clsx';
import styles from '../1-style/Exercise1.module.css';
import { Badge } from './Badge';

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

// Je cree ma constante tableau
// Nom de const en majuscule signifie que cette const ne sera jamais modifie
const SHOPPING_LIST = [
  { title: 'Carotte', quantity: 12, checked: false },
  { title: 'Patate', quantity: 11, checked: false },
  { title: 'Haricot', quantity: 54, checked: true },
];

const RECIPIES = [
  { name: 'Tarte à la carotte', date: '11.06.22' },
  { name: 'Purée de patate', date: '15.08.23' },
  { name: 'Sauce au haricot', date: '22.09.24' },
];
// Je cree ma constante html,
// Le fait d'utiliser les parentheses dans la definition de la const permet d'implementer
// directement le return
const ShoppingItem = (item) => (
  <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
    <div className={styles.section}>
      <p>{item.title}</p>
      <Badge>{item.quantity}</Badge>
    </div>
    <div className={styles.section}>
      <input type="checkbox" />
    </div>
  </div>
);

// je cree ma constante list ou on parcours la liste en lisant les props du tableau
// ... item permet de passer toutes les cles comme props , ca va venir lire toutes les props du tableau
const ShoppingList = () => (
  <div className={clsx(styles['flex-col'])}>
    <h2>Liste de course</h2>
    <div className={styles['shopping-list-items']}>
      {SHOPPING_LIST.map((item) => (
        <ShoppingItem key={item.title} {...item} />
      ))}
    </div>
  </div>
);

const RecipeItem = (recipe) => (
  <li className={clsx(styles['flex'], styles['gap-4'])}>
    <span>{recipe.name}</span>
    <Badge>{recipe.date}</Badge>
  </li>
);

const Recipes = () => (
  <div className={clsx(styles['flex-col'])}>
    <h2>Liste de recette à faire</h2>
    <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
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
    <div className={clsx(styles['container'])}>
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
