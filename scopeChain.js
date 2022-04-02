function a() {
  var b = 10;
  c();
  function c() {
      console.log(b);
  }
}

a();
//console.log(b);
 //?lexical env is the local memory along with lexical env of its parent
 //? here function c's lexical  env is function a and a's lexical env is GEC
 //! the chain of this lexical env is known as scope chain