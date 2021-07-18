const CollectionSumOfEven = (numbers) => {
    let sumEven=0;
    let sumOdd=0;
    numbers.forEach((element) => {
        element % 2 == 0
        ? (sumEven = sumEven + element)
        : (sumOdd = sumOdd + element);
        
    });
    return `Sum of Even Numbers=${sumEven}
    and sum of Odd Numbers=${sumOdd}
    sum of Total=${sumEven+sumOdd}`
};

console.log(CollectionSumOfEven([5,7,19,4,23,7]));
