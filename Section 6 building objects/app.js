function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("hi");
}
// If we put the methods in the function constructor, each object will have the same function multiple times, but if we create it in the prototype, there will be only one method and each object can access it.
Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

var john = new Person("John", "chacorta");
// console.log(john.getFullName());
// console.log(Person.prototype);

String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};
Number.prototype.isPositive = function () {
  return this > 0;
};
var a = new Number(3);

// console.log("John".isLengthGreaterThan(6));
// console.log(a.isPositive());

// OBJECT.CREATE AND PURE PROTOTYPAL INHERITANCE
var person = {
  firstname: "default",
  lastname: "default",
  greet: function () {
    return "hi" + " " + this.firstname;
  },
};

var buan = Object.create(person);
buan.firstname = "buan";
buan.lastname = "bamire";
console.log(buan.greet);
// P