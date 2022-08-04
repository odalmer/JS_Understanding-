var arr = [
  "first",
  {
    name: "bb",
    lastname: "sita",
  },
  function (name) {
    var greeating = "klk ";
    console.log(greeating + name);
  },
  "klk",
];
console.log(arr);
arr[2](arr[1].name)
