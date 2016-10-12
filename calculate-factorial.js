// BY SIMPLE FOR LOOP
// var run = function(number) {
//   var result = 1;

//   for (i = number; i >= 1; i--) {
//        result *= i;    
//   }
//   console.log('The factorial is : ' + result);
//   return result;
// };
// console.log(run(6));

// BY RECURSION
function fact(x) {
    if (x === 0) {
        return 1;
    }
    return x * fact(x - 1);
}

function run(number) {
    console.log(fact(parseInt(number, 10)));
}