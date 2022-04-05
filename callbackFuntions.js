//* call back functions 
function x(y) {
console.log('x');
y();
}
x( function y(){
    console.log('y');
})

setTimeout(function () {
    console.log("timer")
},5000)
