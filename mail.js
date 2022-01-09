const firebaseConfig = {    apiKey: "AIzaSyAc78OtRAsON7JDPIByq7DkYpj2ltFZotk",
authDomain: "contactform-ac1fa.firebaseapp.com",
databaseURL: "https://contactform-ac1fa-default-rtdb.firebaseio.com",
projectId: "contactform-ac1fa",
storageBucket: "contactform-ac1fa.appspot.com",
messagingSenderId: "731650321781",
appId: "1:731650321781:web:a2a17d85a7ea9c408ab73c"
  //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
