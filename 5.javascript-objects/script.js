// 1/ créer un objet
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

// 2. Accéder aux membres d'un objet

//2.1 Notation avec point
personne.nom; // 'Doe'
personne.interets[1]; // "Graphisme"
personne.adresse.rue;// Charles de Gaulle
personne.bio(); // Doe John a 32ans. Habite à 5, Charles de Gaulle, 92700

//2.2 Notation avec crochet
personne['nom']; // 'Doe'
personne['interets'][1]; // "Graphisme"
personne['adresse']['rue'];// Charles de Gaulle
personne['bio'](); // Doe John a 32ans. Habite à 5, Charles de Gaulle, 92700

//3. Modifier des membres
personne.age = 45; 
personne['nom'] = 'Smith';

// Ajouter de nouveaux membres
personne.travail = 'Cuisinier'
personne.auRevoir = function() { alert("Bye bye tout le monde !"); }

// Une fois déclaré, nous pouvons utiliser cette nouvelle méthode
personne.auRevoir();


//4. les constructeurs
// Constructeur d'objets
function Personnage(leNom, puissance){
 
  // Nous utilisons maintenant le mot clé 'this' contenant la référence à l'objet

  // Assigne le membre puissance avec la valeur du paramètre puissance
  this.nom = leNom;

  // Assigne le membre puissance avec la valeur du paramètre puissance
  this.puissance = puissance;

  // Assigne le membre présentation avec une methode
  this.presentation = function(){
      alert(`Bonjour! je suis ${this.nom}`);
    }
 
  // Retourne l'objet
  return this;
}

// Instancier les objets
let personnageSpiderman = new Personnage('Spider-Man', 5);    
let personnageDrStrange = new Personnage('Dr.Strange', 9);  

// Utiliser les objets comme avant
personnageSpiderman.presentation();
personnageDrStrange.presentation();

//5. Les méthodes statiques
// Déclaration de la méthode statique
Personnage.studio = function(){
  console.log('Je suis un personnage de Marvel')
}

// Utilisation de la méthode sans instancier d'objets
Personnage.studio(); // Je suis un personnage de Marvel


//6. Des objets partout
console.log(console); // Affiche l'objet natif 'console', dans la console du navigateur.

// Instancier un objet de type Array
let unTableau = new Array("a", "b", "c");

// Afficher le tableau dans la console
console.log(unTableau);

// Taille d'un tableau
unTableau.length; // 3

// Transfrome un tableau en chaine de caratères
unTableau.toString(); // "a,b,c"

//6.1 les Numbers
let number = new Number(10.123456);
console.log(number)

// Arrondir un nombre décimal
number.toFixed(2); // 10.12

//6.2 les Strings
let chaine = new String("chaine");
console.log(chaine)

//taille d'une chaine
chaine.length; // 6

//Retrouver un caractère
chaine[0]; // "c"
chaine[3]; // "i"

//Trouver une sous-chaîne
chaine.indexOf('ine');

// Trouver le dernier caractère de la chaine
chaine[chaine.length-1]; // "e"

// 6.3/ Les Arrays:
let tableau = new Array("a", "b", "c");
console.log(tableau)

//Ajouter un élément à la fin
// Ajoute "d" a la fin du tableau
tableau.push("d"); // 4

tableau; // ["a", "b", "c", "d"]

// Ajoute "e" et "f" a la fin du tableau
tableau.push("e", "f"); // 6

tableau; // ["a", "b", "c", "d", "e", "f"]

// Supprimer le dernier élément
// Supprime "f" du tableau
tableau.pop(); // f

tableau; // ["a", "b", "c", "d", "e"]

// Supprime "e" du tableau
tableau.pop(); // e

tableau; // ["a", "b", "c", "d"]


