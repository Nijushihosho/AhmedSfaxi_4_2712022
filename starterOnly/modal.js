const { func } = require("superstruct");

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



//variables boutons radio
const checkboxInput = document.getElementsByClassName("checkbox-input");
const location = document.getElementsByClassName("location");

// Fonction check déclenchée au click du bouton submit
const envoi = document.querySelector(".btn-submit")
envoi.addEventListener("click", check);

function check(e) {
	//pour chaque champ du formulaire, vérifie les contraintes
	let validateAll = true

  // champ nom 
	if (firstName.value.match(/^[a-z]{2,}$/)) {
    document.getElementById("first").parentElement.dataset.error = ""
    document.getElementById("first").parentElement.dataset.errorVisible = false
		validateAll  = true
	} else { 
  firstName.parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom "
  firstName.parentElement.dataset.errorVisible = true
		validateAll  = false
	}

  // champ prénom 
if (lastName.value.match(/^[a-z]{2,}$/)) {
  document.getElementById("last").parentElement.dataset.error = ""
  document.getElementById("last").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
lastName.parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom "
lastName.parentElement.dataset.errorVisible = true
  validateAll  = false
}

// adresse mail
if (mail.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
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

// Date de naissance 

if (bDate.value.length > 0) {
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

// Participation à des tournois  
if (number.value.match(/^[0-99]$/)){ 
  document.getElementById("quantity").parentElement.dataset.error = ""
  document.getElementById("quantity").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
number.parentElement.dataset.error = "Veuillez entrer un chiffre entre 0 et 99"
number.parentElement.dataset.errorVisible = true
  validateAll  = false
}

// Choix des options villes

for (var i = 0; i < location.length; i++) {
  location[i].addEventListener('click',updateDisplay);
}

function updateDisplay(){
  var checkedCount = 1;
  for(var i= 0; i < location.length; i++) {
    if(location[i].checked) {
      checkedCount++;
    }
}
if(checkedCount === 0) {
  checkboxInput.checked = false;
} else if(checkedCount === location.length) {
  checkboxInput.checked = true;
} else {
  checkboxInput.checked = false;
  location.parentElement.dataset.errorVisible = true
}

// termes et conditions 

if (document.getElementById("checkbox1").checked) {
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
}
}
