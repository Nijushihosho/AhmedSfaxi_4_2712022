function editNav() {
	let x = document.getElementById("myTopnav")
	// on teste à la fois si le type et le même et si le contenu est le même
	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav"
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const btnClose = document.querySelector("span.close")

// launch modal event fonction fléchée
modalBtn.forEach(btn => btn.addEventListener("click", launchModal))
btnClose.addEventListener("click", closeModal)
btnClose.addEventListener("click", e => {
	console.log(e)
})

// launch modal form
function launchModal() {
	modalbg.style.display = "block"
}

// Close modal form
function closeModal() {
	modalbg.style.display = "none"
}

// Lit l'id des champs et y récupère la <value>

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const bDate = document.getElementById("birthdate");
const number = document.getElementById("quantity");
const termes = document.getElementById("checkbox1");


const location1 = document.getElementById("location1");

// Fonction check déclenchée au click du bouton submit
const envoi = document.querySelector(".btn-submit")
envoi.addEventListener("click", check);

function check(e) {
	//pour chaque champ du formulaire, vérifie les contraintes
	let validateAll = true
	if (firstName.value.match(/^[a-z]{2,}$/)) {
    document.getElementById("first").parentElement.dataset.error = ""
    document.getElementById("first").parentElement.dataset.errorVisible = false
		validateAll  = true
	} else { 
  firstName.parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom "
  firstName.parentElement.dataset.errorVisible = true
		validateAll  = false
	}
if (lastName.value.match(/^[a-z]{2,}$/)) {
  document.getElementById("last").parentElement.dataset.error = ""
  document.getElementById("last").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
lastName.parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom "
lastName.parentElement.dataset.errorVisible = true
  validateAll  = false
}
if (mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+(?:\.[a-zA-Z0-9-]+)*$/)){
  console.log(email.value); 
  document.getElementById("email").parentElement.dataset.error = ""
  document.getElementById("email").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
  console.log("else ",email.value);
mail.parentElement.dataset.error = "Veuillez entrer une adresse mail conforme"
mail.parentElement.dataset.errorVisible = true
  validateAll  = false
}
if (bDate.value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
  console.log("valid",bDate.value);
  document.getElementById("birthdate").parentElement.dataset.error = ""
  document.getElementById("birthdate").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
  console.log("invalid ",bDate.value);
bDate.parentElement.dataset.error = "Veuillez entrer votre date de naissance"
bDate.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (number.value.match(/^[0-99]$/)){ 
  document.getElementById("quantity").parentElement.dataset.error = ""
  document.getElementById("quantity").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
number.parentElement.dataset.error = "Veuillez entrer un chiffre entre 0 et 99"
number.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (location1.checked == true) 
{console.log("ny a été coché")
}
/*
if (docum) {
  document.getElementsByClassName("location").parentElement.dataset.error = ""
  document.getElementsByClassName("location").parentElement.dataset.errorVisible = false
      validateAll = true
} else {
checkBox.parentElement.dataset.error = "Vous devez choisir une option"
checkBox.parentElement.dataset.errorVisible = true
validateAll = false
}
*/
if (document.getElementById("checkbox1").checked== true) {
  document.getElementById("checkbox1").parentElement.dataset.error = ""
  document.getElementById("checkbox1").parentElement.dataset.errorVisible = false
      validateAll = true
} else {
termes.parentElement.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions"
termes.parentElement.dataset.errorVisible = true
validateAll = false
}

{
e.preventDefault();
}}
;