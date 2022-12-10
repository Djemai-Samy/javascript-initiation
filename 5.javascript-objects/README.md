# Javascript: Les objets

Apprendre les bases pour développer en Javascript, pour construire des pages web dynamiques et interactives.

Dans ce premier article consacré aux objets en JavaScript, nous verrons les fondamentaux de la syntaxe objet en JavaScript et comment les manipuler.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.javascript-initiation)

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
- [Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)
- [Javascript: Les fontions](https://djemai-samy.com/posts/4.javascript-functions.article)
- [Javascript: Les objets](https://djemai-samy.com/posts/5.javascript-objects.article)

---

## Les objets ?

En JavaScript, la plupart des ***valeurs manipulées sont des objets***, qu'ils proviennent des ***fonctionnalités natives du langage***, comme les ***tableaux***, ou qu'ils soient fournis par les ***API du navigateur***.

***Un objet*** est une ***collection de données*** et/ou ***de fonctionnalités***

(qui, souvent, se composent de plusieurs variables et fonctions, ***appelées propriétés et méthodes*** quand elles sont dans des objets).

Il est aussi possible de créer ***ses propres objets*** qui contiendront des ***propriétés*** avec des données ou des ***fonctions***.

## 1/ Créer des objets" level={0}>

Fréquemment dans JavaScript, pour créer un objet, on commence avec la ***définition*** et ***l'initialisation*** d'une ***variable***.

```js
let personne = {};
```

Désormais, ouvrez la console JavaScript de votre navigateur, saisissez une ```personne``` à l'intérieur, et appuyez sur ```Entrée```. Vous devriez obtenir le résultat suivant :

```js
[object Object]
```

Nous avons créé un ***objet***, mais pour l'instant, il est vide. Ajoutons-lui des ***propriétés et des méthodes*** pour le rendre plus utile.

```js
let personne = {
  nom:"Doe",
  prenom:"John",
  age: 32,
  verfier:true,
  interets:["Programmation", "Graphisme"],
  adresse:{
    numero:5,
    rue:"Charles de Gaulle",
    arrondissement:92700
  },
  bio: function(){
    return `${personne.nom} ${personne.prenom} a ${personne.age}ans. Habite à ${personne.adresse.numero}, ${personne.adresse.rue}, ${personne.adresse.arrondissement}`
  },
  presentation:function(){
    alert(`Bonjour! je suis ${personne.prenom}`);
  }
}
```

Un ***objet*** est fait de ***plusieurs membres***, qui ont chacun un ***nom*** (par exemple nom et age ci-dessus) et une ***valeur*** (par exemple. 'Doe' et 32).

Chaque paire de ***clé***/***valeur*** doit être ***séparée par une virgule***, et le ***nom et la valeur*** de chaque membre sont ***séparés par deux points***. La syntaxe suit ce schéma :

```js
var monObjet = {
  nomDuMembre1: valeurDuMembre1,
  nomDuMembre2: valeurDuMembre2,
  nomDuMembre3: valeurDuMembre3
}
```

La console des outils d'inspection du navigateur permet de visualiser un objet, et de naviguer facilement entre les membres de l'objet :

```js
console.log(personne);
```

![Affiche d'un objet dans la console Javascript du navigateur](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/5.javascript-objects/5.1-javascript-objects-console_object.svg)

La valeur d'un membre dans un objet peut être n'importe quoi — dans notre objet  ```personne```, nous avons du texte, un nombre, deux tableaux et deux fonctions.

Les six premiers éléments (```nom```, ```prénom```, ```age```, ```verifier```, ```interets```, ```adresse```) sont des données appelées ***propriétés de l'objet***.

Et les deux derniers éléments (```bio``` et ```présentation```) sont des fonctions qui utilisent les données de l'objet pour faire quelque chose, et sont appelées des ***méthodes de l'objet***.

Dans cet exemple, l'objet est créé grâce à un ***objet littéral*** : on écrit littéralement le contenu de l'objet pour le créer.

On distingue cette structure des ***objets instanciés*** depuis des ***classes***, que nous verrons plus tard.

C'est une pratique très courante de créer un objet en utilisant un ***objet littéral*** Par exemple, quand on envoie une requête au serveur pour transférer des données vers une base de données.

Envoyer un seul objet est bien plus efficace que d'envoyer ses membres de manière individuelle, et c'est bien plus simple de travailler avec un objet quand on veut identifier des membres par leur nom.

---

## 2/ Accéder aux membres d'un objet

### Notation avec un point

On accède aux ***membres de l'objet*** en utilisant la ***notation avec un point***.

Le nom de l'objet (personne) agit comme un ***espace de noms*** (ou ***namespace*** en anglais), il doit être entré en premier pour accéder aux ***membres encapsulés*** dans l'objet.

Ensuite, on écrit un ***point***, puis le ***membre auquel on veut accéder*** — que ce soit le nom d'une propriété, un élément d'un tableau ou un appel à une méthode de l'objet. Par exemple :

```js
personne.nom; // 'Doe'
personne.interets[1]; // "Graphisme"
personne.adresse.rue;// Charles de Gaulle
personne.bio(); // Doe John a 32ans. Habite à 5, Charles de Gaulle, 92700

```

---

### Notation avec les crochets

Il y a une autre façon d'accéder aux membres de l'objet : la notation avec les crochets. Plutôt que d'utiliser ceci.

```js
personne.nom; // 'Doe'
personne.interets[1]; // "Graphisme"
personne.adresse.rue;// Charles de Gaulle
personne.bio(); // Doe John a 32ans. Habite à 5, Charles de Gaulle, 92700

```

On peut utiliser:

```js
personne['nom']; // 'Doe'
personne['interets'][1]; // "Graphisme"
personne['adresse']['rue'];// Charles de Gaulle
personne['bio'](); // Doe John a 32ans. Habite à 5, Charles de Gaulle, 92700

```

Cela ressemble beaucoup à la façon d'accéder aux éléments d'un tableau et c'est bien la même chose — au lieu d'utiliser un indice numérique pour sélectionner un élément, ***on utilise le nom associé à chaque valeur d'un membre***.

Ce n'est pas pour rien que ***les objets*** sont parfois appelés ***tableaux associatifs*** : ils ***associent des chaînes de caractères*** (les noms des membres) à des ***valeurs***, de la même manière que les tableaux associent des nombres à des valeurs.

---

## 3/ Modifier les membres d'un objet

Jusqu'ici, nous avons vu comment accéder aux membres d'un objet.

Vous pouvez aussi ***modifier la valeur d'un membre de l'objet*** en déclarant simplement le membre que vous souhaitez modifier(en utilisant la notation avec le point ou par crochet), comme ceci :

```js
personne.age = 45; 
personne['nom'] = 'Smith';

```

***Définir les membres ne s'arrête pas à mettre à jour*** la valeur de propriétés ou méthodes existantes ; vous pouvez aussi ***créer de nouveaux membres***. Essayez ceci :

```js
personne.travail = 'Cuisinier'
personne.auRevoir = function() { alert("Bye bye tout le monde !"); }

// Une fois déclaré, nous pouvons utiliser cette nouvelle méthode
personne.auRevoir();
```

---

## 4/ Les constructeurs

Notre manière de créer des objets fonctionne, et très utilisée dans certains cas.

Mais elle a des limites, par exemple, si nous voulions créer objet avec la même structure de données, nous devons recréer l'objet depuis le début :

```js
let personnageThor = {
  nom:"Thor",
  puissance:10,
  presentation:function(){
    alert(`Bonjour! je suis ${personnageThor.nom}`);
  }
}

let personnageIroman = {
  nom:"Iron-Man",
  puissance:7,
  presentation:function(){
    alert(`Bonjour! je suis ${personnageIroman.nom}`);
  }
}

// ...
```

Pour éviter de le refaire à chaque fois, nous pouvons utiliser une fonction qui :

1. Prends en paramètre le nom et la puissance du personnage.
2. Crée un objet avec la clé/valeur
3. Retourne l'objet, pour que nous puissions le stocker ou l'utiliser…

```js
// Constructeur d'objets
function createPersonnage(leNom, puissance){
// Créer un objet vide
  let personnage = {};

  // Assigne le membre nom avec la valeur du paramètre leNom
  personnage.nom = leNom;

  // Assigne le membre puissance avec la valeur du paramètre puissance
  personnage.puissance = puissance;

  // Assigne le membre présentation avec une méthode
  personnage.presentation = function(){
    alert(`Bonjour! je suis ${this.nom}`);
  }

// Retourne l'objet
  return personnage;
}

// Instancier les objets
let personnageThor = createPersonnage('Thor', 10);    
let personnageIronman = createPersonnage('Iron-Man', 7);  

// Utiliser les objets
personnageThor.presentation();
personnageIroman.presentation();
```

Cela fonctionne très bien aussi, mais à chaque constructeur que nous allons créer, nous faisons toujours la première et dernière étape: ***initialiser un objet, et le retourner***.

Les objets et les constructeurs sont tellement importants, qu'il existe une syntaxe plus simple pour les constructeurs. Elle va s'occuper de:

1. Créer un objet et le stocker dans une variable ```this```.
2. Exécute le code de la fonction/constructeur, nous permettant entre autres d'ajouter des membres et méthodes à notre objet.
3. Retourne le nouvel objet.

Par conventions, les ***constructeur commence par une majuscule***, et ont le nom de l'objet à créer:

```js
// Constructeur d'objets
function Personnage(leNom, puissance){

  // Nous utilisons maintenant le mot clé 'this' contenant la référence à l'objet

  // Assigne le membre puissance avec la valeur du paramètre puissance
  this.nom = leNom;

  // Assigne le membre puissance avec la valeur du paramètre puissance
  this.puissance = puissance;

  // Assigne le membre présentation avec une methode
  this.presentation = function(){
    alert(`Bonjour! je suis ${personnage.nom}`);
  }

  // Retourne l'objet
  return this;
}
```

Maintenant pour ***instancier les personnage***, nous pouvons utiliser le mot clé ```new``` suivit de ***l'appel de la fonction constructeur***:

```js
// Instancier les objets
let personnageSpiderman = new Personnage('Spider-Man', 5);    
let personnageDrStrange = new Personnage('Dr.Strange', 9);  

// Utiliser les objets comme avant
personnageSpiderman.presentation();
personnageDrStrange.presentation();
```

On dit: ```personnageSpiderman``` et ```personnageSpiderman``` sont deux ***instances d'objets différents du meme type de classe*** ```Person```.

---

## 7/ Les méthodes statiques

Souvent nous avons des ***fonctions qui ne dépendent pas de l'instance de notre objet***, mais on voudrait l'***encapsuler quand même dans notre classe***.

Les ***méthodes appelées statiques*** ne sont pas disponibles sur les instances d'une classe mais ***sont appelées sur la classe elle-même***.

Les ***méthodes statiques*** sont généralement des ***fonctions utilitaires*** (qui peuvent permettre de créer ou de cloner des objets par exemple).

Par exemple, nous voulons avoir une méthode qui affiche ```Je suis un personnage de Marvel``` liée à notre classe ```Personnage```, nous pourrons une méthodes classique pour faire cela, mais cette fonction sera instancié à chaque instanciation d'objet, ce qui peut être mauvais pour la mémoire de notre application.

Dans ce cas, nous pouvons utiliser une ***méthodes statique à la suite du constructeur***:

```js
// Déclaration de la méthode statique
Personnage.studio = function(){
console.log('Je suis un personnage de Marvel')
}

// Utilisation de la méthode sans instancier d'objets
Personnage.studio(); // Je suis un personnage de Marvel
```

---

Les ***méthodes statiques*** nous permettent d'***encapsuler des méthodes***, et de les ***utiliser sans instancier d'objets***.

### 8/ Des objets partout

Tout au long de ces exemples, vous vous êtes probablement dit que la notation avec un point vous était très familière.

C'est parce que vous l'avez utilisée tout au long du cours! À chaque fois que vous avez utilisé ```console.log()```, nous avons utilisé une ***méthode de l'objet nommé console***, et il y'en a plein d'autres.

Nous pouvons par exemple, afficher l'objet console dans la console:

```js
console.log(console); // Affiche l'objet natif 'console', dans la console du navigateur.
```

![Affiche d'un objet dans la console Javascript du navigateur](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/5.javascript-objects/5.5-javascript-objects-console_console.svg)

Et voilà! Dans l'objet console, il ya beaucoups plus de méthodes, par exemple: ```console.error()``` ou ```console.warn()``` qui permettent de changer la façon d'afficher les données dans la console.

Même ***les types primitifs*** que nous utilisons depuis le début sont des ***instance de type***: ```String```, ```Number```, ```Boolean```, ```Array```...

Nous pouvons par exemple ***instancier un tableau***, en utilisant le ***constructeur de la classe***: ```Array```:

```js
// Instancier un objet de type Array
let unTableau = new Array("a", "b", "c");

// Afficher le tableau dans la console
console.log(unTableau)
```

Si vous ouvrez la console du navigateur, vous trouverez un tableau comme d'habitude.

Mais il y a aussi quelque chose qui est là depuis le début appelé ***prototype***. Vous pouvez cliquer dessus pour l'ouvrir.

![Affiche d'un objet dans la console Javascript du navigateur](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/5.javascript-objects/5.6-javascript-objects-console_array.svg)

A l'intérieur se trouve ***plusieurs propriétés et méthodes***, ajoutées ***nativement***, nous permettant de ***manipuler les tableaux***.

Par exemple la propriétés ```length```, qui nous permet de connaître la ***taille du tableau***:

```js
unTableau.length; // 3
```

Ou la méthode ```toString()``` qui ***retourne une chaîne de caractères contenant tout les élément de la liste***:

```js
unTableau.toString(); // "a,b,c"
```

Nous allons voire les ***propriétés et méthodes*** les plus utilisées :

Chaque type que nous avons utilisé depuis le début, possède des propriétés et des méthodes très utiles.

Nous allons, dans les prochaines sections et prochains chapitres, voir les plus importantes et les plus utilisées.

Mais il y en a que nous omettrons, voici des liens de documentations plus complètes :

- [Cheatsheet des propriétés et des méthodes des Objets JavaScript](https://djemai-samy.com/blog/javascript-cheatsheet.article)
- [Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

---

### 8.1/ Les Numbers

Vous pouvez jeter un œil sur la console pour voire toutes les propriétés et méthodes native des ```Number```:

```js
let number = new Number(10.123456);
console.log(number)
```

---

#### Arrondir une nombre décimal

Il suffit d'utiliser la méthode ```toFixed()```:

```js
number.toFixed(2); // 10.12
```

Cette méthode ***reçoit un nombre en paramètre*** pour déterminer le nombre voulu derrière la virgule.

Elle ***retourne un nombre*** correspondant au nombre arrondi.

---

### 8.2/ Les Strings

Vous pouvez jeter un œil sur la console pour voire toutes les propriétés et méthodes native des ```String```:

```js
let chaine = new String("chaine");
console.log(chaine)
```

---

#### Trouver la longueur d'une chaîne

C'est facile — il suffit d'utiliser la propriété ```length```:

```js
chaine.length; // 6
```

Cette commande doit ***renvoyer le nombre 6***, parce que « chaine » comporte 7 caractères.

C'est utile pour de nombreuses raisons, par exemple :

- vous pourriez avoir besoin de trouver les longueurs d'une série de noms pour faire savoir à un utilisateur qu'il a entré un nom trop long dans un champ de formulaire.
- Ou afficher le nombre de caractères d'un message tapé par l'utilisateur.

---

#### Retrouver un caractère

Comme pour le tableau, il est possible de faire ***renvoyer tout caractère d'une chaîne*** avec la notation crochets :

```js
chaine[0]; // "c"
chaine[3]; // "i"
```

Les ordinateurs décomptent à partir de 0, pas de 1 !

Pour retrouver le ***dernier caractère*** de n'importe quelle chaîne, on peut utiliser la commande qui suit, elle combine cette technique avec la propriété length que nous avons vue plus haut :

```js
chaine[chaine.length-1]; // "e"
```

La longueur de « chaine » est de 6 caractères, mais comme le décompte se fait à partir de 0, la position du dernier caractère est 5.
length - 1 = 6 - 1 = 5

Vous pourrez utiliser cette propriété pour, par exemple, trouver la première lettre d'une série de chaînes et les trier alphabétiquement.

---

#### Trouver une sous-chaîne

Parfois, vous aurez besoin de trouver ***si une chaîne est présente à l'intérieur d'une autre chaîne plus grande*** (on dit en général si une sous-chaîne est présente à l'intérieur d'une chaîne).

La méthode ```indexOf()``` permet de le faire.

Elle prend ***un unique paramètre*** — la sous-chaîne recherchée. Essayez :

```js
chaine.indexOf('ine');
```

La commande donne 3 comme résultat, car la sous-chaîne « ine » commence à la position 3 (0, 1, 2, 3 - donc au quatrième caractère) dans « chaine ».

Un tel code s'utilise pour filtrer des chaînes, par exemple :

- vous pourriez avoir une liste d'articles et ne vouloir afficher que celles dont le titre contient le mot « JavaScript ».

```js
chaine[chaine.length-1]; // "e"
```

La longueur de « chaine » est de 6 caractères, mais comme le décompte se fait à partir de 0, la position du dernier caractère est 5.
length - 1 = 6 - 1 = 5

Vous pourrez utiliser cette propriété pour, par exemple, trouver la première lettre d'une série de chaînes et les trier alphabétiquement.

***Info***: Si la sous-chaîne n'est pas trouvée, cette fonction retour  ```-1```.

Cela reste utile pour savoir si une sous chaine existe pour pas dans la chaine

---

### 8.3/ Les Arrays

Vous pouvez jeter un œil sur la console pour voire toutes les propriétés et méthodes native des ```Arrays```:

```js
let tableau = new Array("a", "b", "c");
console.log(tableau)
```

---

#### Ajouter un élément à la fin

Pour ***ajouter un élément à la fin du tableau***, on utilise la méthode ```push```:

```js
// Ajoute "d" a la fin du tableau
tableau.push("d"); // 4

tableau; // ["a", "b", "c", "d"]

// Ajoute "e" et "f" a la fin du tableau
tableau.push("e", "f"); // 6

tableau; // ["a", "b", "c", "d", "e", "f"]
```

Cette méthode :

1. Prends en paramètres les éléments à ajouter.

2. Elle retourne la nouvelle taille du tableau.

---

#### Supprimer le dernier élément

Pour enlever l'élément du tableau, on utilise la méthode ```pop()```:

```js
// Supprime "f" du tableau
tableau.pop(); // f

tableau; // ["a", "b", "c", "d", "e"]

// Supprime "e" du tableau
tableau.pop(); // e

tableau; // ["a", "b", "c", "d"]
```

Cette méthode :

1. Ne prends pas de paramètre.

2. Elle retourne l'élément supprimé du tableau.

---

## Conclusion

Dans ce chapitre, nous avons vu un aspect très important du langage JavaScript, son côté ***Orienté Objets***.
 
Nous pouvons ***créer nos classes et nos objets*** pour mieux ***organiser notre code***, mais surtout, nous avons ***accès à beaucoup d'objets et classes natives***, nous permettant de manipuler les données.
 
Dans le ***chapitre suivant***, nous allons nous pencher sur ***les objets et les classes les plus intéressantes***. L'objet ```document``` et la classe ```HTMLElement``` qui nous permettent de ***manipuler les éléments de notre page***.

---

## Aller plus loin

[Précédent: Javascript: Les fonctions](https://djemai-samy.com/posts/4.javascript-functions.article)

[Suivant: Javascript: Le DOM](https://djemai-samy.com/posts/6.javascript-dom.article)
