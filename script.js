// Récupération des différents éléments
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const phoneNumber = document.querySelector("#phone");
const email = document.querySelector("#email");
const submitBtn = document.querySelector(".submit__btn");
const valueMessage = document.querySelector(".information").children[1];

// création de variables
let qrCodeValue;
let qr = new QRious({
  element: document.querySelector(".qrious"),
  size: 250,
  value: qrCodeValue,
});

// Regex
const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const regexTelephone = /^(33|0)(6|7|9)\d{8}$/;

/**
 * Fonction firstNameValidation pour la validation du champ prénom
 * @param {String} firstName
 */
const firstNameValidation = (firstName) => {
  // Ecoute de l'événement "change" sur l'input firstName
  firstName.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexName.test(firstName.value) === false) {
      document.querySelector("#firstNameErrorMsg").textContent =
        "Veuillez saisir un prénom valide, ex : Pierre";
      return false;
    } else {
      document.querySelector("#firstNameErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction firstNameValidation
firstNameValidation(firstName);

/**
 * Déclaration de la fonction lastNameValidation pour la validation du champ nom
 *  @param {String} lastName
 */
const lastNameValidation = (lastName) => {
  // Ecoute de l'événement "change" sur l'input lastName
  lastName.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexName.test(lastName.value) === false) {
      document.querySelector("#lastNameErrorMsg").textContent =
        "Veuillez saisir un nom valide, ex : Dupont";
      return false;
    } else {
      document.querySelector("#lastNameErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastName);

/**
 * Déclaration de la fonction phoneValidation pour la validation du champ nom
 *  @param {Number} phoneNumber
 */
const phoneValidation = (phoneNumber) => {
  // Ecoute de l'événement "change" sur l'input phone
  phoneNumber.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexTelephone.test(phoneNumber.value) === false) {
      document.querySelector("#phoneNumberErrorMsg").textContent =
        "Veuillez saisir un numéro de téléphone valide, ex : 06 00 00 00 00";
      return false;
    } else {
      document.querySelector("#phoneNumberErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction phoneValidation
phoneValidation(phoneNumber);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ nom
 *  @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "change" sur l'input email
  email.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) === false) {
      document.querySelector("#emailErrorMsg").textContent =
        "Veuillez saisir un email valide, ex : exemple@contact.com";
      return false;
    } else {
      document.querySelector("#emailErrorMsg").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);

// Déclaration de la fonction submit gérant la soumission du formulaire
const submit = () => {
  // Ecoute de l'événement "click" sur le bouton "Soumettre"
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      regexName.test(firstName.value) === false ||
      regexName.test(lastName.value) === false ||
      regexTelephone.test(phoneNumber.value) === false ||
      regexEmail.test(email.value) === false
    ) {
      alert("Veuillez remplir correctement les champs du formulaire !");
    } else {
      qrCodeValue =
        firstName.value +
        "-" +
        lastName.value +
        "-" +
        phoneNumber.value +
        "-" +
        email.value;
    }
    console.log(qrCodeValue);
    qr.value = qrCodeValue;
    valueMessage.textContent = qr.value;
  });
};
// Appel de la fonction submit
submit();
