function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("hello " + firstname + " " + lastname);
    }
    if (language === "es") {
      console.log("klk " + firstname + " " + lastname);
    }
  };
}
// makeGreeting("es")("juan", "soto");

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");
greetEnglish("John", "Doe");
greetSpanish("juan", "nantonio");

//Callback function
(function (callback) {
  var a = 119;
  callback();
})(function () {
  console.log("aaaaa");
});
console.log("---------------------");

var person = {
  firstname: "La",
  lastname: "Maxima",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};
var logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Argumets: " + lang1 + " " + lang2);
  console.log("---------------");
};

var logPersonName = logName.bind(person);
logPersonName();
// console.log(person.getFullName());
var arr = ["en", "es"];

logName.call(person, "en", "es");
logName.apply(person, arr);

(function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Argumets: " + lang1 + " " + lang2);
  console.log("---------------");
}.apply(person, ["en", "es"]));

//function borrowing
var person2 = {
  firstname: "Carlo",
  lastname: "montequiu",
};

console.log(person.getFullName.apply(person2));

//function currying
function multiply(a, b) {
  return a * b;
}
var multiplyByTwo = multiply.bind(this, 2); //always will multiply by 2
console.log(multiplyByTwo(6))
