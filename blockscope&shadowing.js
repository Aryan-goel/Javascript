//? these curly braces represent a block
if (true) {
  //* also know as compund statement
  var a = 10;
  //console.log(a);
}
//? a block is used when we want to use multiple statements
//! _______________________//

//? blockscoping
{
  var a = 10;
  let b = 20;
  const c = 30;
  //! let and const cannot be accesed beyond the scope but var can be
}
// console.log(a);
// console.log(b);

const  c=100;
{
    var a = 10;
  let b = 20;
  const c = 30;
    //console.log(c);
}
//console.log(c);

//? when 2 outer scoped variables have a same name they are said to be shadowed by the innerscope variable
const  x=20;
{
    const x=300
    console.log(x)
    {
        const x=30;
        console.log(x)
    }
    console.log(x) 
}
