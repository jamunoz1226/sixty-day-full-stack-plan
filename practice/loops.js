/*
PHASE 1 - FUNDAMENTALS
Focus: JavaScript Loops

Session flow:
1) Learn
2) Build
3) Reinforce
*/

// -------------------------------
// 1) LEARN (plain English)
// -------------------------------
/*
A loop repeats a block of code so you do not write the same code again and again.

Think: "Start -> Check rule -> Run code -> Update -> Repeat"

for loop is best when you know how many times to repeat.
while loop is best when you repeat until a condition changes.
*/

// PSEUDOCODE (for loop)
/*
set counter = 1
while counter is <= 5
  print counter
  add 1 to counter
stop
*/

// -------------------------------
// 2) BUILD (fill in the blanks)
// -------------------------------

// Exercise A: Print numbers 1 to 5
for (let i = ___; i <= ___; i++) {
  console.log(i);
}

// Exercise B: Print even numbers 2 to 10
for (let n = ___; n <= ___; n += ___) {
  console.log(n);
}

// Exercise C: Use a while loop to print 3, 2, 1
let count = ___;
while (count >= ___) {
  console.log(count);
  count--;
}

// -------------------------------
// 3) REINFORCE (challenge)
// -------------------------------
/*
Challenge (no solution yet):
- Print this pattern using loops only:
*
**
***

Hint:
- Outer loop controls row number
- Inner loop builds stars for that row
*/