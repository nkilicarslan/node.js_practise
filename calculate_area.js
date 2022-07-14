//console.log('Please type the radius');

const arguments = process.argv.slice(2);
var pi = 3.14159;
var area;
function calculate_area(radius){
    area = pi * radius * radius;
}

calculate_area(arguments[0]*1);
console.log(area);