// Sélection par identifiant
let sectionNode = document.getElementById("uneSection");

// Sélection par balise
let listPElements = document.getElementsByTagName("p");

// Sélection par classe
let listClassTitleElements = document.getElementsByClassName("title");

// Sélection avec selecteurs css
let queryClassTitleElements = document.querySelectorAll(".title");

//Modification des éléments

//Selection du h1
let h1Node = document.querySelector("h1");

//Mofication du texte du h1
h1Node.textContent = "Un titre modifié en JavaScript";

//Mofication du style du h1
h1Node.style.color = "blue";
h1Node.style.border = "1px solid black";
h1Node.style.padding = "10px";
h1Node.style.textAlign = "center";

//Creation d'elements
const para = document.createElement("p");
para.textContent = "Un nouveau paragraphe";

// Ajouter élement dans autre élément:
sectionNode.appendChild(para);

// Interactions

//fonction gestion d'évènement

// Sélectionner le bouton avec l'id 'monBouton'
let monBouton = document.querySelector("#monBouton");

// Fonction gestion d'événement
function afficheAlert(e) {
	// Afficher l'objet event dans la console
	console.log(e);

	// Accéder l'élément cible de l'événement
	e.target.backgroundColor = "royalblue";

	alert("Un clique s'est produit");
}

// Ajouter un écouteur d'évènement au bouton
monBouton.addEventListener("click", afficheAlert);

//Prevenir le coportement par défaut

document.querySelector("#submit").addEventListener("click", function (e) {
	// Stoppe la soumission du formulaire
	e.preventDefault();

	// Sélectionner l'input pour récupérer l'entrée
	let nomInput = document.querySelector("#nom");

	// Sélectionner le paragraphe
	let para = document.querySelector("#nom-user");

	// Modifier le texte du paragraphe avec le nom entré dans l'input
	para.textContent = nomInput.value;
});

// ToDo list
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

