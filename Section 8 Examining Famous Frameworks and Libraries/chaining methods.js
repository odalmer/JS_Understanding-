// var q = $("ul.people li").addClass("newclass").removeClass("people");

// chaining methods
var Person = {
  greet: function () {
    console.log("hi");
    return this;
  },
  getFullName: function (firstname, lastname) {
    console.log(firstname + " " + lastname);
    return this;
  },
};

Person.greet().getFullName('juan','david');
  
