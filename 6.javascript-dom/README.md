# Javascript: Le DOM

Apprendre les bases pour développer en Javascript, pour construire des pages web dynamiques et interactives.

Dans ce module, nous allons explorer ce que sont les API, et comment utiliser l'API du navigateur pour créer des page dynamiques et interactives.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.javascript-initiation)

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
- [Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)
- [Javascript: Les fontions](https://djemai-samy.com/posts/4.javascript-functions.article)
- [Javascript: Les objets](https://djemai-samy.com/posts/5.javascript-objects.article)
- [Javascript: Le DOM](https://djemai-samy.com/posts/6.javascript-dom.article)

---

## Qu'est-ce qu'une API ?

Les ***API*** (Application Programming Interfaces soit « interface de programmation d'application ») sont des ***constructions disponibles dans les langages*** de programmation pour permettre aux développeurs de ***créer plus facilement des fonctionnalités complexes***.

Elles s'occupent des parties de ***code plus complexes***, fournissant au développeur ***une syntaxe plus facile à utiliser*** à la place.

### API JavaScript côté client

Le JavaScript ***côté client*** en particulier à de ***nombreuses API à sa disposition*** — elles ne font pas partie du langage JavaScript lui-même, elles sont ***construites par-dessus JavaScript***, offrant des super-pouvoirs supplémentaires à utiliser dans votre code.

Elles appartiennent généralement à une des deux catégories :

- Les ***API du navigateur*** sont intégrées au navigateur web et permettent de ***rendre disponibles les données du navigateur*** et de ***son environnement*** afin de réaliser des choses complexes avec.

- Les ***API tierces*** ne sont pas intégrées au navigateur par défaut, et vous devez généralement ***récupérer le code de l'API et des informations depuis un site Web***.

---

### Que peuvent faire les API ?

Il y a beaucoup d'API disponibles dans les navigateurs modernes. Elles permettent de faire un large éventail de choses :

Les ***API pour manipuler des documents*** chargés dans le navigateur :

- L'exemple le plus évident est ***l'API DOM*** (Document Object Model).

- Elle permet de ***créer***, ***supprimer*** et ***modifier du code HTML***, appliquer de ***nouveaux styles à votre page dynamiquement***, etc.

---

Les ***API pour récupérer des données du serveur***:

- Sont couramment utilisées afin de ***mettre à jour des sections*** d'une page Web.

- Si vous avez juste besoin de ***mettre à jour une liste de produits*** ou ***afficher de nouveaux articles disponibles***, le faire instantanément ***sans avoir à recharger toute la page*** du serveur peut rendre le site ou l'application ***beaucoup plus réactif et « accrocheur »***.

---

Les ***API pour dessiner et manipuler des graphiques*** sont maintenant couramment prises en charge dans les navigateurs — les plus populaires sont ***Canvas*** et ***WebGL***.

- Elles permettent la ***mise à jour***, ***par programmation***, ***des pixels contenus dans un élément HTML*** ```<canvas>``` pour ***créer des scènes 2D et 3D***.

- Par exemple, vous pouvez ***dessiner des formes*** comme des rectangles ou des cercles, ***importer une image*** sur le canevas, et lui ***appliquer un filtre sépia ou niveau de gris*** à l'aide de l'API Canvas ou encore ***créer une scène 3D complexe avec éclairage et textures*** en utilisant ***WebGL***.

---

Les ***API audio et vidéo*** comme ```HTMLMediaElement```, ***Web Audio API*** ou ***WebRTC***:

- Permettent de faire des choses vraiment intéressantes avec du multimédia, telles que la ***création de contrôles UI personnalisées pour jouer de l'audio et vidéo***, l'***affichage de textes comme des légendes et des sous-titres***, la ***récupération de vidéos depuis votre webcam*** pour l'afficher sur l'ordinateur d'une autre personne dans une visio‑conférence ou encore l'***ajout d'effets sur des pistes audio*** (tels que le gain, la distorsion, la balance, etc.).

---

Les ***API de périphérique***:

- Permettent essentiellement de ***manier et de récupérer des données à partir de périphériques modernes***, de manière utile pour les applications Web.

- Par exemple, l'***API de géolocalisation*** accédant aux ***données d'emplacement de l'appareil*** afin que vous puissiez repérer votre position sur une carte.

---

Les ***API de stockage*** côté client :

- Deviennent de plus en plus répandues dans les navigateurs Web — la possibilité de ***stocker des données côté client est très utile*** si vous souhaitez créer une application qui ***enregistre son état entre les chargements*** de page, et peut-être même ***fonctionner lorsque le périphérique est hors ligne***.

- Il existe un certain nombre d'options disponibles, par exemple le ***simple stockage nom/valeur avec l'API Web Storage***, et le ***stockage plus complexe de données tabulaires avec l'API IndexedDB***.

---

## Manipuler des documents

Quand on écrit des ***pages web et des applications***, une des choses les plus courantes que l'on veut faire est de ***manipuler la structure du document*** d'une manière ou d'une autre.

On le fait généralement en utilisant le ***Document Object Model*** (DOM), un ***ensemble d'API qui permettent de contrôler le HTML et le style*** — et qui utilisent massivement l'***objet Document***.

Pour illustrer nos exemples, nous allons créer une page simple et la lier avec un fichier script.

La structure du dossier :

```bash

📦6.javascript-dom
┣ 📜index.html
┗ 📜index.js

```

Dans notre page HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
    <script src="./index.js" defer></script>
  </head>
  <body>
    <h1 class="title">Titre de la page</h1>
    <p>Lorem Ipsum</p>

    <section id="uneSection">
      <h2 class="title">Sous titre</h2>
      <p>
        Lorem Ipsum
      </p>
    </section>
  </body>
</html>
```

---

### Le modèle objet du document

Le ***document chargé*** dans chaque onglet de votre navigateur, et donc son contenu, ***est accessible via un modèle objet du document*** — Document Object Model en anglais, ou ***DOM***.

Il s'agit d'une ***structure arborescente*** créée par le navigateur et qui permet aux langages de programmation d'***accéder facilement à la structure HTML***.

Dans notre exemple, le DOM de notre page ressemble à ça:

```bash
┣ DOCTYPE: html
┗ HTML:
  ┣ #text:
  ┣ HEAD:
  ┃ ┣ #text:
  ┃ ┣ META charset="utf-8"
  ┃ ┃ ┗ #text:
  ┃ ┗ TITLE:
  ┃    ┗ #text: Simple DOM example
  ┗ BODY:
    ┣ #text:
    ┣ H1 class="title":
    ┃ ┗ #text: Titre de la page
    ┣ P:
    ┃ ┗ #text: Lorem Ipsum
    ┗ SECTION id="uneSection":
      ┣ #text:
      ┣ H2 class="title":
      ┃ ┗ #text: Sous titre
      ┗ P:
        ┗ #text: Lorem Ipsum
```

Vous pouvez voir ici que chaque ***élément*** et ***morceau de texte*** dans le document ***possède sa propre entrée*** dans l'arbre.

Vous rencontrerez également plusieurs termes pour décrire les ***différents type de nœuds*** ou leur position dans l'arbre les uns par rapport aux autres :

- ***Nœud élément*** (element node): ***N'importe quel élément***, tel qu'il existe dans le DOM.

- ***Racine*** (root): Le ***nœud de plus haut niveau dans l'arbre***. Dans le cas d'un document HTML, il s'agit toujours du nœud HTML (d'autres langages de balisage tels que SVG et XML auront des racines différentes).

- ***Enfant*** (child): Un ***nœud directement à l'intérieur d'un autre nœud***. Ainsi, dans l'exemple ci-dessus, H2 est un enfant de SECTION.

- ***Descendant***: Un ***nœud n'importe où à l'intérieur d'un autre nœud***. Par exemple, H2 est un enfant de SECTION mais également l'un de ses descendants. En revanche H2 n'est pas un enfant de BODY, puisqu'il est deux niveaux plus bas dans l'arbre, mais il est un de ses descendants.

Pour commencer l'apprentissage de la manipulation du DOM, commençons par un exemple concret.

---

### Sélectionner un élément

***Pour manipuler un élément dans le DOM***, vous allez d'abord ***sélectionner cet élément*** et stocker une référence de cet élément dans une variable.

Pour ***sélectionner un élément***, nous avons plusieurs méthodes de l'objet ```document```, que nous pouvons utiliser.
</Block>

---

#### getElementById

Afin de ***sélectionner un élément par son identifiant***, nous pouvons utiliser la méthode: ```getElementById```.

La fonction prend en ***paramètre une chaîne de caractère*** indiquant l'***id*** de l'élément ciblé:

```js
let sectionNode = document.getElementById('uneSection');
```

La fonction ***retourne un objet de type*** ```HTMLElement``` représentant le neud sélectionné.

---

#### getElementsByTagName

Afin de ***sélectionner des éléments par leurs type de balise***, nous pouvons utiliser la méthode: ```getElementsByTagName```.

La fonction prend en ***paramètre une chaîne de caratère*** indiquant la ***balise*** des éléments ciblés:

```js
let listPElements = document.getElementsByTagName('p');
```

La fonction ***retourne une liste*** de type ```HTMLCollection``` contenant des objets de type ```HTMLElement```.

---

#### getElementsByClassName

Afin de ***sélectionner des éléments par leurs nom de classe***, nous pouvons utiliser la méthode: ```getElementsByClassName```.

La fonction prend en ***paramètre une chaîne de caratère*** indiquant le ***nom de la classe*** des éléments ciblés:

```js
let listClassTitleElements = document.getElementsByClassName('title');
```

La fonction ***retourne une liste*** de type ```HTMLCollection``` contenant des objets de type ```HTMLElement```.

---

#### querySelectorAll

Il y a ***plusieurs façons de sélectionner*** et d'enregistrer une référence à un élément dans une variable.

```Document.querySelector()``` est l'***approche moderne recommandée*** — elle est pratique puisqu'elle permet de ***sélectionner des éléments en utilisant les sélecteurs CSS***.

```js
let queryClassTitleElements = document.querySelectorAll('.title');
```

Il existe aussi la fonction ```querySelector```, qui fonctionne de la même manière, à la différence qu'elle retourne le premier élément trouvé et non pas une liste.

Vous pouvez retrouver ici un article qui explique et résume <Link href="/posts/2.css-selectors.article" passHref><a>tous les différents sélecteurs CSS</a></Link>

---

### Modification des éléments

Une fois sélectionné, nous pouvons ***accéder et modifier énormément de propriétés*** de l'élément.

N'hésitez pas à afficher l'élément sélectionné dans la console pour voir toutes les méthodes et propriétés de la classe ```HTMLElement```.

```js
let h1Node = document.querySelector('h1');
console.log(h1Node);
```

---

#### Modifier le texte

Pour ***changer le texte*** contenu dans un élément, nous pouvons modifier la propriété ```textContent```:

```js
let h1Node = document.querySelector('h1');
h1Node.textContent = "Un titre modifié en JavaScript";
```

Si vous rafraîchissez la page, le texte affiché dans le titre aura changé.

---

#### Modifier le style

Il est possible de ***manipuler des styles CSS*** grâce à du JavaScript de plusieurs manières.

La première d'entre elles consiste à ***ajouter des styles en ligne*** (inline styles), directement sur les éléments que vous voulez mettre en forme de façon dynamique.

Pour ce faire, on utilise la propriété  ```HTMLElement.style```, qui contient les ***informations de style en ligne*** de chaque élément du document.

Vous pouvez ***définir des propriétés*** de cet objet de façon à pouvoir ***mettre à jour directement le style*** des éléments.

```js
h1Node.style.color = 'blue';
h1Node.style.border= '1px solid black'
h1Node.style.padding = '10px';
h1Node.style.textAlign = 'center';
```

Rafraichissez la page, et vous verrez que les styles ont été appliqués sur le h1.

Si vous regardez ce paragraphe dans l'inspecteur du navigateur, vous verrez que ces lignes sont en effet ajoutées comme du style en ligne au document :

```html
<h1 style="color: blue; border: '1px solid black; padding: 10px; text-align: center;">
  Un titre modifié en JavaScript
</h1>
```

Note : Vous remarquerez que les propriétés JavaScript qui représentent les propriétés CSS sont écrites en camelcase tandis que les versions CSS sont reliées par des tirets (par exemple ```backgroundColor``` au lieu de ```background-color```).

Prenez garde à ne pas les mélanger, sans quoi ça ne fonctionnera pas.

L'autre manière est d'***ajouter une classe*** à un élément dynamiquement.

Tous les éléments ***possèdent la propriété classList***, représentant la liste des classes de l'élément.

Nous pouvons utiliser la fonction ```add```, et ***fournir le nom de la classe*** à ajouter en paramètre :

```js
h1Node.classList.add("maClasse");
```

---

#### Créer et ajouter des éléments

Il est aussi possible de ***créer de nouveau nœuds*** en utilisant le JavaScript.

Pour revenir à notre exemple, ***commençons par récupérer une référence*** à notre élément ```<section>```:

```js
let sectionNode = document.querySelector('#uneSection');
```

Nous allons maintenant ***créer un nouveau paragraphe*** grâce à ```document.createElement()```, et lui ***donner du contenu texte*** de la même manière que précédemment :

```js
const para = document.createElement('p');
para.textContent = 'Un nouveau paragraphe';
```

Nous pouvons à présent ***ajouter ce paragraphe au bas de la section*** en utilisant ```Node.appendChild()``` :

```js
sectionNode.appendChild(para);
```

---

## Interaction avec le document

Pour ***ajouter de l'interaction avec notre page***, nous utilisons ***les événements***.

***Les événements*** sont des ***actions*** ou des ***occurrences*** qui se produisent dans le système que vous programmez et dont le système vous informe afin que vous puissiez y répondre d'une manière ou d'une autre si vous le souhaitez.

Dans le cas du Web, les ***événements sont déclenchés*** à l'intérieur de la fenêtre du navigateur et tendent à être ***rattachés à un élément spécifique*** qui s'y trouve.

Il peut s'agir d'un ***élément unique***, d'un ***ensemble d'éléments***, du document HTML chargé dans l'onglet en cours ou toute la fenêtre du navigateur.

Il y a beaucoup de types différents d'événements qui peuvent se produire, par exemple :

- L'utilisateur, ***cliques avec la souris*** sur un certain élément ou en place le curseur sur un certain élément.
- L'utilisateur ***appuie sur une touche du clavier***.
- L'utilisateur ***redimensionne ou ferme la fenêtre*** du navigateur.
- Une page web finissant de se ***charger***.
- Un ***formulaire en cours de soumission***
- Une ***vidéo en cours de lecture***, en ***pause*** ou en ***fin de lecture***.
- Une ***erreur qui survient***.

Chaque ***événement disponible*** a un ***gestionnaire d'événement***, qui est un bloc de code (généralement une fonction JavaScript) qui sera ***exécuté lorsque l'événement se déclenche***.

Lorsqu'un tel bloc de code est défini pour être exécuté en réponse à un ***déclenchement d'événement***, nous disons que nous ***enregistrons un gestionnaire d'événements***.

Notez que les gestionnaires d'événements sont parfois appelés ***écouteurs d'événements***.

Ils sont à peu près interchangeables pour ce qui nous concerne, même si à la rigueur, ils fonctionnent ensemble.

L'***écouteur écoute l'événement*** qui se produit et le ***gestionnaire est le code qui est exécuté en réponse*** à ce qui se passe.

Note : il est important de noter que les événements web ne font pas partie du langage noyau JavaScript.

Ils sont définis comme faisant partie des APIs JavaScript intégrées du navigateur

### Exemple: clique sur un bouton

Commençons par ajouter un bouton à notre HTML :

```html
<button id="monBouton">Valider</button>
```

Dans cet exemple simple, nous voulons ***afficher une boite d'alerte*** quand l'utilisateur ***clique sur le bouton***.

Ajoutons à notre script la ***fonction gestionnaire d'événement***:

```js
function afficheAlert(){
  alert("Un clique s'est produit");
}
```

Ensuite, pour ***ajouter un écouteur d'événement*** et son gestionnaire, il faut ***sélectionner l'élément*** et utiliser la fonction ```addEventListener()```.

Cette fonction prend deux paramètres :

- ```'click'```: le nom de l'événement pour lequel nous voulons enregistrer ce gestionnaire.
- ```afficheAlert```: La référence à la fonction callback du gestionnaire que nous voulons exécuter en réponse.

```js
// Sélectionner le bouton avec l'id 'monBouton'
let monBouton = document.querySelector('#monBouton');

// Ajouter un écouteur d'événement au bouton
monBouton.addEventListener('click', afficheAlert)
```

Maintenant, quand vous ***cliquez sur le bouton***, une ***boîte de dialogue s'affiche en haut de la page***.

Notez qu'il est parfaitement approprié de placer tout le code dans la fonction addEventListener(), dans une fonction anonyme, comme ceci :

```js
// Ajouter un écouteur d'évènement au bouton
monBouton.addEventListener('click', function (){
alert("Un clique s'est produit");
})
```

---

### L'objet événement

Parfois, ***dans une fonction de gestionnaire d'événement***, vous pouvez voir un ***paramètre spécifié*** avec un nom tel que ```event```, ```evt```, ou simplement ```e```.
C'est ce qu'on appelle l'***objet événement***, qui est ***automatiquement transmis*** aux gestionnaires d'événements pour fournir des ***fonctionnalités*** et des ***informations supplémentaires***.
</Block>  

---

#### target

Par exemple, réécrivons légèrement notre exemple :

```js
function afficheAlert(e){
  // Afficher l'objet event dans la console
  console.log(e);

  // Accéder l'élément cible de l'événement
  e.target.backgroundColor = "royalblue";

  alert("Un clique s'est produit");
}
```

Ici, vous pouvez voir que nous incluons un ***objet événement***, ```e```, dans la fonction, et dans la fonction ***définissant un style de couleur d'arrière-plan*** sur ```e.target``` - qui est le bouton lui-même.

La propriété ```target``` de l'objet événement est toujours une ***référence à l'élément*** sur lequel l'événement vient de se produire.

Donc, dans cet exemple, nous ***définissons une couleur d'arrière-plan*** sur le ***bouton***, pas sur la page.

---

#### Éviter le comportement par défaut

Parfois, vous rencontrerez une situation où vous voudrez ***arrêter un événement qui adopte son comportement par défaut***.

L'exemple le plus courant est celui d'***un formulaire Web***, par exemple un formulaire d'inscription personnalisé.

Lorsque vous ***remplissez les détails*** et ***appuyez sur le bouton*** "Soumettre", le comportement naturel consiste à ***soumettre les données à une page spécifiée*** sur le serveur pour traitement, et le ***navigateur redirige vers une page*** de "message de réussite" quelconque (ou la même page, si une autre n'est pas spécifiée.).
</Block>

Prenons un exemple simple pour illustrer cela.

Nous allons donner la possibilité à notre utilisateur d'***entrer son nom*** dans un champs, puis quand il ***clique sur un bouton***, ***afficher son nom dans un paragraphe***.

Nous allons commencer par ajouter un ***formulaire contenant un input et un bouton***, et un ***paragraphe*** a notre page HTML:

```html
<form>
  <input id="nom" type="text">
  <button id="submit" type="submit">Valider</button>
</form>
<p id="num-user"></p>
```

Puis dans notre script, nous allons ***ajouter un écouteur d'événement et son gestionnaire***:

```js
document.querySelector('#submit').addEventListener(('click'), function(e){
  // Sélectionner l'input pour récupérer l'entrée
  let nomInput = document.querySelector('#nom');

  // Sélectionner le paragraphe
  let para = document.querySelector('#nom-user');

  // Modifier le texte du paragraphe avec le nom entré dans l'input
  para.textContent = nomInput.value;
})
```

Ce code fonctionne, et si vous faites attention, pendant une fraction de seconde, le texte ***s'affiche bien dans le paragraphe***.

Mais par défaut, ***le formulaire envoi les données***, et donc la page ***se rafraichit*** et nous ***perdons les modifications apportées*** par notre script.

Nous pouvons **stopper la soumission du formulaire** en utilisant la méthode ```Event.preventDefault()```:

```js
document.querySelector('#submit').addEventListener(('click'), function(e){
  // Stoppe la soumission du formulaire
  e.preventDefault()

  // Le reste de notre code
  let nomInput = document.querySelector('#nom');
  let para = document.querySelector('#nom-user');
  para.textContent = nomInput.value;
})
```

---

## Exemple: ToDo liste

Nous allons conclure ce chapitre avec un exemple plus complexe.

Nous allons créer une ToDo liste, permettant à l'utilisateur d'ajouter des tâches à faire grâce à un champ utilisateur et un bouton.

Ajoutons un formulaire permettant à l'utilisateur d'entrer une tâche et de l'ajouter avec un bouton. Et la section dans laquelle nous allons ajouter les taches :

```html
<form>
  <h2>Liste de tâches:</h2>
  <input type="text" id="todo">
  <input type="submit" id="submit-todo">
</form>
<section id="todos"></section>
```

Puis dans notre script :

```js
document.querySelector("#submit-todo").addEventListener("click", function (e) {
  // Stoppe la soumission du formulaire
  e.preventDefault();

  // Sélectionner le champ avec id=todo
  let todoInputNode = document.querySelector('#todo');

  // Stocker la valeur de l'entrée
  let todoValue = todoInputNode.value;

  //Tester si l'entrée n'est pas vide
  if(todoValue !== ""){
  //Créer un nœud paragraphe
  let todoNode = document.createElement('p')

  //Mettre la valeur de l'entrée dans le texte du paragraphe
  todoNode.textContent = todoValue;

  // Sélectionner la section contenant toutes les tâches
  let todosNodes = document.querySelector('#todos')

  // Ajouter le paragraphe a la fin de la section
  todosNodes.appendChild(todoNode)
  }
});
```

---

## Conclusion

Nous avons fini notre étude de la manipulation de document et du DOM.

À ce stade, vous devriez comprendre quels sont les composants importants d'un navigateur web en matière de contrôle de documents et certains aspects de l'expérience utilisateur sur le Web.

Plus important encore, vous devriez comprendre ce qu'est le Document Object Model, et comment l'utiliser pour créer des fonctionnalités utiles.

Il y a bien d'autres fonctionnalités que vous pouvez utiliser pour manipuler vos documents. Jetez un coup d'œil à notre document de référence pour en découvrir davantage :

[Fiche JavaScript](https://djemai-samy.com/posts/javascript-cheatsheet.article)

---

## Aller plus loin

[Précédent: Javascript: Les objets](https://djemai-samy.com/posts/5.javascript-objects.article)

[Suivant: React](https://djemai-samy.com/posts/0.react-initation)
