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

const firstName = document.getElementById("first").value
console.log("🚀 ~ file: modal.js ~ line 40 ~ firstName", firstName)
const lastName = document.getElementById("last").value
console.log("🚀 ~ file: modal.js ~ line 42 ~ lastName", lastName)
const mail = document.getElementById("email").value
console.log("🚀 ~ file: modal.js ~ line 44 ~ mail", mail)
const bDate = document.getElementById("birthdate").value
const loKation = document.getElementsByClassName("location")
const checkBox = document.getElementById("checkbox1")

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
const envoi = document.getElementById(".btn-submit")
envoi.addEventListener("click", check(e));
function check(e) {
	//pour chaque champ du formulaire, vérifie les contraintes
	let validateAll = true
	if (firstName.match(/^[a-z]{2,}$/)) {
    document.getElementById("first").parentElement.dataset.error = ""
    document.getElementById("first").parentElement.dataset.errorVisible = "false"
		validateAll = true
	} else { 
  firstName.parentElement.dataset.error = " Veuillez entrer 2 caractères ou plus pour le champ du prénom "
  firstName.parentElement.dataset.errorVisible = true
		validateAll = false
	}
e.preventDefault();
}
	/* if (lastName.match(/^[a-z]{2,}$/))  { 
    console.log("match");
    ("Veuillez entrer 2 caractères ou plus pour le champ du nom")
    
  return false;
  } else {
  
    ("Veuillez entrer 2 caractères ou plus pour le champ du nom").reset();
  }
  if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    ("Veuillez entrer une adresse mail conforme");
    return false;
  } else {
    ("Veuillez entrer une adresse mail conforme").reset();
  }
    if (bDate.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
    ("Veuillez entrer votre date de naissance");
    return false;
  } else {
   ("Veuillez entrer votre date de naissance").reset();
  }
  for(i=0 < i=)
  if (document.getElementByClass("location").checked==false) && (document.getElementById("location2").checked==false) && (document.getElementById("location3").checked==false) && (document.getElementById("location4").checked==false) && (document.getElementById("location5").checked==false) && (document.getElementById("location6").checked==false)
&& (document.getElementById("location1").checked==false);
 ("Vous devez vérifier que vous acceptez les termes et conditions");
    return false;
  } else {
    ("Vous devez vérifier que vous acceptez les termes et conditions").reset();
  }*/

