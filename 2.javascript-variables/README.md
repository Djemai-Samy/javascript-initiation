# Javascript: Les variables

Apprendre les bases du langage Javascript, pour construire des pages web dynamiques et interactives.

Dans cet article, nous revenons aux fondements réels en examinant comment travailler avec le bloc de construction le plus basique du JavaScript — les variables.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.javascript-initiation)

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/1.javascript-variables.article)

## Prérequis

Il est conseillé d'avoir suivi les séries:

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)

---

## Qu'est ce qu'une variable ?

Une variable est un conteneur qui peut être vide dites ```undefined``` ou contenir une valeur qui peut être des types primitifs tel que les nombres, chaines de caractères formant un phrase, les listes... Ou plus complexes comme les fonctions objets...

Ce conteneur possède un nom (***référence***), afin de pouvoir accéder à sa valeur quand nous en avons besoin.

![En informatique les variables sont comme des boîtes étiqueté et contanant une valeur](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/2.javascript-variables/javascript-variables-representation.svg)

Voici l'instruction Javascript pout ***déclarer*** une variable:

```js
let uneVariable;
```

Maintenant que la variable est ***déclarée*** dans notre script, nous pouvons la lire et l'afficher dans la ***console***:

```js
console.log(uneVariable);
```

ce qui donne dans la console:

```js
undefined
```

Il faut comprendre qu'une variable n'est accessible qu'après la ligne ou elle a été déclarer.

***Appeler***/***lire*** une variable avant sa déclaration cause une erreur dans la plupart des cas:

![Erreur de syntaxe Javascript](https://djemai-samy.com//blog/2.programmation/1.web/3.javascript/1.javascript-initiation/2.javascript-variables/javascript-variables-errors.svg)

Traduction: Ne peut pas accéder à "uneVariable" avant initialisation à ***script.js:1:13***

De même, lire une variables qui n'a jamais été déclarer provoque une erreur. Cela peut paraitre évident, mais souvent, il arrive d'oublier ou d'ajouter une lettre ou de se tromper dans une majuscule ou minuscule.

Pour Javascript, un variable mal épelé n'existe tout simplement pas, voici un exemple ou nous causons une erreur en mettant le ```v``` du nom de la variable est en minuscule:

```js
console.log(unevariable);
```

Ce qui provoquera cette erreur sur la console:
![Erreur de référence Javascript](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/2.javascript-variables/javascipt-variables-error-notdefined.svg)

Traduction: unevariable n'est pas définie.

La valeur de la variable est ici, ***indefinie***. Voici l'instruction pour lui ***affecter*** la valeur ```10``` de ***type nombre***:

```js
uneVariable = 10;
```

A partir de cette instruction, la variable ```uneVariable``` à pour valeur ***10***:

```js
//Déclarer une variable
let uneVariable;
 
//Afficher la valeur de la variable dans la console
console.log(uneVariable);// undefined
 
//Affecter une valeur à la variable
uneVariable = 10;
 
//Afficher la valeur de la variable dans la console
console.log(uneVariable);// 10
```

Resultat dans la console:

```js
undefined
10
```

Il existe un raccourci pour ***déclarer*** une variable et lui ***affecter*** une valeur en une seule instruction:

```js
let uneVariable = 10;
```

---

## 1/ Type: Boolean

Les booléens sont des valeurs ```true```/```false``` (vrai/faux) — elles ne peuvent prendre que deux valeurs: true ou false.

Elles sont généralement utilisées pour tester une condition, à la suite de laquelle le code est exécuté de manière appropriée. Nous verrons les conditions dans le chapitre suivant.

Voici comment ***déclarer*** un variable de type ```Boolean```

```js
let jeSuisVrai = true;
let jeSuisFaux = false;
```

### 1.1/ Opérateurs de logique

Ce type d’opérateurs va nous permettre d’effectuer plusieurs comparaisons dans nos conditions ou d’inverser la valeur logique du résultat.

#### OU logique

L'opérateur OU logique (```||```) (disjonction logique) renvoie vrai si et seulement si au moins un de ses opérandes est vrai:

```js
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

ET logique

L'opérateur ET logique (```&&```) (conjonction logique) renvoie vrai si et uniquement si ses deux opérandes sont true ou équivalents à true:

```js
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

#### NON logique

L'opérateur logique NON (```!```) prend l'opposé logique de la valeur fournie par son opérande. Vrai devient faux et vice versa.

```js
!true; // false
!false; // true
```

Les booléens auront plus de sens quand nous aborderons les opérateurs de comparaisons et les conditions.

---

## 2/ Le type: String

Les chaînes de caractères ou ***strings***, sont des mots ou des suites de mots.

Quand vous stockez dans une variable une valeur chaîne, vous devez la mettre entre guillemets simples ou doubles, sinon JavaScript va tenter de l'interpréter en tant qu'un autre nom de variable.

```js
let salutation = 'Salut à vous!';
```

Si vous oubliez un des guillemets, vous déclenchez une erreur. Essayez d'entrer une de ces lignes :

```js
let mauvaisString = Voici un test;
```

```js
let mauvaisString = 'Voici un test;
```

```js
let mauvaisString = Voici un test';
```

Vous pouvez utiliser les guillemets simple ou double selon votre préférence. il faut juste noter, qu'on ne peut pas utiliser directement le guillemets simple dans une chaîne de caractères déclarer avec des guillemets simples et inversement pour les double guillemets.

Cette instruction provoque une erreur:

```js
let mauvaisString = 'J'ai provoqué une erreur!';
```

Pour pouvoir utiliser les guillemets simple dans une chaine de caractères déclarer avec des guillemets simples, nous devons ***échapper*** le caractère avec ```\```:

```js
let mauvaisString = 'Je n\'ai pas provoqué d\'erreur!';
```

Résultat dans la console:

```console
Je n'ai pas provoqué d'erreur!
```

---

### 2.1/ Concaténation de chaînes

Concaténer est un terme de programmation qui signifie « attacher ensemble ».

Pour attacher des chaînes en JavaScript, on utilise l'opérateur plus (+).

Voyons un exemple dans la console:

```js
let salutation = 'Salut!';
let question = "Comment allez-vous?";
 
// Déclarer la variable 'phrase' aillant pour valeur la concaténation de
//'salutation', un espace et 'question'
let phrase = salutation + " " + question;
 
// Afficher 'phrase' dans la console
console.log(phrase); // Salut! Comment allez-vous?
```

```js
Salut! Comment allez-vous?
```

Souvent en informatique, il existe plusieurs solution pour répondre à un problème, les instructions suivantes auraient provoquer le meme résultat:

```js
let salutation = 'Salut! ';
let question = "Comment allez-vous?";
 
// Ici, l'espace entre les deux expressions et incorporé directement dans 'salutation'
let phrase = salutation + question;
 
console.log(phrase);// Salut! Comment allez-vous?
```

```js
let salutation = 'Salut! ';
let question = "Comment allez-vous?";
 
// Ici, nous avons directement afficher la valeur de la concaténation,
// sans passer par une variable.
console.log(salutation + question);// Salut! Comment allez-vous?
```

---

### 2.2/ Littéraux de gabarits

Les littéraux de gabarits sont des littéraux de chaînes de caractères permettant d'intégrer des expressions.

Avec eux, on peut utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation.

Les gabarits sont délimités par des caractères accent grave (\` \`) au lieu des apostrophes doubles ou simples.

```js
let multiLigne = `Ligne de texte 1
Ligne de texte 2`;
 
console.log(multiLigne)
```

Résultat dans la console:

```console
Ligne de texte 1
Ligne de texte 2
```

Les gabarits peuvent contenir des espaces réservés (placeholders). Ces espaces sont indiqués par le signe dollar (```$```) et des accolades (```${expression}```).

Les expressions dans les espaces réservés et le texte compris dans ces espaces sont passés à une fonction.

Pour créer la chaîne finale, la fonction par défaut concatène simplement les différentes parties en une seule chaîne.

```js
let nom = "Djemai";
let prenom = "Samy";
let presentation = `Bonjour,
je suis ${nom} ${prenom}.
Et vous?
`;
 
console.log(presentation)
```

Résultat dans la console:

```console
Bonjour,
je suis Djemai Samy.
Et vous?
```

---

## 3/ Le type: Number

Vous pouvez stocker des nombres dans des variables, soit des nombres entiers comme 30 ou des nombres décimaux comme 2.456 (appelés aussi nombres à virgule flottante).

Il n'est pas nécessaire de déclarer le type de la variable dans JavaScript, contrairement à d'autres langages de programmation.

Lorsque vous donnez une valeur numérique à une variable, ne la mettez pas entre guillemets, sinon elle sera considérée comme une chaîne de caractère:

```js
let rayon = 12;
const pi = 3.14;
```

---

### 3.1/ Opérateurs arithmétiques

Les opérateurs arithmétiques sont les opérateurs de base pour effectuer diverses opérations :

---

#### Addition

Pour ajouter deux nombres, nous utilisons l'opérateur ```+```:

```js
let nombreA = 5;
let nombreB = 2;
 
let additionAB = nombreA + nombreB;// 7
```

Pour ajouter un nombre à une variable, nous pouvons lui affecter une nouvelle valeur en utilisant sa référence:

```js
let nombreOeufs = 0;
 
console.log(nombreOeufs);// 0
 
nombreOeufs = nombreOeufs + 2;// 0 + 2 = 2
 
console.log(nombreOeufs);// 2
 
nombreOeufs = nombreOeufs + 3;// 2 + 3 = 5
 
console.log(nombreOeufs);// 5
```

Mais que se passe t-il si on essaye d'utiliser l'opérateur ```+``` entre un nombre et une chaîne de caractère?

```js
console.log("1" + 1)// 11
```

![JCVD: Ou peut-être que 1 + 1 = 11, et ça c'est beau!](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-initiation/2.javascript-variables/2.javascript-JCVD.gif)

Le résultat rendu est ```11```, car Javascript a automatiquement converti le nombre en chaine de caractères.

Nous pouvons convertir une chaine de caractères contenant un nombre en type ***number***:

```js
console.log(Number("1") + 1);// 2
```

---

#### Soustraction

Pour ajouter deux nombres, nous utilisons l'opérateur ```+```:

```js
let additionAB = nombreA - nombreB;// 3
```

---

#### Division

Pour ajouter deux nombres, nous utilisons l'opérateur ```+```:

```js
let additionAB = nombreA / nombreB;// 2.5
```

---

#### Reste (quelquefois nommé modulo)

Renvoie le reste de la division du nombre de gauche par celui de droite, on utilise ```%```

```js
let additionAB = nombreA % nombreB;// 1
```

---

#### Multiplication

Pour multiplier deux nombres, nous utilisons l'opérateur ```*```:

```js
let additionAB = nombreA * nombreB;// 10
```

---

#### Puissance

Élève un nombre à la puissance fournie par le deuxième nombre. Autrement dit, le nombre à gauche est multiplié par lui-même autant de fois que le nombre de droit, nous utilisons l'opérateur ```**```:

```js
let additionAB = nombreA ** nombreB;// 25
```

---

### 3.2/ Priorité des opérateurs

Nous pouvons bien sûr enchaîner les opérations sur une seule ligne.

```js
console.log(50 + 10 - 2)// 58
```

Certaines opérations de cet ensemble ne vous renvoient peut-être pas le résultat attendu.

```js
console.log(50 + 10 / 8 + 2)// 53.25
```

En tant qu'humain, vous pouvez lire « 50 plus 10 égale 60 »*, puis « 8 plus 2 égale 10 » et finalement « 60 divisé par 10 égale 6 ».

Mais le navigateur calcule « 10 sur 8 égale 1.25 », puis « 50 plus 1.25 plus 2 égale 53.25 ».

Cela est dû à la précédence des opérateurs. Certains sont appliqués avant d'autres dans une opération (on parle d'une expression en programmation).

En JavaScript, la précédence des opérateurs est identique à celle enseignée à l'école : multiplication et division sont toujours effectuées en premier, suivies de l'addition et de la soustraction (le calcul est toujours exécuté de la gauche vers la droite).

Si vous voulez contourner les règles de précédence des opérateurs, vous pouvez mettre entre parenthèses les parties que vous souhaitez voir calculées en premier. Pour obtenir un résultat égal à 6, nous devons donc écrire :

```js
console.log((num2 + num1) / (8 + 2);)// 6
```

---

#### 3.3/ Opérateurs d'incrémentation et de décrémentation

Quelquefois vous aurez besoin d'ajouter ou retrancher 1 à une valeur de variable de manière répétitive.

```js
nbOeufs = nbOeufs + 1
```

Ou

```js
nbOeufs = nbOeufs - 1
```

On effectue commodément cette opération à l'aide des opérateurs d'incrémentation (```++```) ou de décrémentation (```--```):

```js
nbOeufs++;
```

Ou

```js
nbOeufs--;
```

---

### 3.4/ Opérateurs de comparaison

Parfois nous avons besoin d'exécuter des tests vrai/faux, puis d'agir en fonction du résultat — pour ce faire, nous utilisons des opérateurs de comparaison.

---

#### Égalité stricte

Teste si les valeurs et le type de droite et de gauche sont identiques ```===```:

```js
5 === 2 + 3;// true
 
5 === 6;// false
 
5 === "5";// false
```

---

#### Non-égalité stricte

Teste si les valeurs de droite et de gauche ne sont pas identiques avec ```!==```:

```js
5 !== 2 + 3;// false
 
5 !== 6;// true
 
5 !== "5";// true
```

---

#### Inférieur à

Teste si la valeur de gauche est plus petite que celle de droite avec ```<```:

```js
5 < 2 + 2;// true
 
5 < 2 + 3;// false
```

---

#### Inférieur ou égale à

Teste si la valeur de gauche est plus petite ou égale à celle de droiteavec ```<=```:

```js
5 <= 2 + 2;// true
 
5 <= 2 + 3;// true
```

---

#### Supérieure à

Teste si la valeur de gauche est plus grande que celle de droite avec ```<```:

```js
5 > 5 + 2;// true
 
5 > 2 + 3;// false
```

---

#### Supérieure ou égale à

Teste si la valeur de gauche est plus grande ou égale à celle de droiteavec ```<=```:

```js
5 >= 5 + 2;// true
 
5 >= 2 + 3;// true
```

---

## 4/ Le type: Array

Les tableaux sont généralement décrits comme des "objets de type liste", un tableau est un objet contenant plusieurs valeurs.

Les objets tableau peuvent être stockés dans des variables et traités de la même manière que tout autre type de valeur, la différence étant que nous pouvons accéder à chaque valeur du tableau individuellement, et faire des choses super utiles et efficaces avec la liste des valeurs, comme boucler et faire la même chose pour chaque valeur.

Par exemple, peut-être que nous avons une série d'articles et leurs prix stockés dans un tableau, et nous voulons les parcourir tous et les imprimer sur une facture, tout en totalisant tous les prix ensemble et en imprimant le prix total en bas.

Sans tableaux, nous devons stocker chaque valeur dans une variable séparée, puis appeler le code qui effectue l'affichage ou l'impression, puis ajouter séparément chaque élément.

Ce serait plus long à écrire, moins efficace et cela comporte plus de risques d'erreurs. Si nous avions 10 articles à ajouter à la facture, ce serait déjà assez mauvais, mais qu'en serait-il de 100 articles ou de 1000 ? Nous reviendrons sur cet exemple plus loin dans l'article.

---

### 4.1/ Déclarer un tableau

On définit les valeurs d'un tableau par une liste d'éléments entre crochets droits, séparés par des virgules:

```js
let produits = ['pain', 'lait', 'fromage', 'houmous', 'nouilles']
```

Dans ce cas, chaque élément du tableau est une chaîne, mais gardez en tête que vous pouvez stocker n'importe quel élément dans un tableau — chaîne, nombre, objet, autre variable et même d'autres tableaux.

Vous pouvez également mélanger et assortir les types d'articles — il n'est pas obligatoire que ce soient tous des nombres, des chaînes, etc.

---

### 4.2/ Lire un élément du tableau

Vous pouvez avoir accès isolément aux éléments dans un tableau en utilisant la notation crochet:

```js
produits[0];// pain
produits[1];// lait
//...
produits[4];// pain
```

Le premier élément du tableau est à la position 0, le dernier élément est donc à la position (***tailleDuTableau - 1***)

Essayer d'accéder à élément avec une position qui n'existe pas retourne ```undefined```

```js
produits[5];// undefined
```

---

### 4.4/ Modifier un élément du tableau

Vous pouvez aussi modifier un élément dans un tableau en donnant simplement une nouvelle valeur à l'élément. Essayez ceci :

```js
produits[0] = "";// 'crème de sésame';
produits;// ['crème de sésame', 'lait', 'fromage', 'houmous', 'nouilles']
```

---

### 4.3/  tableau multidimensionnel

Notez qu'un tableau à l'intérieur d'un tableau est appelé un tableau multidimensionnel:

```js
let multiTab = [["Djemai Samy", 28], ["John Doe", 60]]
```

Vous accédez à un des éléments de ce tableau interne en chaînant deux paires de crochets.

Par exemple, pour avoir accès à l'élément ```"John Doe"```:

```js
multiTab[1][0];// John Doe
```

Ceci n'est qu'une introduction au type ```Array```, nous approfondirons le sujet dans les prochains chapitres.

---

## Conclusion

Nous avons commencé par la théorie seule, pour vous habituer aux raisons d'utiliser JavaScript, et à ses possibilités.

Dans le prochain chapitre nous allons commencer à découvrir les notions de base de la programmation, en utilisant JavaScript comme langage.

---

## Aller plus loin

[Précédent: CSS: Initiation](https://djemai-samy.com/posts/0.css-initation)

[Suivant: Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
