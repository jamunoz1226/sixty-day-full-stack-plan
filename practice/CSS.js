/*
xxWrite a function named inchesToCentimeters that takes two parameters: a number of feet (ft) and a number of inches (in). 
TODO: The function should convert these values into centimeters and return the result. 
Note that there are 2.54 centimeters per inch, and 12 inches per foot.

For example, the call inchesToCentimeters(5, 11) should return 180.34 (from (5 * 12 + 11) * 2.54).

If either argument passed is negative, throw an exception with the message, "values for feet and inches must be non-negative".
*/

function inchesToCentimeters(feet, inches){

    if (feet < 0 || inches < 0) {
    
      throw "values for feet and inches must be non-negative";
    } 
    let total = (feet * 12 + inches) * 2.54;

    return total;
}

try{
inchesToCentimeters(5, 11);
inchesToCentimeters(4, 2)
inchesToCentimeters(0, 0)
inchesToCentimeters(-1, 1)
inchesToCentimeters(1, -1)
} catch(error){
  console.log(error);
}