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
const mail = document.getElementById("email");
const bDate = document.getElementById("birthdate");
const checkBox1 = document.getElementsByTagName(location).value;
const checkBox = document.getElementById("checkbox");

// Pour chaque champ du formulaire, définition des contraintes de API 

function check(){
  //pour chaque champ du formulaire, vérifie les contraintes
let validateAll = true, {
  if (document.getElementById("first").value == "") {
    firstName.style.borderColor = "#FF0000";
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du nom");
    validateAll = false;
  } else {
    document.getElementById("first").value="Reset"; 
  }
  if (document.getElementById("last").value == "") {
    lastName.style.borderColor = "#FF0000";
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du prénom");
    validateAll = false;
  } else {
    document.getElementById("last").value="Reset"; 
  }
  if (document.getElementById("bDate").value == "") {
    bDate.style.borderColor = "#FF0000";
    alert ("Veuillez entrer une date au format date de naissance");
    validateAll = false;
  } else {
    document.getElementById("bDate").value="Reset"; 
  }
  if(!checkBox) {
document.getElementsByTagName("location").selectedIndex =0;
    alert("Vous devez vérifiez que vous acceptez les termes et conditions");
    validateAll = false;
  }
  else {
    document.getElementById("checkBox").value="Reset";
}

}


/*firstName : ["/^[a-z]{2,}$/" , "Veuillez entrer 2 caractères ou plus pour le champ du prénom"],
lastName : ["/^[a-z]{2,}$/" , "Veuillez entrer 2 caractères ou plus pour le champ du nom"],
mail : ["/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"],
bDate : ["/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/", "Vous devez entrer votre date de naissance"],
};*/


  
//Then we link it to the oninput event for the <input>:

validateAll = function (check) {
document.getElementById("first").onchange = check;
document.getElementById("last").oninput = check;
document.getElementById("mail").oninput = check;
document.getElementById("bDate").oninput = check;
}

/*validation si remplit contraintes de check sinon désactive le submit 
function validate()
{
  const form = target;

  if (!form.check()) {

    // form is invalid - cancel submit
    preventDefault();
    stopImmediatePropagation();
  }
};*/
