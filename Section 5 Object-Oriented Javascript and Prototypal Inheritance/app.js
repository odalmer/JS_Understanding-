var person = {
  firstname: "defolt",
  lastname: "defolt",
  address: "diresion",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

//Dont do this ever, for demostration purpuses only
john.__proto__ = person;
console.log(john.getFullName());

var jane = __proto__;

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}

// console.log(person.getFullName.apply(john));
