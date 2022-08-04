function yeah() {
  //this is a statement not a expression
  function greet() {
    console.log("hi");
  }
  //this  is a expression cuz return an object (function)
  var anonymousGreet = function () {
    console.log("hi");
  };
  anonymousGreet();
  function log(a) {
    a();
  }
  log(function () {
    console.log("ni cuanta prueba papadio");
  });

  console.log(greet);
}

//by value (primitives)
var a = 3;
var b;

b = a;
a = 2;
console.log(a);
console.log(b);

//by reference (all objects (including functions))
var c = { greeting: "hi" };
var d;
d = c;
c.greeting = 'hello'; //mutate
console.log(c);
console.log(d);
//output the same
function changeGreeting(obj){
    obj.greeting = 'hola';
}
changeGreeting(d)
console.log(c);
console.log(d);
