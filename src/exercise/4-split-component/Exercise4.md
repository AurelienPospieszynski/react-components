# Split les composants !

Voici un chapitre essentiel, que la majorité des formations oublient.

**React** est un framework qui met en avant les composants. Les composants
sont super optimisés et n'affectent pas négativement les performances.

Regarde comme c'est simple d'en créer un :

```jsx
const Component = () => {
  return <p>Hello</p>;
};
```

**Il faut abuser de la création de composant**.

C'est mieux de TROP séparer que d'avoir un composant de 500 lignes.

## Exercise - L'app de l'enfer

J'ai créé une page de l'enfer. BEAUCOUP trop de ligne. Pas assez séparé.

Et le pire : des données sont dupliquées !
C'est vraiment pas bien, ❌ on ne copie jamais du code dans React.

Si c'est de la logique → dans les hooks.

Si c'est du JSX → dans des composants.

Je compte sur toi pour me rendre cette app "convivial".

Pour cette partie 1 tu peux séparer l'app en 4 composants :

- Header
- ShoppingList
- Recipes
- Footer

Pourquoi faire ça ?

1. Avoir un code clean, maintenable et lisible
2. Pour être futur proof : si on ajoute des states par exemple
3. Avoir des composants séparés et réutilisables

💌 Tu apprends qu'il faut toujours couper les sections par components

## Extra 2 - Tableau

Comme dans l'exercice 2, tu peux créer deux tableaux :

- Pour la liste de course
- Pour les recettes à faire

Crée des composants :

- RecipeItem
- ShoppingItem

Et refactor pour ne pas avoir de duplication de code en utilisant `.map`.

- 💌 Tu apprends qu'il faut privilégier du rendu avec un tableau que copier-coller

## Extra 3 - Badge

As-tu remarqué ? On utilise dans 2 composant le même badge (`<p className={styles.badge}>`) !

Tu ferais mieux de créer un composant `Badge` pour éviter la répétition.

- 💌 Tu apprends que même les petits composants d'une ligne peuvent être
  séparés du reste.
