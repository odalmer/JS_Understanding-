function Greet(firstname, lastname, language) {
  language = language || "en";

  if (arguments.length === 0) {
    console.log("pero mamañemaso a quien diablo voya saluda");
    console.log("----------------");
    return; //get out of the function
  }
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log("arg 0: " + arguments[0]);
  console.log("----------------");
}

Greet();
Greet("Juan ");
Greet("Juan ", "soro");
Greet("Juan ", "Soro", "creol");

function getPerson() {
  //put
  return {
    firstname: "toni",
  };
  // instead of
  // return
  //  {
  //    firstname: "toni",
  //  }
}

var firstname = "pepe";
var greeting = "hello it's me";
//Immediately Invoked Functions Expressions (IIFEs)
(function (global, name) {
  var greeting = "klk";
  global.greeting = "lo cacabele";
  console.log(this.greeting + " " + name);
})(global, firstname);

console.log(greeting);
