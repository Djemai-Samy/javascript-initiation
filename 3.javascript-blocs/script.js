let age = 28;

console.log("1.1/ Condition if...else");
if (age > 18) {
  console.log("1.1/ la condition est à true");

  console.log("Vous êtes majeur!");

  console.log("-----------------------------");
} else {
  console.log("1.1/ la condition est à false");

  console.log("Vous êtes mineur!");

  console.log("-----------------------------");
}

console.log("1.2/ opérateur ternaire");

age > 18  ? console.log("Vous êtes majeur!") : console.log("Vous êtes mineur!");// Vous êtes majeur!

console.log("-----------------------------");


let couleur = "bleu";

console.log("1.3/ instruction switch");

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

console.log("-----------------------------");

let nombre = 7;

console.log("2.1/ Boucle for");

for (let compteur = 0; compteur <=10; compteur++) {
  console.log(`${compteur} x ${nombre} = ${nombre * compteur}`)
}

console.log("-----------------------------");


let compteur = 0;

console.log("2.2/ Boucle white");

while (compteur <= 10) {
  console.log(`${compteur} x ${nombre} = ${nombre * compteur}`)
  compteur++;
}

console.log("-----------------------------");

console.log("2.3/ Boucle do...white");

do {
  console.log(`${compteur} x ${nombre} = ${nombre * compteur}`)
  compteur++;
}while (compteur <= 10)

console.log("-----------------------------");

console.log("FIN");

