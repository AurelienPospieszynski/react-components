# Formulaire

Les applications web sont majoritairement construites à partir de formulaires.

Il y a plusieurs moyens de gérer les formulaires en React.

Nous allons en voir 4.

## Exercise - Basic

Nous allons récupérer les données de notre formulaire en utilisant l'API basique du
browser avec `onSubmit`.

On récupère l'event puis on va chercher les données qui nous intéressent dans l'event.

💡 Rajoute des IDs à tes inputs pour que tu puisses les récupérer plus simplement
ainsi que le `htmlFor` des labels.

💌 Tu apprends à gérer les formulaires dans leur forme la plus simple

## Extra 2 - useRef

Nous allons utiliser `useRef` pour récupérer les données de notre formulaire.
Remplace dans le `onSubmit` la récupération des valeurs en passant par les refs.

Pour comprendre tu peux lire [la doc de React](https://beta.reactjs.org/apis/useref#manipulating-the-dom-with-a-ref).

💡 Tu peux nommer `usernameRef` et `passwordRef` les refs.
💡 Tu peux récupérer les données de `usernameRef` et `passwordRef` dans la fonction `handleSubmit`.

ℹ️ PS : Oui nous n'avons pas encore vu le `useRef`, c'est une découverte à l'aveugle
que je te propose ici.

💌 Tu découvres le `useRef` dans son usage le plus basique avec un formulaire.

## Extra 3 - Validate errors

Si tu as un champ que tu souhaites faire valider, tu peux utiliser un `state` pour le faire.

🦁 Tu rajoutes un state `error` (📖 [useState](https://beta.reactjs.org/apis/usestate#usage)).

🦁 Dans le onSubmit, tu vérifies que la longueur du password est de minimum 8 caractères,
si ce n'est pas le cas tu peux changer `error` en `"Password must be at least 8 characters long"`.

Ensuite, affiche en rouge le message d'erreur sous le champ password.

ℹ️ PS : Oui nous n'avons pas encore vu le `useState`, c'est une découverte à l'aveugle
que je te propose ici. On rentrera dans les détails du sujet aux prochains Extras.

🦁 En plus, lorsque l'user écrit dans le champ password, tu supprimes le message d'erreur.
(📖 [React event](https://reactjs.org/docs/handling-events.html))

💌 Tu comprends comment gérer les erreurs dans un formulaire avec des states.

## Extra 4 - Controlled Input

Voici le dernier moyen de gérer les formulaires en React, c'est un `controlled input`.

C'est quand tu définis une `value` à ton input. Dans ce cas, tu dois gérer entièrement la valeur
de l'input. Donc, quand il change, tu dois écouter le `onChange` event et update
la valeur de l'input en fonction.

[Comment faire un formulaire en React ?](https://codelynx.dev/posts/les-formulaires-react)

```jsx
const Input = () => {
  const [value, setValue] = useState(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={onChange} />;
};
```

Remplace le useRef par un state et change les inputs en `controlled input` !

Attention, il ne faut pas oublier de réinitialiser l'erreur dans le onChange du password.
Et il faut laisser la gestion de l'erreur dans le onSubmit.

💌 Tu comprends la différence entre un `controlled input` et un `uncontrolled input`.
💌 Grâce à l'article de blog, tu comprends que l'un provoque plus de render.

## Extra 5 - react-use-form-hook (BONUS)

Maintenant on va **tout** remplacer par un `useForm` hook.

Utilise [react-hooks-form](https://react-hook-form.com/get-started) pour refaire
le formulaire ci-dessus. (avec la validation du password)

Les formulaires sont tellement présents sur le web qu'il est souvent conseillé d'utiliser
une library pour gérer leur states et leurs erreurs.

Je t'en explique plus dans la vidéo solution.

⚠️ Si c'est compliqué, ne reste pas bloqué et va regarder les vidéos de réponse ou
les fichiers solutions.

Comme dans un projet seul, va lire la documentation de `react-hook-form` et adapte-la pour
notre application.

💌 Tu comprends l'utilité de la library `react-hook-form` ainsi que son usage
