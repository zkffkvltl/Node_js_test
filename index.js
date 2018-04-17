console.log("Hello, world");
console.log('Node.js version: '+process.version);
console.log(process.memoryUsage());
console.log(process.env);
console.log(module);

const circle=require('./circle'); //circle(.js)
console.log('Area of a circle = '+circle.area(3));
console.log('Circumference of a circle = '+circle.circum(3));
console.log('PI= '+circle.pi);

const square=require('./square');
let mySquare=square(4);
console.log('Area of a square = '+mySquare.area());