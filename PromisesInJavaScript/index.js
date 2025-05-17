function helloACPT(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 50) {
        resolve('This student is pass');
      } else {
        reject('This student is fail');
      }
    }, 1000)
  });
}

// The setTimeout() function is not need for this function. but we use it if the function is get time to do like large algorithm.

console.log('=============')

helloACPT(44)
  .then((val) => {
    console.log(val);
  })
  .catch((val) => {
    console.log(val);
  })
  // .finally(() => {
  //   console.log("finally");
  // });

console.log('===========-------')
