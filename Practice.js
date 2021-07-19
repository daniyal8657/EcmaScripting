const SquareRootOfNum = (num1) => Math.sqrt(num1);

console.log(`Square Root is ${SquareRootOfNum(49)}`);

const PowerOfNumb = (x,y) => Math.pow(x, y);

console.log(`The Power is ${PowerOfNumb(2,3)}`);



const CollectionSumOfEvenOdd=(numbers) => {
    let sumEven=0;
    let sumOdd=0;

    numbers.forEach((element) => {
    element%2==0 
    ? (sumEven=sumEven+element)
    : (sumOdd=sumOdd+element)
    });
}

return (`The Sum of Even =${sumEven}
Sum of Odd =${sumOdd}
Total sum=${sumEven+sumOdd}`);

console.log(CollectionSumOfEvenOdd([23,45,60,43,22,58,51]));