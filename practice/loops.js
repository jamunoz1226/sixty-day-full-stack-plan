/**
 * Phase 1 — JavaScript loops (Session notes live in this file)
 *
 * LEARN (plain English)
 * ---------------------
 * A loop repeats a block of code while some condition stays true (or until you break).
 * Think: "Do this again for each item" or "keep trying while X is still true."
 *
 * Common JS loops you'll use early:
 * - for       → best when you know how many times (or you're counting with an index)
 * - while     → best when you only know WHEN to stop, not how many iterations
 * - for...of  → best when you have an iterable (e.g. array) and want each value
 *
 * Pseudocode — for (index loop)
 * -----------------------------
 * SET start index (usually 0)
 * WHILE index is still inside range:
 *   DO something with index (and maybe array[index])
 *   INCREMENT index
 *
 * Pseudocode — while
 * --------------------
 * WHILE condition is true:
 *   DO work
 *   UPDATE something so condition can eventually become false
 *   (otherwise you get an infinite loop)
 *
 * Pseudocode — for...of
 * -----------------------
 * FOR each item IN collection:
 *   DO something with item
 */

console.log(" ---- Loops practice — read the comments above, then complete BUILD below. ----");

// =============================================================================
// BUILD (guided — you type the real code)
// =============================================================================

// Task B1 — Count up
// Goal: Use a for loop to console.log the numbers 1 through 5 (inclusive).
// Hint: start at 1, end at 5, step by 1.
//
// Your code (replace the placeholder):

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("--------------------------------");

// Task B2 — Sum an array
// Goal: Given `const nums = [2, 5, 1];`, use a loop to compute the total in `let total = 0`.
// Do not use array built-ins like .reduce for this task (practice the loop).
//
const nums = [2, 5, 1];
let total = 0;
// your for loop here

for(let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);
console.log("--------------------------------");

// Task B3 — Stop early
// Goal: Loop through `const words = ["a", "stop", "c"];` with for...of.
// Print each word until you hit the string "stop" — then break out of the loop.

const words = ["a", "stop", "c"];
// your for...of + if + break here

for(let word of words) {
  if(word === "stop") {
    break;
  }
  console.log(word);
}
console.log("--------------------------------");

// =============================================================================
// REINFORCE (challenge — no solution on purpose)
// =============================================================================
//
// C1 — Fizz-ish
// Write a for loop from 1 to 15. For each number:
//   - If divisible by 3, log "tick"
//   - Else if divisible by 5, log "tock"
//   - Else log the number itself
// Verify: 1,2,tick,4,tock,tick,7,8,tick,tock,11,tick,13,14,tick (check your own output)
for ( let i = 1; i <= 15; i++){
  if (i % 3 === 0){
    console.log("tick");
  } else if (i % 5 === 0) {
    console.log("tock");
  } else {
  console.log(i);
  }
}

console.log("--------------------------------");

// C2 — Guard rail

// Write a while loop that starts with let n = 1 and doubles n each iteration (n = n * 2).
let n = 1;
let count = 0;

// Stop when n would exceed 100. Log n on each iteration. Count how many times you doubled.
while(n < 100){
  console.log(n);
  n *= 2;

  count++;
}

console.log("Doubled " + count + " times.");
console.log("--------------------------------");

// C3 — Explain back (no code)
// In your own words: when would you pick for vs while vs for...of? One sentence each.

// - for loop when i know the Range count x number of times. 
// - While loop when i need the loop to continue until value changes. 
// - for...of to go through each item. Add a break if needed.