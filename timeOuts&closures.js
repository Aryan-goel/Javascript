function x() {
  for(var i=1;i<=5;i++){//! it did not work with var and did with let is bcz let is blockscoped
    function close(i){
    setTimeout(function () {
        console.log(i);
      },i*1000);
    }
    close(i);//? this works with var this time bcz the i in the close function creates a new copy of i everytime(iteration) 
  }
  
  console.log("ksdfs");
}
x();
//! clousures can have a over consupmtion of memory
  