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

## Construction des exercices

### Exercice

Dans le dossier [src/exercise](src/exercise) tu trouveras un dossier par exercice.

Dans chacun de ces exercises tu trouveras les fichiers suivants :

- `Exercise`: Le fichier où tu vas faire l'exercice. Tu trouveras à l'intérieur des indications
  de nos émojis pour réaliser le premier exercice.
- `ExerciseN.md`: Le fichier de consigne. Si tu es sur VSCode je te conseille d'ouvrir le
  fichier `md` et faire `CMD + SHIFT + P` puis chercher "Open Markdown" et sélectionner le
  "Markdown : Open preview to the side" !
  - Dans les fichiers Exercise il y a plusieurs exercices. Le premier exercice est l'exercice
    principal, dans le fichier `Exercise.html` tu trouveras de l'aide pour le réaliser avec les émojis.
  - Ensuite, il y a 1 à 6 autres exercices que tu vas réaliser seul.

### Les Solutions

Dans le dossier [src/solution](src/solution) il y a les fichiers solution pour chaque exercice et sous exercice.

Les solutions pour l'exercice `1` sont dans le fichier `solution` préfixé par `1` puis le numéro
du sous exercice. Par exemple dans l'exercice `1` il y a 3 sous exercices donc :

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

Donc fais attention à ne pas l'enlever !

## Guide des émojis :

- 🦁 C'est **Lienx** le premier lynx dans un corps de lion du monde ! Il te donneras
  des indications claires que tu devras suivre.
- 💡 C'est des tips et astuces qui te permettront d'avancer. C'est un peu les cheat-code
  qui te donnent directement une partie de la réponse
- 💌 Elle t'informe pour chaque exercice ce que tu as appris. Ce n'est pas que dans
  l'exercice que tu apprends mais aussi dans la vidéo correction associée.
- ⚠️ Information importante à lire avant de faire l'exercice
- 📖 Lien vers la documentation officielle
- ℹ️ Petite information qui te permet de comprendre
- 💣 Supprimer une ligne
