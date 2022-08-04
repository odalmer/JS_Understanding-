function a() {
  console.log(this);
  this.newvariable = "hello";
}

var b = function () {
  console.log(this);
};

a();

console.log(newvariable); // not good!

b();

var c = {
  name: "The c object",
  log: function () {
    var self = this;
    self.name = "updated c object";
    console.log(self);

    var setname = function (newname) {
      // this.name = newname; this will create a name variable in the global object
      self.name = newname;
    };
    setname("Updated again the c object");
    console.log(self);
  },
};

c.log();
