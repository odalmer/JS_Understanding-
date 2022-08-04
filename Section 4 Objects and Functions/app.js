var Tony = {
  firstname: "Tony",
  lastname: "Montana",
  isGay: "bro look at that name watchu think X D",
  address: {
    street: "totoe tu gva",
    city: "pluton",
    state: "din't asked",
  },
};
function Greet(person) {
  console.log("hi " + person.firstname);
}
Greet(Tony);
Greet({ firstname: "mmgva", lastname: "pechoepaloma" });
Tony.address2 = {
  street: "tiene do direccione y de to el marico...",
};
//Name spacing
// insted of
var greet = "hola"
var greet = "hello";
// use
var english = { greet: "hello" };
var spanish = { greet: "hola" };

console.log(spanish.greet);

var ObjectLiteral = {
    firstname: 'pelcose',
    isAProgrammer: true
}

console.log(JSON.stringify(ObjectLiteral));

var jsonValue= JSON.parse('{"firstname":"tedito", "isAProgramme": false}')
console.log(jsonValue)