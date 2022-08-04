const doWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
};

const doOtherWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("sup");
  }, 3000);
};

let someText = new Promise(doWork);

someText
  .then((val) => {
    console.log("1st log: " + val);
    return "How are you"
  })
  .then((val) => {
    console.log(val);
  });
