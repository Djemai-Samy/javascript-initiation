# Javascript: Blocs de structurels

Apprendre les bases du langage Javascript, pour construire des pages web dynamiques et interactives.

Dans ce module nous allons voir l'ensemble des fonctionnalités clefs du JavaScript en nous concentrant plus particulièrement sur les structures les plus répandues: les conditions et les boucles..

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.javascript-initiation)

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
- [Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)

## Prérequis

Il est conseillé d'avoir suivi les séries:

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
- [Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)

---

## 1/ Les conditions

Dans tout langage de programmation, le code doit prendre des décisions et agir en fonction des différents paramètres.

Par exemple afficher le lien 'Page de profil' ou le lien 'Se connecter' suivant si l'utilisateur s'est déjà connecté à notre site ou pas.

---

## 1.1/ Instruction if ... else

Intéressons nous de plus près à la forme la plus répandue d'instruction conditionnelle que vous utiliserez en JavaScript:

```js
if (condition) {
//code à exécuter si la condition est true
} else {
//sinon exécuter cet autre code à la place
}
```

1. Le mot‑clé if suivie de parenthèses.
2. Une ***condition*** à évaluer, placée entre les parenthèses (typiquement « cette valeur est‑elle plus grande que cet autre valeur ? » ou « cette valeur existe-t-elle ? »).  
Cette ***condition*** se servira des ***opérateurs de comparaison*** et ***opérateurs de logique***  que nous avons étudié dans le précédent module, et renverra true ou false.
3. Une paire d'accolades, à l'intérieur de laquelle se trouve du code — cela peut être n'importe quel code voulu ; il sera exécuté seulement si la condition renvoie true.
4. Le mot‑clé else.
5. Une autre paire d'accolades, à l'intérieur de laquelle se trouve du code différent — tout code souhaité et il sera exécuté seulement si la condition ne renvoie pas ```true```.

Ainsi le code suivant permet d'afficher dans la ***console*** 'Vous êtes majeur!' si le ```age``` est supérieure à 18, sinon ile affichera 'Vous êtes mineur!':

```js
let age = 28;
if (age > 18) {
console.log("Vous êtes majeur!")
} else {
console.log("Vous êtes mineur!")
}
```

Affiche:

```js
"Vous êtes majeur!"
```

1. Le mot‑clé if suivie de parenthèses.
2. Une ***condition*** à évaluer, placée entre les parenthèses (typiquement « cette valeur est‑elle plus grande que cet autre valeur ? » ou « cette valeur existe-t-elle ? »).  
Cette ***condition*** se servira des ***opérateurs de comparaison*** et ***opérateurs de logique***  que nous avons étudié dans le précédent module, et renverra ```true``` ou ```false```.
3. Une paire d'accolades, à l'intérieur de laquelle se trouve du code — cela peut être n'importe quel code voulu ; il sera exécuté seulement si la condition renvoie ```true```.
4. Le mot‑clé else.
5. Une autre paire d'accolades, à l'intérieur de laquelle se trouve du code différent — tout code souhaité et il sera exécuté seulement si la condition ne renvoie pas ```true```.

Notez qu'il n'est pas nécessaire d'inclure une instruction else et le deuxième bloc entre accolades — le code suivant est aussi parfaitement correct :

```js
let age = 12;
if (age > 18) {
console.log("Vous êtes majeur!");
}
console.log("La suite du code")
```

Affiche:

```js
"La suite du code"
```

---

### 1.2/ Opérateur ternaire

Voici une autre syntax pour ajouter une ***condition*** à notre code.

***L'opérateur ternaire*** ou ***conditionnel*** est un petit morceau de code qui teste une ***condition*** et renvoie une ***valeur*** ou ***expression*** si elle est ```true``` et une autre si elle est ```false```.

Elle est utile dans certains cas, et occupe moins de place qu'un bloc ```if...else``` si votre choix est limité à deux possibilités à choisir via une ***condition*** ```true```/```false```. Voici le pseudo‑code correspondant :

```js
( condition ) ? exécuter ce code : exécuter celui‑ci à la place
```

L'équivalent de la condition précédente en utilisant l'opérateur ternaire serait:

```js
let age = 18;
age > 18  ? console.log("Vous êtes majeur!") : console.log("Vous êtes mineur!");// Vous êtes majeur!
```

---

### 1.3/ Instruction switch

Les Instructions ```if...else``` font bien le travail d'aiguiller la programmation selon des conditions, mais elles ne sont pas sans inconvénient. Elles sont principalement adaptées aux cas où vous avez un choix binaire.

Quand nous avons un système de condition plus complexe, avec plusieurs testes, les code peut devenir très bit illisible.

Les instructions switch sont vos amies — elles prennent une seule valeur ou expression en entrée, puis examinent une palette de choix jusqu'à trouver celui qui correspond, et exécutent le code qui va avec.

Voici un peu de pseudo-code, pour vous donner l'idée :

```js
switch (expression) {
case choix1:
exécuter ce code
break;

case choix2:
exécuter ce code à la place
break;

// incorporez autant de case que vous le souhaitez

default:
sinon, exécutez juste ce code
}
```

Et un exemple simple pour mieux comprendre:

```js
let couleur = "rouge";
switch (couleur) {
case "rouge":
console.log("C'est une couleur chaude!")
break;

case "bleu":
console.log("C'est une couleur froide!")
break;

case "vert":
console.log("C'est une couleur froide!")
break;

// incorporez autant de case que vous le souhaitez

default:
console.log("Je ne connais pas cette couleur!")
}
```

Ce qui affiche:

```js
"C'est une couleur chaude!"
```

Il est important de savoir que si une condition est validée, le code exécutera toutes les autres instructions, même si la condition reste fausse.

Pour arrêter le code, nous utilisons le ```break```, utilisons l'exemple précédent pour illustrer:

```js
let couleur = "rouge";
switch (couleur) {
case "rouge":
console.log("C'est une couleur chaude!");
// Omission du 'break';

case "bleu":
console.log("C'est une couleur froide!");
break;

case "vert":
console.log("C'est une couleur froide!");
break;

default:
console.log("Je ne connais pas cette couleur!");
}
```

Ce qui affiche:

```js
"C'est une couleur chaude!"
"C'est une couleur froide!"
```

Mais pourquoi cela fonctionne-t-il de cette manière?

C'est pour avoir la possibilité d'utiliser un ***OU*** afin d'éviter de dupliquer du code.

Dans notre exemple, les instructions sont les mêmes pour la couleur bleu et vert. Si nous voulons éviter de dupliquer ce code il faut faire:

```js
let couleur = "bleu";
switch (couleur) {
case "rouge":
console.log("C'est une couleur chaude!");
break;

case "bleu":
case "vert":
console.log("C'est une couleur froide!");
break;

default:
console.log("Je ne connais pas cette couleur!");
}
```

Ce qui affiche:

```js
"C'est une couleur froide!"
```

---

## 2/ Les boucles

Les langages de programmation sont très utiles pour effectuer des tâches répétitives, allant de calculs basiques jusqu'à peu près n'importe quelle autre situation où vous avez un certain nombre d'actions similaires à répéter

---

### 2.1/ La boucles for

La première, celle que vous utiliserez le plus souvent, est la boucle for. Elle a la syntaxe suivante :

```js
for (initialisation; condition de sortie; expression finale) {
// code à exécuter
}
```

---

### Table de multiplication

Nous allons ici, utiliser une boucle ````for```, pour afficher la table de multiplication d'un nombre entre ***0*** et ***10***:

```js
let nombre = 7;
for (let compteur = 0; compteur <=10; compteur++) {
console.log(`${compteur} x ${nombre} = ${nombre * compteur}`)
}
```

Ce qui affiche:

```console
0 x 7 = 0
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
5 x 7 = 35
6 x 7 = 42
7 x 7 = 49
8 x 7 = 56
9 x 7 = 63
10 x 7 = 10
```

---

### 2.2/ while et do…while

```for``` n'est pas le seul type de boucle disponible en JavaScript.

D'abord, regardons la boucle while. Nous allons reprendre l'exemple de la table multiplication:

```js
let nombre = 7;
let compteur = 0;
while (compteur <= 10) {
console.log(`${compteur} x ${nombre} = ${nombre * compteur}`)
compteur++;
}
```

Cela fonctionne de manière très similaire à la ***boucle*** ```for```, sauf que la ***variable de départ est définie avant la boucle***, et ***l'expression finale est incluse dans la boucle*** après le code à exécuter, plutôt que ces deux éléments soient inclus dans les parenthèses.

La condition de sortie est incluse dans les parenthèses, précédées du mot-clé ```while``` au lieu de ```for```.

La boucle ```do…while``` est très similaire, mais dénote une variation par rapport à la structure de la ***boucle*** ```while``` :

```js
let nombre = 7;
let compteur = 0;
do {
console.log(`${compteur} x ${nombre} = ${nombre * compteur}`)
compteur++;
}while (compteur <= 10)
```

Dans ce cas, ***l'initialiseur vient en premier***, avant que la boucle ne commence. Le mot-clé ```do``` précède directement les accolades contenant le code à exécuter et l'expression finale.

Le différenciateur ici est que ***la condition de sortie vient après tout***, enveloppée entre parenthèses et précédée d'un mot-clé ```while```.

Dans une boucle ```do…while```, ***le code à l'intérieur des accolades est toujours exécuté au moins une fois avant que la vérification ne soit effectuée*** pour voir si elle doit être exécutée à nouveau (dans ```while``` et ```for```, la vérification arrive en premier, donc le code pourrait ne jamais être exécuté).
</Block>

***Attention*** : Avec while et do…while, comme avec toutes les boucles, vous devez vous assurer que l'initialiseur est incrementé pour qu'il atteigne finalement la condition de sortie.

Si ce n'est pas le cas, la boucle continuera indéfiniment, et soit le navigateur l'arrêtera, soit il se bloquera. C'est ce qu'on appelle une boucle infinie.

---

## Conclusion

Nous avons commencé par la théorie seule, pour vous habituer aux raisons d'utiliser JavaScript, et à ses possibilités.

Dans le prochain chapitre nous allons commencer à découvrir les notions de base de la programmation, en utilisant JavaScript comme langage.

---

## Aller plus loin

[Précédent: CSS: Initiation](https://djemai-samy.com/posts/0.css-initation)

[Suivant: Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
