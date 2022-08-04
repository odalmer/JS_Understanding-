function greet(wattosay) {
  return function (name) {
    console.log(wattosay + " " + name);
  };
}

greet("hi")("jose");
var sayHi = greet("hi");
sayHi("Juan");

//-----------------------------------------
function buildFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();
//===================================
function buildFunction2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs2 = buildFunction2();
console.log("------------------");
fs2[0]();
fs2[1]();
fs2[2]();
