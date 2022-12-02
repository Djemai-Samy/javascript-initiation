# Javascript: Les fonctions

Apprendre les bases du langage Javascript, pour construire des pages web dynamiques et interactives.

Les fonctions sont un autre concept essentiel de la programmation, qui permettent de stocker dans un bloc défini une partie de code qui effectue une seule tâche afin de l'appeler plus tard.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.javascript-initiation)

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
- [Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)
- [Javascript: Les fontions](https://djemai-samy.com/posts/4.javascript-functions.article)

## Prérequis

Il est conseillé d'avoir suivi les séries:

- [Javascript: Introduction](https://djemai-samy.com/posts/1.javascript-introduction.article)
- [Javascript: Les variables](https://djemai-samy.com/posts/2.javascript-variables.article)
- [Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)
- [Javascript: Les fonctions](https://djemai-samy.com/posts/4.javascript-functions.article)

---

## Où trouve-t'on des fonctions ?

Les ***fonctions*** font partie des briques fondamentales de JavaScript.

Une ***fonction est une procédure*** JavaScript, ***un ensemble d'instructions*** effectuant une tâche ou calculant une valeur.

***Afin d'utiliser une fonction***, il est nécessaire de l'avoir auparavant ***définie au sein de la portée*** dans laquelle on souhaite l'appeler.

---

## 1/ Fonction personnalisées

Les ***fonctions*** sont faite pour ***organiser*** notre code et nous aider à ***ne pas réécrire tout le code*** à chaque fois qu'on exécute un bloc de code.

De plus, les fonctions peuvent contenir tout le code qu'il vous plaira — vous pouvez même ***appeler d'autres fonctions à l'intérieur d'une fonction***.

---

### 1.1/ Déclaration d'une fonction

***Les fonctions***, comme les autres types, ***peuvent être stocker dans des variables***.

***Une définition de fonction*** (aussi appelée déclaration de fonction ou instruction de fonction) est construite avec le ***mot-clé function***, suivi par :

- Le nom de la fonction.
- Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules.
- Les instructions JavaScript définissant la fonction, entre accolades, { }.

```js
let maFonction = function(){ console.log('je suis une fonction!') }
```

Pour ***utiliser une fonction après l'avoir définie***, vous devez la ***lancer*** — ou ***l'invoquer***.

Pour ce faire, vous devez inclure ***le nom de la fonction*** quelque part dans le code ***suivi par des parenthèses*** :

```js
maFonction();// 'je suis une fonction!'
```

il existe une autre syntaxe pour déclarer les fonction, l'équivalent de l'exemple précédent:

```js
function maFonction(){ console.log('je suis une fonction!'); }
```

Nous pouvons bien sûr créer des fonctions aussi ***longue quand veut***, Pour l'exemple nous allons implémenter une ***fonction*** qui permet d'afficher la ***table de multiplication d'un nombre en 0 et 10***:

```js
let calculTable = function(){
  // Bloc de code ira ici
}

```

Une fois déclarée, passons à la logique. ***A l'intérieure des accolades de la fonction***:

```js
let nombre = 7;

console.log(`La table de multiplication de ${nombre}`);

for(let compteur = 0; compteur <= 10; compteur++){
  console.log(`La table de multiplication de ${nombre}`);
}
```

Et pour l'utiliser il faut l'***invoquer*** après la ligne ou elle a été déclarée:

```js
calculTable();
```

Notre fonction marche bien, et la table est affichée dans la console.

Cependant, elle n'est pas très ***réutilisable***. Elle ne calcule que la table de multiplication de 7.

On peut ***paramétrer les fonctions*** pour ajouter de l'***abstraction*** et les rendre plus ***réutilisable***.

---

### 1.2/ Fonction paramétrée

***Certaines fonctions*** nécessitent que l'on définisse ***des paramètres*** lorsqu'on les ***appelle*** - ce sont des valeurs qui doivent être incluses dans les parenthèses de la fonction pour que celle-ci fonctionne correctement.

Si on reprend l'exemple précédent, nous pouvons ***envoyer/décider*** de la valeur du nombre pour pouvoir ***réutiliser la même fonction*** pour afficher n'importe quel table de multiplication:

```js
let calculTable = function(nombre){
  for(let compteur = 0; compteur <= 10; compteur++){
    console.log(`La table de multiplication de ${nombre}`);
  }
}

calculTable(7);
calculTable(3);
```

Nous décidons de la ***valeur du paramètre*** au moment de ***l'invocation de la fonction***.

Note : Les paramètres sont parfois appelés arguments, propriétés ou encore attributs.

Nous avons la possibilité d'utiliser autant de paramètres que l'on veut. Il faut les séparer par des virgules.

---

## 1.3/ Le retour d'un fonctions

***Certaines fonctions ne retournent pas de valeur*** significative après avoir été exécutées, mais d'autres oui.

Il est important de comprendre ces valeurs, comment les utiliser dans votre code et ***comment faire pour que vos propres fonctions retournent des valeurs utiles***.

***Les valeurs de retour sont***, comme leur nom l'indique, ***les valeurs retournées par une fonction après son exécution***.

afin de retourner une valeur dans une fonction personnalisée, nous utilisons le mot clé ```return```:

```js
function bonjour(nom, prenom){
  return `Bonjour, ${nom} ${prenom}!`;
}

//1. Déclaration d'un variable qui aura pour valeur le retour de la fonction
let bonjourSam = bonjour("Djemai", "Samy");

console.log(bonjourSam)// Bonjour, Djemai Samy!

//2. Utilisation de la valeur retournée, directement dans le console.log()
console.log(bonjour('Doe', 'John'));// Bonjour, Doe John!
```

1. Vous pouvez stocker le retour d'une fonction dans une variable.

2. Nous pouvons utiliser le retour d'une fonction directement, sans devoir les stocker dans une variable.
</Block>

---

## Conclusion

Cet article vous a amené à travers tout le processus de construction d'une fonction pratique personnalisée, qui avec un peu plus de travail pourrait être transposée dans un projet réel.

Dans le module suivant, nous allons nous intéresser aux objets. Nous verrons les fondamentaux de la syntaxe objet en JavaScript, et comment les manipuler.

---

## Aller plus loin

[Précédent: Javascript: Blocs structurels](https://djemai-samy.com/posts/3.javascript-blocs.article)

[Suivant: Javascript: Les objets](https://djemai-samy.com/posts/5.javascript-objects.article)
