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
} )

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal () {
  modalbg.style.display = "none";
}

// Formulaire valide lable vers html for et 
//function isValid(value) {
  //return /^e[0-9]{2,}.test(value) 
  //}
  
  
