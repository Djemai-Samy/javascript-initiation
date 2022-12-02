// Déclarer une fonction
let maFonction = function () {
	console.log("je suis une fonction!");
};

console.log("1.1/ executer une fonction");

maFonction();

console.log("------------------------------");



let calculTable = function(nombre){
  console.log(`La table de multiplication de ${nombre}`);
  for(let compteur = 0; compteur <= 10; compteur++){
    console.log(`${compteur} x ${nombre} = ${nombre * compteur}`);
  }
  console.log("------------------------------");
}

calculTable(7);

calculTable(3);

//1.3.1. Déclaration de ma fonction
function bonjour(nom, prenom){
  return `Bonjour, ${nom} ${prenom}!`;
}

//1.3.2. Déclaration d'un variable qui aura pour valeur le retour de la fonction
let bonjourSam = bonjour("Djemai", "Samy");

console.log(bonjourSam)// Bonjour, Djemai Samy!

//1.3.3. Utilisation de la valeur retournée, directement dans le console.log()
console.log(bonjour('Doe', 'John'));// Bonjour, Doe John!
