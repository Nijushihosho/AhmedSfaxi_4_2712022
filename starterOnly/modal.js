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

// Pour chaque champ, définition des contraintes

function check(){
  //pour chaque champ vérifie les contraintes
const constraints = {
  last : ['[a-z]{2,}$' , "Le nom doit comporter un minimum de 2 caractères"],
  first :['[a-z]{2,}$' , "Le prénom doit comporter un minimum de 2 caractères"],
}
};

// Lit l'id des champs

const firstName = document.getElementById("first").value;
console.log("j'affiche le ",firstName);
//const lastName = document.getElementById("last").value;
//const mail = document.getElementById("email").type;
//const birthdate = document.getElementById("birthDate").type;



// Build the constraint checker
//const constraint = new RegExp(constraints[firstName][0]("");
//console.log(constraint);


// Check it!
//if (constraint.test(firstName.value)) {
  // The first the constraint, we use the ConstraintAPI to tell it
 // firstName.setCustomValidity("");
//}
//else {
  // The firstname doesn't follow the constraint, we use the ConstraintAPI to
  // give a message about the format required for this firstName
//firstName.setCustomValidity(constraints[first][1]);
//}
//}

//Then we link it to the oninput event for the <input>:

window.onload = function () {
document.getElementById("first").oninput = check;
//document.getElementById("last").oninput = check;
 // document.getElementById("email").oninput = check;
//document.getElementById("birthdate").oninput = check;
}




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






