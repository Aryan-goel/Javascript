function z() {
    var b=900;
  function x() {
    var a = 10;
    function y() {
      console.log(a,b);
    }
    y();
  }
  x();
//   var z = x();
//   console.log(z);

  //! closure is a funtion bundled together with its lexical env (surrounding state)
}

z();
