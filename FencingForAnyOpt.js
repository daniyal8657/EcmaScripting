const FencingForAnyOpt=(edges, NumberOfWire, rate) => {
    let sum=0;
    edges.forEach(element => {
        sum=sum+element;
        
    });
    return sum =  sum * NumberOfWire * rate;
}
{

console.log( [5,2,7,9,10,8,17,115,10], 5, 10)
}