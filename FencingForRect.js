const FencingForRect=(b, w, NumberOfWire, CostPerFeet) => {
const Perimeter = b+w+b+w;
const TotalCost = Perimeter * NumberOfWire * CostPerFeet;
return TotalCost;
};


console.log(`Total cost for fencing is Rs.${FencingForRect(20, 30, 10, 5)}`);