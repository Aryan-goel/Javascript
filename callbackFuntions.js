//* call back functions
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

setTimeout(function () {
  console.log("timer");
}, 5000);

function attach() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", count++); //? the function xyz is the handler function of the button
  });
}
attach();
