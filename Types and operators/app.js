function Coercion() {
  //Left to rigth associativity
  console.log(3 < 2 < 1); //return true cuz 3 < 2 = false, false < 1 = true
  console.log(Number(false)); //return 0
  console.log(Number(undefined)); //return NaN(not a number)
  console.log(Number(null)); //return 0
  console.log(null == 0); //false
  console.log(null < 1); //true
  console.log("" == 0); //true
  console.log("" == false); //true
  // usar eta mielda ===
  console.log(3 === 3); //true
  console.log("3" === 3); //false

  var a = 0;
  var b = false;

  if (a === b) {
    console.log("they are equal");
  } else {
    console.log("Nope, not equal");
  }
  // Also use !== and not !=

  // Booleans
  var a;
  a = 0; //0 = false
  if (a || a === 0) {
    console.log("true xd");
  }
}
var libraryName; 
windows.libraryName = windows.libraryName || "Lib2";