var a = 3;
console.log(typeof a);

var b = "klk";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); //nigg what the heck
console.log(Object.prototype.toString.call(d));
 function Person(name){
    this.name = name;
 }
 var juan = new Person('juan');
 console.log(juan instanceof Person);