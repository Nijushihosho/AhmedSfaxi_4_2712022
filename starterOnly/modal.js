
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
console.log(firstName);
const lastName = document.getElementById("last").value;
const mail = document.getElementById("email").value;
const bDate = document.getElementById("birthdate").value;
const radio = document.getElementById("location1").value;
const checkBox = document.getElementById("checkbox");


// Pour chaque champ du formulaire, définition des contraintes de API 

function check() {
  //pour chaque champ du formulaire, vérifie les contraintes
let validateAll = true; 
   if (firstName.match(/^[a-z]{2,}$/))  {

  } else {
document.getElementById("first").parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
document.getElementById("first").parentElement.dataset.errorVisible = "true";    
validateAll = false;
  }}
 

 /* if (lastName.match(/^[a-z]{2,}$/))  { 
    console.log("match");
    ("Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    
  return false;
  } else {
  
    ("Veuillez entrer 2 caractères ou plus").reset();
  }
  if (mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
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
  if (document.getElementById("location").checked==false) && (document.getElementById("location2").checked==false) && (document.getElementById("location3").checked==false) && (document.getElementById("location4").checked==false) && (document.getElementById("location5").checked==false) && (document.getElementById("location6").checked==false)
&& (document.getElementById("location1").checked==false);
 ("Vous devez vérifier que vous acceptez les termes et conditions");
    return false;
  } else {
    ("Vous devez vérifier que vous acceptez les termes et conditions").reset();
  }

  check(); 
*/
