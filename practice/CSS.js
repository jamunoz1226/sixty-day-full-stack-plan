/*
xxWrite a function named inchesToCentimeters that takes two parameters: a number of feet (ft) and a number of inches (in). 
TODO: The function should convert these values into centimeters and return the result. 
Note that there are 2.54 centimeters per inch, and 12 inches per foot.

For example, the call inchesToCentimeters(5, 11) should return 180.34 (from (5 * 12 + 11) * 2.54).

If either argument passed is negative, throw an exception with the message, "values for feet and inches must be non-negative".
*/

function inchesToCentimeters(feet, inches){
    // convertCentimeters = 2.54 * inches;
    // convertFeet = convertCentimeters * feet;

    total = (feet * 12 + inches) * 2.54;

    if (feet < 0 || inches < 0) {
        throw new Error("Values for feet and inches must be non-negative.");
      } else {
        console.log(total);
      }
}

inchesToCentimeters(5, 11);
inchesToCentimeters(4, 2)
inchesToCentimeters(0, 0)
inchesToCentimeters(-1, 1)
inchesToCentimeters(1, -1)

/*
To-do list (layman’s terms)
Return the answer, don’t only print it
After you compute centimeters, use return with that number so the caller gets 180.34, 127, or 0. Think: the test asks “what did you get back?” not “what did you print?”

Stop using console.log for the normal case inside the function
The grader marked those numbers as unexpected console output. Build the number, return it, and don’t log it inside inchesToCentimeters unless the instructions explicitly say to print.

Check for bad inputs before you do the math
At the start of the function: if feet or inches is negative, throw immediately. Then do the conversion and return. That way negatives never “fall through” to a normal return.

Throw the right kind of thing
Use whatever your course expects (often throw new Error("exact message here") in JavaScript). The grader’s “expected … String” usually means the exception’s message must be that string, not that you literally throw the word "String".

Match the error message exactly
Copy the message from the assignment character for character (capital letters, punctuation). One wrong letter or period can still fail other checks even if you throw.

Clean up the bottom of your file
If you have lines like inchesToCentimeters(5, 11) that log results for your own testing, remove them or comment them out before submit—those calls often cause the unexpected 180.34, 127, 0 in the grader’s console.

*/