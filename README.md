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
git clone https://github.com/AurelienPospieszynski/react-components.git
cd react-components
npm install
```

Pour lancer le projet :

```bash
npm run dev
```

Il y a un seul plugin qui permet "d'injecter" du HTML dans d'autres fichiers HTML.
J'utilise ce plugin dans les fichiers exercise à l'intérieur du `<Head>` afin
d'avoir tout le contenu de [src/chore/partials/head.hbs](src/chore/partials/head.hbs)
dans le fichier, ce qui évite d'avoir du contenu superflu dans tes fichiers d'exercice.

Pour l'utiliser, par exemple dans le fichier [src/exercise/1-no-react/Exercise.html](src/exercise/1-no-react/Exercise.html)
il y a `{{> head}}` à la ligne 4.


