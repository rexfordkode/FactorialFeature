const Calculate = {
   factorial(inputNumber) {
    for (let i = inputNumber - 1; i >= 1; i--) {
    if(inputNumber === 0) {
      return 1;
    }
    inputNumber *=  i; 
    }
    return inputNumber;
}
}
module.exports = Calculate;


