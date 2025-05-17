function func1() {
  console.log("function 01");
}

const func2 = (val2) => {
  console.log("function 02 - " + val2);
}

// Here now val is become Function(Type) function(value). so val is the function. so we call it in the function body.
function func3(callback) {
  callback(25);
}

func3 ((val) => {
  console.log(val);
})



// func3(func2)

// We pass another function as an argument for function 03
// func3(function () {
//   console.log('Print Function 2');
// });
// func2();
// func1();

