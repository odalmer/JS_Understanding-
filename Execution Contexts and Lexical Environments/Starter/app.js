function a() {
  console.log("Called a");
}
function b() {
  console.log("Called b");
}
function c() {
  var myVar = "var in c";
  console.log("Called c");
  function d() {
    console.log(myVar);
  }
  d();
}
b();
c();
var myVar = "globalvar";
// console.log(a);
// var a;
// console.log(a);
