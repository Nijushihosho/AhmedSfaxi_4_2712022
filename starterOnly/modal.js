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
const radio1 = document.getElementById("location1");
const radio2 = document.getElementById("location2");
const radio3 = document.getElementById("location3");
const radio4 = document.getElementById("location4");
const radio5 = document.getElementById("location5");
const radio6 = document.getElementById("location6");

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

if (number.value.match(/^[0-99]$/)){ 
  document.getElementById("quantity").parentElement.dataset.error = ""
  document.getElementById("quantity").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
number.parentElement.dataset.error = "Veuillez entrer un chiffre entre 0 et 99"
number.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (radio1.checked==true) 
{console.log("New York a été coché");
document.getElementById("location1").parentElement.dataset.error = ""
  document.getElementById("location1").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
radio1.parentElement.dataset.error = "Vous devez choisir une option"
radio1.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (radio2.checked==true) 
{console.log("San Francisco a été coché");
document.getElementById("location2").parentElement.dataset.error = ""
  document.getElementById("location2").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
radio2.parentElement.dataset.error = "Vous devez choisir une option"
radio2.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (radio3.checked==true) 
{console.log("Seatle a été coché");
document.getElementById("location2").parentElement.dataset.error = ""
  document.getElementById("location2").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
radio3.parentElement.dataset.error = "Vous devez choisir une option"
radio3.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (radio4.checked==true) 
{console.log("Chicago a été coché");
document.getElementById("location2").parentElement.dataset.error = ""
  document.getElementById("location2").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
radio4.parentElement.dataset.error = "Vous devez choisir une option"
radio4.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (radio5.checked==true) 
{console.log("Boston a été coché");
document.getElementById("location2").parentElement.dataset.error = ""
  document.getElementById("location2").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
radio5.parentElement.dataset.error = "Vous devez choisir une option"
radio5.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (radio6.checked==true) 
{console.log("Portland a été coché");
document.getElementById("location2").parentElement.dataset.error = ""
  document.getElementById("location2").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
radio6.parentElement.dataset.error = "Vous devez choisir une option"
radio6.parentElement.dataset.errorVisible = true
  validateAll  = false
}

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
}}
;