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


// Pour chaque champ du formulaire, définition des contraintes de API 

function check(){
  //pour chaque champ du formulaire, vérifie les contraintes
let constraints = {
firstName : ["/^[a-z]{2,}$/" , "Veuillez entrer 2 caractères ou plus pour le champ du prénom"],
lastName : ["/^[a-z]{2,}$/" , "Veuillez entrer 2 caractères ou plus pour le champ du nom"],
email : ["/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"],
checkbox : [("location*").checked, "Vous devez choisir une option"],
//checkbox2 : ["if (!form.location.ckecked) {alert("Vous devez vérifiez que vous acceptez les termes et conditions")],
//birthdate : ["", "Vous devez entrer votre date de naissance"],
};

//function checkForm(checkbox1)
/*{
  ...
  if(!form.location.checked) {
    alert("Vous devez vérifiez que vous acceptez les termes et conditions");
    form.location.focus();
    return false;
  }
  return true;
}*/

//Validations checkbox locations
/*function Checkbox1 (location) {
  let x = document.forms["checkbox"]["location"].value;
  if (x == "") {
    alert("Vous devez choisir une option");
    return false;
  }
}*/


// Lit l'id des champs et y récupère la <value>

const firstName = document.getElementById("first").value;
console.log("j'affiche le ",firstName);
const lastName = document.getElementById("last").value;
const email = document.getElementById("email").value;
console.log(email);
const checkBox = document.getElementById("location*");
const checkbox2 = document.getElementById("checkbox2");
const birthdate = document.getElementById("birthdate");


// Build the constraint checker
let constraint = new RegExp(constraints[firstName][0],"");
console.log(constraint);

// Check it!
if (constraint.test(firstName.value)) {
  // The first the constraint, we use the Constraint checkfunction API to tell it
firstName.setCustomValidity("Merci ! Votre réservation a été reçue.");
}
else {
 //The firstname doesn't follow the constraint, we use the checkfunction API to
  // give a message about the format required for this firstName
firstName.setCustomValidity(constraints[firstName][0],"Veuillez entrer 2 caractères ou plus pour le champ du prénom");
}

//Then we link it to the oninput event for the <input>:

window.onload = function () {
document.getElementById("first").oninput = check;
document.getElementById("last").oninput = check;
document.getElementById("email").oninput = check;
document.getElementById("location*").oninput = check;
document.getElementById("checkbox2").oninput = check;
document.getElementById("birthdate").oninput = check;
}

function Validate()
{
    
} 
}






