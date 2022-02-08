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
const firstName = document.getElementById("#first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthDate");

// Const de vérification
/*const.inpats  = (value) => {
  console.log(value);
  if (value.length > 0 && (value.length < 2)
  {
    errorDisplay("textContent=(Ce champ doit au moins contenir 2 lettres");
  });
});



const firstNameChecker = (value) => {
  console.log(value);
};
const birthdayChecker = () => {};
const emailChecker = () => {};
const confirmChecker = () => {};
*/

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

// lier les labels aux entrées dans le HTML validé par Submit

firstName.forEach((text) => {
  firstName.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "first":
        firstNameChecker(e.target.value);
        break;
    };
  });