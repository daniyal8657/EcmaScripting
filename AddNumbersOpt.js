//------------Fat Arrow Function---------------//
const AddNumbersOpt=(num1, num2)=> num1+num2;
const SubsNumber = (num1, num2) => num1-num2;
const MultpNumber = (num1, num2) => num1*num2;


console.log(AddNumbersOpt(7,8));

console.log("Sum of given numbers are "+ AddNumbersOpt(34,64));

console.log("Sum of 10 and 15 is " + AddNumbersOpt(10,23));

console.log(`%%%%%%%%%%
Sum of 
70 + 30 = ${AddNumbersOpt(70,30)}
70 - 30 = ${SubsNumber(70,30)}
70 * 30 = ${MultpNumber(70,30)}

&&&&&&&&&&`);