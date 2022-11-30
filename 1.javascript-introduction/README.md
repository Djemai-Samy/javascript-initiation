# Javascript: Introduction

Apprendre les bases du langage Javascript, pour construire des pages web dynamiques et interactives.

Dans ce chapitre nous allons voir comment Javascript fonctionne et apprendre à utiliser les outils nécessaires pour développer avec ce langage.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.javascript-initiation)

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)

## Prérequis

Il est conseillé d'avoir suivi les series:

- [HTML: Initation](https://djemai-samy.com/posts/0.html-inititation)
- [CSS: Initiation](https://djemai-samy.com/posts/0.css-inititation)

---

## Qu'est-ce que le JavaScript ?

JavaScript est un langage de programmation qui permet d'implémenter des mécanismes
complexes sur une page web.

À chaque fois qu'une page web fait plus que simplement
afficher du contenu statique — afficher du contenu mis à jour à des temps déterminés,
des cartes interactives, des animations 2D/3D, des menus vidéo défilants, ou autre,
JavaScript a de bonnes chances d'être impliqué.

C'est la troisième couche des technologies standards du web, les deux premières (HTML et CSS)

---

## Que peut-il vraiment faire ?

Le cœur de JavaScript est constitué de fonctionnalités communes de programmation permettant de :

- Stocker des valeurs utiles dans des variables.
- Faire des opérations sur des morceaux de texte (appelés en programmation « chaînes de caractères » ou « strings » en anglais).
- Créer des fonctions, objet et classes pour mieux organiser le code.

Et des fonctionnalités spécifique au développement web:

- Exécuter du code en réponse à certains événements se produisant sur une page web.
- Faire des requêtes vers d'autres applications pour recevoir des données.
- Manipuler les éléments du document HTML pour ajouter, modifier ou supprimer du contenu.
- Et bien d'autres choses...

---

## Comment le Javascript fonctionne ?

Commençons par un bref récapitulatif de ce qui se passe lorsqu'une page web se charge dans le navigateur:

[Voir Comment fonctionnent vraiment les CSS](https://djemai-samy.com/posts/1.css-introduction.article)

Quand la page se charge, les codes HTML, CSS et JavaScript s'exécutent dans un environnement (l'onglet du navigateur).

C'est un peu comme une usine qui prend des matières premières (le code) et sort un produit (la page web).

![Comment une page web est créer](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/1.javascript-introduction/javascript-introduction-navigateur.svg)

Le JavaScript est exécuté par le moteur JavaScript du navigateur suivant l'ordre dans lequel il a été executer.

Souvent, nous voulons que le code JavaScript s'execute après que le HTML et le CSS ont été assemblés et combinés en une page web..

Cet enchaînement est nécessaire pour être sûr que la structure et le style de la page sont déjà en place quand le JavaScript commence son exécution.

---

## 1/ Ajouter du code JavaScript

Le JavaScript est appliqué à votre page HTML un peu comme le CSS.

Pour ajouter du JavaScript à un document HTML, il n'y a qu'une seule façon : avec l'élément `<script>`.

---

### 1.1/ javascript interne

Dans votre document HTML:

```html
<!DOCTYPE html>
<html lang="fr">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>1/ Javascript: Introduction</title>
 </head>
 <body>
  <h1>1/ Javascript: Introduction</h1>

  <!-- 1. Balise pour ajouter le JavaScript -->
  <script>
   //2. Ceci est un commentaire en JavaScript

   //3. Une instruction JavaScript
   console.log("Salut le monde");
  </script>
 </body>
</html>
```

- `1`: La balise script peut être ajoutée partout dans le document, souvent nous la mettons à la fin de la balise body pour exécuter le code après avoir chargé toute la page. Ou dans le head, en ajoutant l'attribut `defer` pour exécuter le code après le chargement.
- `2`: Comme avec le HTML et le CSS (Tous les langages pratiquement), nous pouvons ajouter des commentaires dans notre code. Les commentaires ne sont pas exécutés et ne sont là que pour aider le développeur à mieux documenter et expliquer leur code.
- `3`: Le code Javascript ira entre les deux balises `<script>`, dans l'exemple nous avons utilisé une instruction qui permet d'afficher quelque chose dans la console Javascript du navigateur.

![console du navigateur pour afficher le Javascript](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/1.javascript-introduction/javascipt-introduction-console.svg)

La console JavaScript du navigateur est accéssible dans l'onglet console quand on inspecte la page web.

---

### 1.2/ JavaScript externe

Comme pour le CSS, souvent nous voulons séparer le code JavaScript dans des fichier dédié.

1. Créez d'abord un nouveau fichier dans le même répertoire que votre fichier HTML. Nommez-le `script.j`s (vérifiez qu'il a bien l'extension de fichier .js, c'est ainsi qu'il est identifié comme fichier JavaScript).
2. Ensuite, copiez-collez tout le script contenu dans l'élément `<script>` vers le fichier .js, et enregistrez le fichier.
3. remplacez l'élément `<script>` par :

   ```html
   <script src="./script.js"></script>
   ```

4. Enregistrez et rechargez la page dans votre navigateur, et vous devriez voir la même chose qu'avant.

---

## 2/ Les erreurs

Il existe deux genre d'erreurs:

### 2.1/ Les erreurs de syntaxe

Ce sont les fautes d'orthographe. Elles empêchent réellement le programme de fonctionner ou l'arrêtent en cours de chemin — elles sont accompagnées de messages d'erreur.

Ces erreurs sont généralement simple à corriger, pour autant que vous connaissiez les bons outils et sachiez ce que signifient les messages.

Par exemple ce code:

```js
Ceci provoque une erreur de syntaxe.
```

Provoquera une erreur, visible dans la console:

![Erreur syntaxe javascript sur la console](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/1.javascript-introduction/javascipt-introduction-error.svg)

#### 2.2/ Les erreurs de logique

La syntaxe est correcte, mais le code n'est pas ce que vous attendiez.

Le programme tourne sans planter mais donne des résultats inattendus.

Ces erreurs sont souvent plus difficiles à corriger que les erreurs de syntaxe, car il n'y a pas, en général, de message d'erreur pour vous diriger vers la source de l'erreur.

Il existe plusieurs outils pour `debugger` le code, nous les verrons plus tard dans la serie.

Le terme `debugger` signifi trouver le bug et non pas enlever le bug.

## Conclusion

Nous avons commencé par la théorie seule, pour vous habituer aux raisons d'utiliser JavaScript, et à ses possibilités.

Dans le prochain chapitre nous allons commencer à découvrir les notions de bases de la programmation, en utilisant JavaScript comme langage.

---

## Aller plus loin

[Précédent: CSS: Initiation](https://djemai-samy.com/posts/0.css-initation)

[Suivant: Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
