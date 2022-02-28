const { validate } = require("json-schema");
const { resourceUsage } = require("process");

function editNav() {
  let x = document.getElementById("myTopnav");
  // on teste à la fois si le type et le même et si le contenu est le même
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector("span.close");


// launch modal event fonction fléchée
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
btnClose.addEventListener("click", closeModal);
btnClose.addEventListener("click", (e) => {
console.log(e);
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal () {
  modalbg.style.display = "none";
}

// Lit l'id des champs et y récupère la <value>

const firstName = document.getElementById("first").value;
const lastName = document.getElementById("last").value;
const mail = document.getElementById("email").value;
const bDate = document.getElementById("birthdate").value;
const radio = document.createElement("INPUT");
radio.setAttribute("name", "type");
const checkBox = document.getElementById("checkbox");

// Pour chaque champ du formulaire, définition des contraintes de API 

function check() {
  //pour chaque champ du formulaire, vérifie les contraintes
let validate = true; 
   if (firstName == "") {
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du nom");
    firstName.style.borderColor = "#FF0000";
    validate = false
    return false;
  } else {
    firstName.style.borderColor = "#FF0000".reset();
    alert("Veuillez entrer 2 caractères ou plus").reset();
  }
  if (lastName == "") {
    lastName.style.borderColor = "#FF0000";
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du prénom");
    validate = false
    return false;
  } else {
    lastName.style.borderColor = "#FF0000".reset();
    alert("Veuillez entrer 2 caractères ou plus").reset();
  }
  if ("mail".value == "") {
    mail.style.borderColor = "#FF0000";
    alert ("Veuillez entrer une adresse mail conforme");
    validate = false;
    return false;
  } else {
    ("mail").value=reset; 
  }
  if ("bDate".value == "") {
    bDate.style.borderColor = "#FF0000";
    alert ("Veuillez entrer une date au format date de naissance");
    validate = false;
    return false;
  } else {
    ("bDate".value="Reset"); 
  }
  if(!radio) {
radio.selectedIndex = "0";
    alert("Vous devez vérifiez que vous acceptez les termes et conditions");
    validate = false;
    return false;
  }
  else {
    ("radio".type="Reset");
}
}



/*firstName : ["/^[a-z]{2,}$/" , "Veuillez entrer 2 caractères ou plus pour le champ du prénom"],
lastName : ["/^[a-z]{2,}$/" , "Veuillez entrer 2 caractères ou plus pour le champ du nom"],
mail : ["/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"],
bDate : ["/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/", "Vous devez entrer votre date de naissance"],
;*/
