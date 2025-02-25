// Function Expression (Anonymus Function,Arrow Function)
// Anonymus Function

const aa = "Hello...";
const xx = function () {
  console.log("wow wow wow");
};

//Arrow Function
const yy = () => {
  console.log("wow wow wow");
};

const ZZ = (a, b) => {
  console.log(a + b);
};
const mm = (a) => {
  return a * 100;
};

const nn = () => console.log("wow...");
// const nn = () => {
//   console.log("wow...");
// };
const oo = (x, y) => x ** y;
// const oo = (x, y) => {
//   return x ** y;
// };

xx();
yy();
ZZ(10, 20);
console.log(mm(999));
console.log(aa);
