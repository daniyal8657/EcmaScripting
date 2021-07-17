const MileageCost=(distance, Mileage, FuelPrice) => Math.round((distance/Mileage)*FuelPrice);

console.log(`Amount need to fill fuel is Rs. ${MileageCost(303,37,110.08)}`);

// ----Math.ciel for rounding off top value------//
//-------Math.round for rounding off--------//
//---------Math.floor for rounding lower value------//