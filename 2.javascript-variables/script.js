console.log("Qu'est ce qu'une variable ?")

// Déclarer une variable
let uneVariable;

console.log("-----------------------------");

console.log("Afficher la valeur de la variable dans la console")

console.log(uneVariable);// undefined


console.log("-----------------------------");

//Affecter une valeur à la variable
uneVariable = 10;

console.log("Afficher la valeur de la variableapres réaffectation")

console.log(uneVariable);// 10


console.log("-----------------------------");

console.log("1/ Type: Boolean")
let jeSuisVrai = true;
console.log(jeSuisVrai);// 10

let jeSuisFaux = false;
console.log(jeSuisFaux);// 10

console.log("-----------------------------");

console.log("1.1/ Opérateurs de logique")

console.log("true ou true");
console.log(true || true); // true

console.log("true ou false"); 
console.log(true || false); // true

console.log("false ou true"); 
console.log(false || true); // true

console.log("false ou false"); 
console.log(false || false); // false

console.log("-----------------------------");

console.log("true et true");
console.log(true && true); // true

console.log("true et false"); 
console.log(true && false); // false

console.log("false et true"); 
console.log(false && true); // false

console.log("false et false"); 
console.log(false && false); // false

console.log("-----------------------------");

console.log("NON true");
console.log(!true); // false

console.log("NON false"); 
console.log(!false); // true

console.log("-----------------------------");

console.log("2/ Le type: String")
// Déclarer une variable de type string
let salutation = 'Salut!';
let question = "Comment allez-vous?";

// Déclarer la variable 'phrase' ayant pour valeur la concaténation de
//'salutation', un espace et 'question'
console.log("2.1/ Concaténation des chaînes 'salutation', espace, 'question'")
let phrase = salutation + " " + question;

// Afficher 'phrase' dans la console
console.log(phrase); // Salut! Comment allez-vous?

console.log("-----------------------------");

console.log("2.2/ Littéraux de gabarits")

let multiLigne = `Ligne de texte 1
Ligne de texte 2`;

console.log(multiLigne);

console.log("-----------------------------");

let nom = "Djemai";
let prenom = "Samy";
let presentation = `Bonjour,
je suis ${nom} ${prenom}.
Et vous?
`;
console.log("2.2/  Littéraux de gabarits avec expression 'nom' et 'prenom'")
console.log(presentation);

console.log("-----------------------------");

console.log("3/ Le type: Number")

let rayon = 12;
const pi = 3.14;

let nombreA = 5;
let nombreB = 2;

console.log("3.1/ Addition")

let additionAB = nombreA + nombreB;// 7

console.log("-----------------------------");

console.log("3.1/ Ajouter ou enelever une nombre")
let nombreOeufs = 0;

console.log("Nombre d'oeufs apres initialisation")
console.log(nombreOeufs);// 0


nombreOeufs = nombreOeufs + 2;// 0 + 2 = 2

console.log("Nombre d'oeufs apres ajout de 2")
console.log(nombreOeufs);// 2


nombreOeufs = nombreOeufs + 3;// 2 + 3 = 5

console.log("Nombre d'oeufs apres ajout de 3")
console.log(nombreOeufs);// 5

console.log("-----------------------------");

console.log("Peut-être que 1 + 1 = 11... Et ça c'est beau!")

console.log("1" + 1)// 11

console.log("-----------------------------");

console.log("3.3/ Opérateurs d'incrémentation et de décrémentation")


nombreOeufs++;
console.log("Nombre d'oeufs incrémentation")
console.log(nombreOeufs);// 2

nombreOeufs--;
console.log("Nombre d'oeufs apres décrémentation")
console.log(nombreOeufs);// 5

console.log("-----------------------------");

console.log("3.4/ Opérateurs de comparaison")

console.log("Egalité stricte")

console.log("5 égale à 2 + 3");
console.log(5 === 2 + 3);// true

console.log("5 égale à 2 + 2");
console.log(5 === 2 + 2);// false

console.log("5 égale à 2la caine de caractères 5");
console.log(5 === 2 + 3);// false

console.log("-----------------------------");

console.log("Non Egalité stricte")

console.log("5 n'est pas égale à 2 + 3");
console.log(5 !== 2 + 3);// false

console.log("5 égale n'est pas égale à 2 + 2");
console.log(5 !== 2 + 2);// true

console.log("-----------------------------");

console.log("Inférieur ou égale à")

console.log("5 est infèrieure ou égale à 2 + 2");
console.log(5 <= 2 + 2);// true

console.log("5 est infèrieure ou égale à 2 + 3");
console.log(5 <= 2 + 3);// true

console.log("-----------------------------");

console.log("Inférieur à")

console.log("5 est infèrieure  à 2 + 2");
console.log(5 < 2 + 2);// true

console.log("5 est infèrieure à 2 + 3");
console.log(5 < 2 + 3);// false

console.log("-----------------------------");

console.log("-----------------------------");

console.log("supèrieure ou égale à")

console.log("5 est supèrieure ou égale à 2 + 2");
console.log(5 >= 2 + 2);// false

console.log("5 est supèrieure ou égale à 2 + 3");
console.log(5 >= 2 + 3);// true

console.log("-----------------------------");

console.log("Inférieur à")

console.log("5 est supèrieure à 2 + 2");
console.log(5 > 2 + 2);// false

console.log("5 est supèrieure à 2 + 3");
console.log(5 > 2 + 3);// false

console.log("-----------------------------");

console.log("4/ Les tableaux")

// 4.1/ Déclarer un tableau
let produits = ['pain', 'lait', 'fromage', 'houmous', 'nouilles']

console.log("Le tableau produits")
console.log(produits)

console.log("élement la position 0 dans le tableaux produits");
console.log(produits[0]);// pain

console.log("élement la position 1 dans le tableaux produits");
console.log(produits[1]);// lait

//...

console.log("élement la position 4 dans le tableaux produits");
console.log(produits[4]);// pain


console.log("-----------------------------");

console.log("4.4/modifier le tableau")

produits[0] = "crème de sésame";// 'crème de sésame';
console.log(produits)// ['crème de sésame', 'lait', 'fromage', 'houmous', 'nouilles']

console.log("-----------------------------");

console.log("4.3/ tableau multidimensionnel")

let multiTab = [["Djemai Samy", 28], ["John Doe", 60]]

console.log(multiTab[1][0]);// John Doe

console.log("-----------------------------");

console.log("FIN");
