# Module 2 - Les components

Découvertes en profondeurs des composants React.

## Pré-requis

- [JavaScript à connaître pour commencer React](https://codelynx.dev/posts/javascript-known-to-start-react)
- Installer le React DevTools ([chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

## Systems

- [git](https://git-scm.com/downloads) - v2 ou plus
- [node](https://nodejs.org/en/) - v12 ou plus
- [npm](https://nodejs.org/en/) - v6 ou plus

## Setup du projet

```bash
git clone https://github.com/Melvynx/beginreact.dev-components.git
cd beginreact.dev-components
npm install
```

Pour lancer le projet :

```bash
npm run dev
```
Pour le réaliser avec les émojis.
  - Ensuite, il y a 1 à 6 autres exercices que tu vas réaliser seul.

- [`1-1.js`](src/solution/1-1.js)
- [`1-2.js`](src/solution/1-2.js)
- [`1-3.js`](src/solution/1-3.js)

Dans la navigation, quand tu lances le projet, tu peux voir le résultat.

Je te conseille de regarder le résultat des exercices avant de les faire, sans regarder le code,
juste le résultat, afin de comprendre ce que j'attends de toi.

## Stack exercice

Cette application est une application Vite.JS et est configurée pour faire de
l'HTML / CSS / JS basique.

Il y a un seul plugin qui permet "d'injecter" du HTML dans d'autres fichiers HTML.
J'utilise ce plugin dans les fichiers exercise à l'intérieur du `<Head>` afin
d'avoir tout le contenu de [src/chore/partials/head.hbs](src/chore/partials/head.hbs)
dans le fichier, ce qui évite d'avoir du contenu superflu dans tes fichiers d'exercice.

Pour l'utiliser, par exemple dans le fichier [src/exercise/1-no-react/Exercise.html](src/exercise/1-no-react/Exercise.html)
il y a `{{> head}}` à la ligne 4.


