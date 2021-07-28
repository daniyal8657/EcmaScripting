const AreaOfRectangle=(b, x) => b*x ;

const AreaOfTriangle=(b,h) => 1/2*b*h ;

const AreaOfCircle=(r1) => 3.14 * r1 * r1 ;

const AreaOfCircle2=(r2) => 3.14 * r2 * r2;

console.log(`The Area of Rectangle is ${AreaOfRectangle(5,8)} sq. unit`);

console.log(`Area of a Triangle is ${AreaOfTriangle(20,30)} sq. unit`);

console.log(`Area of a Circle is ${AreaOfCircle(49)}`);

// const x=10;
// const b=15;
// const h=30;
// const r1=7;
// const r2=5;

// console.log(`Area of Trapezium is ${AreaOfRectangle(b, x) + AreaOfTriangle(b, h - x)}`);


console.log(`Area of diagram is ${AreaOfRectangle(x,b) + AreaOfTriangle(b, h-x) +  1/2*AreaOfCircle(r1) - AreaOfCircle2(r2)}`);
