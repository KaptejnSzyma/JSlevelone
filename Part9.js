var FirstName = prompt("Welcome, please enter your first name")
var LastName = prompt("Enter your last name")
var Height = prompt("How tall are you?")
var Age = prompt("How old are you?")
var PetName = prompt("Enter your pet's name")
alert("Thank you for information")

var namesTrue = null;
var ageTrue = null;
var heightTrue = null;
var petTrue = null;

if (FirstName[0] === LastName[0]) {
  namesTrue = true;
}

if (Age > 20 && Age < 30) {
  ageTrue = true;
}

if (Height >=170) {
  heightTrue = true;
}

if (PetName[PetName.length-1]==="y") {
  petTrue = true;
}

if (namesTrue && ageTrue && heightTrue && petTrue) {
  console.log("Welcome Comrade!");
}
else {
  console.log("Move along, stop screwing around");
}
