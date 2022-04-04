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
const termes = document.getElementsByClassName("checkbox-input");
const checkBox = document.getElementById("checkbox1");

// Mise en lien dataset et attr data-error entre css et JS
// Etape 1 création nouveaux éléments après après class=formData
/*let error = document.querySelector(".formData");
//error.dataset.error = "true";
error.classList.add("data-error");
console.log(error.className);
error.setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du prénom");

/*const content = document.querySelector(".formData");
const attr = document.createAttribute("class");
attr.value = "true";
content.setAttribute("attr","Veuillez entrer 2 caractères ou plus pour le champ du prénom");
*/

//let errorVisible = document.querySelector(".formData");
//errorVisible.dataset.errorVisible = "true";
//errorVisible.classList.add("data-error-visible");
//console.log(errorVisible.className);
//errorVisible.setAttribute("data-error-visible","true");
//
//errorVisible.insertAdjacentHTML("beforebegin","first");

/*const id = document.querySelector(".formData")
class.dataset.error //
class.dataset.errorVisible //
*/

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
if (mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+(?:\.[a-zA-Z0-9-]+)*$/)) { 
  document.getElementById("email").parentElement.dataset.error = ""
  document.getElementById("email").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
mail.parentElement.dataset.error = "Veuillez entrer une adresse mail conforme"
mail.parentElement.dataset.errorVisible = true
  validateAll  = false
}
if (bDate.value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
  document.getElementById("birthdate").parentElement.dataset.error = ""
  document.getElementById("birthdate").parentElement.dataset.errorVisible = false
  validateAll  = true
} else { 
bDate.parentElement.dataset.error = "Veuillez entrer votre date de naissance"
bDate.parentElement.dataset.errorVisible = true
  validateAll  = false
}

if (document.getElementsByClassName("checkbox-input").checked){
  document.getElementsByClassName("checkbox-input").parentElement.dataset.error = ""
  document.getElementsByClassName("checkbox-input").parentElement.dataset.errorVisible = false
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